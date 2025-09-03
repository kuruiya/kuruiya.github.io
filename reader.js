document.addEventListener("DOMContentLoaded", () => {
  // Use the new library key
  const LIBRARY_KEY = "novel_library_data";
  const SETTINGS_KEY = "kuruiya_reader_settings";

  // --- GET CURRENT NOVEL FROM URL ---
  const urlParams = new URLSearchParams(window.location.search);
  const novelId = parseInt(urlParams.get('id'));
  
  if (!novelId) {
      alert("No novel selected!");
      window.location.href = 'index.html';
      return;
  }

  const library = JSON.parse(localStorage.getItem(LIBRARY_KEY)) || [];
  let currentNovel = library.find(novel => novel.id === novelId);

  if (!currentNovel) {
      alert("Novel not found!");
      window.location.href = 'index.html';
      return;
  }

  // --- DATA & STATE MANAGEMENT ---
  let readerSettings = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || { fontSize: 1.1, fontFamily: 'serif' };
  let currentChapter = 0;
  let modalChapter = 0;
  let isAdding = false;
  let lastEditorTitle = "";
  let lastEditorContent = "";

  // --- DOM ELEMENT SELECTORS ---
  const readerContainer = document.querySelector('.reader-container');
  const novelTitle = document.getElementById('novel-title');
  const chapterContainer = document.getElementById('chapter');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const editorModal = document.getElementById('editorModal');
  const tocModal = document.getElementById('tocModal');
  const chapterTitleInput = document.getElementById('chapterTitleInput');
  const editorTextarea = document.getElementById('editor');
  const pageCounter = document.getElementById('pageCounter');
  const wordCounter = document.getElementById('wordCounter');
  const addBtn = document.getElementById('addBtn');
  const saveBtn = document.getElementById('saveBtn');
  const deleteBtn = document.getElementById('deleteBtn');
  const importBtn = document.getElementById('importBtn');
  const exportBtn = document.getElementById('exportBtn');
  const importFileInput = document.getElementById('importFile');
  const tocBtn = document.getElementById('tocBtn');
  const tocList = document.getElementById('tocList');
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsPanel = document.getElementById('settingsPanel');
  const increaseFontBtn = document.getElementById('increaseFontBtn');
  const decreaseFontBtn = document.getElementById('decreaseFontBtn');
  const fontStyleBtn = document.getElementById('fontStyleBtn');

  // --- THIS BLOCK WAS MISSING ---
  // It creates the navigation controls inside the editor modal.
  pageCounter.innerHTML = `
    <button id="modalPrevBtn" class="modal-arrow">‹</button>
    <span>Chapter <input id="modalPageInput" type="number" min="1"> of <span id="modalPageTotal"></span></span>
    <button id="modalNextBtn" class="modal-arrow">›</button>
  `;
  // -----------------------------

  // --- CORE FUNCTIONS ---
  function saveToStorage() {
      const fullLibrary = JSON.parse(localStorage.getItem(LIBRARY_KEY)) || [];
      const novelIndex = fullLibrary.findIndex(novel => novel.id === novelId);
      if (novelIndex > -1) {
          fullLibrary[novelIndex] = currentNovel;
          localStorage.setItem(LIBRARY_KEY, JSON.stringify(fullLibrary));
      }
  }
  
  function saveSettings() {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(readerSettings));
  }

  function showChapter(index) {
    currentChapter = index;
    const chapter = currentNovel.chapters[index];
    chapterContainer.innerHTML = `<h2>${chapter.title}</h2>${chapter.content.map(p => `<p>${p}</p>`).join("")}`;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === currentNovel.chapters.length - 1;
    readerContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    updateUI();
  }

  function updateUI() {
    novelTitle.textContent = currentNovel.title;
    document.documentElement.style.setProperty('--reader-font-size', `${readerSettings.fontSize}em`);
    document.documentElement.style.setProperty('--reader-font-family', `var(--font-${readerSettings.fontFamily})`);
    fontStyleBtn.textContent = readerSettings.fontFamily === 'serif' ? 'Serif' : 'Sans-Serif';
  }

  function openModal(modal) { modal.classList.add('show'); }
  function closeModal(modal) { modal.classList.remove('show'); }

  document.getElementById('closeEditorModal').addEventListener('click', () => closeEditor());
  document.getElementById('closeTocModal').addEventListener('click', () => closeModal(tocModal));

  function updateWordCount() {
      const text = editorTextarea.value.trim();
      const wordCount = text ? text.split(/\s+/).length : 0;
      wordCounter.textContent = `${wordCount} words`;
  }
  
  function openEditor(addMode = false) {
    isAdding = addMode;
    if (addMode) {
      document.getElementById("editorTitle").innerText = "Add New Chapter";
      chapterTitleInput.value = "";
      editorTextarea.value = "";
      pageCounter.style.display = 'none';
      deleteBtn.style.display = 'none';
    } else {
      document.getElementById("editorTitle").innerText = "Edit Chapter";
      pageCounter.style.display = 'flex';
      deleteBtn.style.display = 'flex';
      modalChapter = currentChapter;
      loadModalChapter();
    }
    lastEditorTitle = chapterTitleInput.value;
    lastEditorContent = editorTextarea.value;
    updateWordCount();
    openModal(editorModal);
  }

  function closeEditor(force = false) {
    if (!force && (chapterTitleInput.value !== lastEditorTitle || editorTextarea.value !== lastEditorContent)) {
      if (!confirm("You have unsaved changes. Do you want to discard them?")) return;
    }
    closeModal(editorModal);
  }

  function loadModalChapter() {
    const chapter = currentNovel.chapters[modalChapter];
    chapterTitleInput.value = chapter.title;
    editorTextarea.value = chapter.content.join('\n\n');
    updateModalCounter();
  }
  
  function updateModalCounter() {
    const pageInput = document.getElementById('modalPageInput');
    pageInput.value = modalChapter + 1;
    document.getElementById('modalPageTotal').textContent = currentNovel.chapters.length;
    document.getElementById('modalPrevBtn').disabled = modalChapter === 0;
    document.getElementById('modalNextBtn').disabled = modalChapter === currentNovel.chapters.length - 1;
    deleteBtn.disabled = currentNovel.chapters.length <= 1;
  }
  
  editorTextarea.addEventListener('input', updateWordCount);

  saveBtn.addEventListener("click", () => {
    const title = chapterTitleInput.value.trim();
    const paragraphs = editorTextarea.value.trim().split(/\n\s*\n/).filter(p => p);
    if (!title) return alert("Please enter a chapter title.");

    if (isAdding) {
      currentNovel.chapters.push({ title, content: paragraphs });
      currentChapter = currentNovel.chapters.length - 1;
    } else {
      currentNovel.chapters[modalChapter].title = title;
      currentNovel.chapters[modalChapter].content = paragraphs;
      currentChapter = modalChapter;
    }
    saveToStorage();
    showChapter(currentChapter);
    closeEditor(true);
  });
  
  addBtn.addEventListener("click", () => openEditor(true));
  
  deleteBtn.addEventListener("click", () => {
    if (currentNovel.chapters.length > 1 && confirm("Are you sure you want to delete this chapter?")) {
      currentNovel.chapters.splice(modalChapter, 1);
      saveToStorage();
      currentChapter = Math.min(modalChapter, currentNovel.chapters.length - 1);
      showChapter(currentChapter);
      closeEditor(true);
    }
  });

  tocBtn.addEventListener('click', () => {
      tocList.innerHTML = '';
      currentNovel.chapters.forEach((chapter, index) => {
          const li = document.createElement('li');
          li.textContent = `${index + 1}. ${chapter.title}`;
          li.addEventListener('click', () => {
              showChapter(index);
              closeModal(tocModal);
          });
          tocList.appendChild(li);
      });
      openModal(tocModal);
  });

  settingsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      settingsPanel.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
      if (!settingsPanel.contains(e.target) && e.target !== settingsBtn) {
          settingsPanel.classList.remove('show');
      }
  });

  increaseFontBtn.addEventListener('click', () => {
      readerSettings.fontSize = Math.min(2.0, readerSettings.fontSize + 0.1);
      saveSettings();
      updateUI();
  });

  decreaseFontBtn.addEventListener('click', () => {
      readerSettings.fontSize = Math.max(0.8, readerSettings.fontSize - 0.1);
      saveSettings();
      updateUI();
  });

  fontStyleBtn.addEventListener('click', () => {
      readerSettings.fontFamily = readerSettings.fontFamily === 'serif' ? 'sans' : 'serif';
      saveSettings();
      updateUI();
  });
  
  novelTitle.addEventListener('click', () => {
      const input = document.createElement('input');
      input.id = 'titleInput';
      input.value = currentNovel.title;
      novelTitle.replaceWith(input);
      input.focus();

      const saveTitle = () => {
          currentNovel.title = input.value.trim() || "Untitled Novel";
          saveToStorage();
          input.replaceWith(novelTitle);
          updateUI();
      };
      
      input.addEventListener('blur', saveTitle);
      input.addEventListener('keydown', (e) => { if (e.key === 'Enter') saveTitle(); });
  });

  exportBtn.addEventListener('click', () => {
      const dataStr = JSON.stringify(currentNovel, null, 2); // Export current novel only
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${currentNovel.title.toLowerCase().replace(/\s/g, '_')}.json`;
      a.click();
      URL.revokeObjectURL(url);
  });

  importBtn.addEventListener('click', () => alert("Importing chapters into an existing novel is not yet supported."));

  prevBtn.addEventListener("click", () => { if (currentChapter > 0) showChapter(currentChapter - 1); });
  nextBtn.addEventListener("click", () => { if (currentChapter < currentNovel.chapters.length - 1) showChapter(currentChapter + 1); });
  
  // Modal chapter navigation
  document.getElementById('modalPrevBtn').addEventListener('click', () => {
    if (modalChapter > 0) {
      modalChapter--;
      loadModalChapter();
    }
  });

  document.getElementById('modalNextBtn').addEventListener('click', () => {
    if (modalChapter < currentNovel.chapters.length - 1) {
      modalChapter++;
      loadModalChapter();
    }
  });

  document.getElementById('modalPageInput').addEventListener('change', (e) => {
    let val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 1 && val <= currentNovel.chapters.length) {
      modalChapter = val - 1;
      loadModalChapter();
    } else {
      e.target.value = modalChapter + 1; // Revert
    }
  });
  
  chapterContainer.addEventListener('click', () => openEditor(false));

  document.addEventListener("keydown", (e) => {
      const activeEl = document.activeElement.tagName;
      if (activeEl === 'INPUT' || activeEl === 'TEXTAREA') return;

      if (e.key === "ArrowLeft") prevBtn.click();
      if (e.key === "ArrowRight") nextBtn.click();
      if (e.key === "Escape") {
          closeModal(editorModal);
          closeModal(tocModal);
          settingsPanel.classList.remove('show');
      }
  });

  // --- INITIALIZATION ---
  showChapter(currentChapter);
});
