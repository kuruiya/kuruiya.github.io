let currentChapter = 1; // Variable to track the current chapter
let fontSize = 16; // Default font size
let isDarkMode = false; // Track dark mode state

// Chapter content stored in an array
const chapters = [
    {
        ควย
    }
];

// Function to update the chapter content
function updateChapter() {
    const contentDiv = document.querySelector('.content');
    if (!contentDiv) {
        console.error('Content div not found!');
        return;
    }
    contentDiv.innerHTML = `
        <h2>${chapters[currentChapter - 1].title}</h2>
        <p class="story-text">${chapters[currentChapter - 1].content}</p>
    `;
    // Apply current font size
    document.querySelector('.story-text').style.fontSize = fontSize + 'px';
    scrollToTop();
}

// Function to go to the next chapter
function nextChapter() {
    if (currentChapter < chapters.length) {
        currentChapter++;
        updateChapter();
    } else {
        alert('คุณมาถึงบทสุดท้ายแล้ว');
    }
}

// Function to go to the previous chapter
function previousChapter() {
    if (currentChapter > 1) {
        currentChapter--;
        updateChapter();
    } else {
        alert('คุณอยู่บทแรกแล้ว');
    }
}

// Function to adjust font size
function adjustFontSize(increment) {
    fontSize += increment;
    // Limit font size
    fontSize = Math.max(12, Math.min(24, fontSize));
    document.querySelector('.story-text').style.fontSize = fontSize + 'px';
    localStorage.setItem('fontSize', fontSize.toString()); // Save font size
}

// Function to toggle dark mode
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const body = document.body;
    body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString()); // Save dark mode state
}
// Function to return to the main page
function mainpath() {
    window.location.href = "1.html";
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling animation
    });
}
// Function to search text in the content
function searchText() {
    const searchTerm = document.getElementById('search-input').value;
    const storyText = document.querySelector('.story-text');
    const content = storyText.innerText;

    if (content.includes(searchTerm)) {
        alert(`พบคำว่า "${searchTerm}" ในเนื้อหา`);
        storyText.innerHTML = content.replace(new RegExp(searchTerm, 'gi'), match => `<span class="highlight">${match}</span>`);
    } else {
        alert(`ไม่พบคำว่า "${searchTerm}" ในเนื้อหา`);
    }
}

// Function to share on Facebook
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

// Function to share on Twitter
function shareOnTwitter() {
    const text = encodeURIComponent('อ่านเรื่องนี้ที่น่าสนใจมาก!');
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

// Function to share on Line
function shareOnLine() {
    const text = encodeURIComponent('อ่านเรื่องนี้ที่น่าสนใจมาก! ' + window.location.href);
    window.open(`https://social-plugins.line.me/lineit/share?url=${text}`, '_blank');
}

// Text-to-Speech Functionality
let speech = new SpeechSynthesisUtterance();
speech.lang = 'th-TH';

function startSpeech() {
    const storyText = document.querySelector('.story-text').innerText;
    speech.text = storyText;
    window.speechSynthesis.speak(speech);
}

function pauseSpeech() {
    window.speechSynthesis.pause();
}

// Function to populate the sidebar with chapter links
function populateSidebar() {
    console.log('Populating sidebar...'); // Debugging
    console.log('Chapters:', chapters); // Debugging

    const chapterList = document.querySelector('.chapter-list');
    if (!chapterList) {
        console.error('Chapter list element not found!'); // Debugging
        return;
    }

    chapterList.innerHTML = ''; // Clear existing content

    chapters.forEach((chapter, index) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = chapter.title;
        link.onclick = () => {
            currentChapter = index + 1;
            updateChapter();
            toggleSidebar(); // Close sidebar after selecting a chapter
        };
        listItem.appendChild(link);
        chapterList.appendChild(listItem);
    });
}

// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}
window.onload = function () {
    populateSidebar(); // Populate the sidebar with chapters
    loadProgress(); // Load reading progress if available
};

// Save reading progress
function saveProgress() {
    const scrollPosition = window.scrollY;
    localStorage.setItem('readingProgress', scrollPosition);
}

// Load reading progress
function loadProgress() {
    const scrollPosition = localStorage.getItem('readingProgress');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
    }
}

// Load progress when the page loads
window.onload = loadProgress;

// Save progress when the user scrolls
window.onscroll = saveProgress;
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    const body = document.body;
    body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode.toString()); // Save dark mode state
}

// Function to adjust font size
function increaseFontSize() {
    adjustFontSize(2); // Increase font size by 2px
}

function decreaseFontSize() {
    adjustFontSize(-2); // Decrease font size by 2px
}
// Load saved settings and progress
function loadProgress() {
    const savedChapter = localStorage.getItem('currentChapter');
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    const savedFontSize = localStorage.getItem('fontSize');
    const savedDarkMode = localStorage.getItem('darkMode');

    if (savedChapter) {
        currentChapter = parseInt(savedChapter);
    }
    if (savedFontSize) {
        fontSize = parseInt(savedFontSize);
        document.querySele