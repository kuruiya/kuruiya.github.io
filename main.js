document.addEventListener("DOMContentLoaded", () => {
    const LIBRARY_KEY = "novel_library_data";
    const libraryContainer = document.getElementById('library-container');
    const newNovelBtn = document.getElementById('newNovelBtn');

    function getLibrary() {
        const library = localStorage.getItem(LIBRARY_KEY);
        if (library) {
            return JSON.parse(library);
        } else {
            // If no library exists, create one with the user's old novel
            const oldNovel = localStorage.getItem("kuruiya_novel_data");
            if (oldNovel) {
                const novel = JSON.parse(oldNovel);
                novel.id = Date.now(); // Give it a unique ID
                return [novel];
            }
            return []; // Return empty array if no old data either
        }
    }

    function saveLibrary(library) {
        localStorage.setItem(LIBRARY_KEY, JSON.stringify(library));
    }

    function renderLibrary() {
        const library = getLibrary();
        libraryContainer.innerHTML = ''; // Clear the container

        if (library.length === 0) {
            libraryContainer.innerHTML = '<p class="empty-library-message">Your library is empty. Create a new novel to get started!</p>';
            return;
        }

        library.forEach(novel => {
            const novelCard = document.createElement('div');
            novelCard.className = 'novel-card';
            
            const chapterCount = novel.chapters.length;
            novelCard.innerHTML = `
                <h2 class="novel-card-title">${novel.title}</h2>
                <p class="novel-card-meta">${chapterCount} ${chapterCount === 1 ? 'Chapter' : 'Chapters'}</p>
                <div class="novel-card-actions">
                    <a href="reader.html?id=${novel.id}" class="btn btn-primary">Read</a>
                    <button class="btn btn-secondary rename-btn" data-id="${novel.id}">Rename</button>
                    <button class="btn btn-destructive delete-btn" data-id="${novel.id}">Delete</button>
                </div>
            `;
            libraryContainer.appendChild(novelCard);
        });
    }

    // --- Event Listeners ---

    newNovelBtn.addEventListener('click', () => {
        const title = prompt("Enter the title for your new novel:");
        if (title) {
            const library = getLibrary();
            const newNovel = {
                id: Date.now(), // Simple unique ID
                title: title,
                chapters: [
                    {
                        title: "Chapter 1",
                        content: ["Your story begins here..."]
                    }
                ]
            };
            library.push(newNovel);
            saveLibrary(library);
            renderLibrary();
        }
    });

    libraryContainer.addEventListener('click', (e) => {
        const library = getLibrary();
        const novelId = parseInt(e.target.dataset.id);

        // Handle Delete
        if (e.target.classList.contains('delete-btn')) {
            if (confirm("Are you sure you want to permanently delete this novel?")) {
                const updatedLibrary = library.filter(novel => novel.id !== novelId);
                saveLibrary(updatedLibrary);
                renderLibrary();
            }
        }

        // Handle Rename
        if (e.target.classList.contains('rename-btn')) {
            const novelToRename = library.find(novel => novel.id === novelId);
            const newTitle = prompt("Enter the new title:", novelToRename.title);
            if (newTitle) {
                novelToRename.title = newTitle;
                saveLibrary(library);
                renderLibrary();
            }
        }
    });

    // Initial load
    renderLibrary();
});