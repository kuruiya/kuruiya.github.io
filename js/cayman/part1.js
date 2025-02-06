let currentChapter = 1; // Variable to track the current chapter
let fontSize = 16; // Default font size
let isDarkMode = false; // Track dark mode state

// Chapter content stored in an array
const chapters = [
    {
     title:"กฎข้อที่ 1 : การเดินกลับบ้านเพียงลำพัง",
     content: `
        มิติกฎพิศวง</br></br>

Dear dairy ผมชื่อกวินอยู่ชั้น ม. ปลาย</br></br>

ผมเป็นคนที่ไม่ค่อยจะมีเพื่อนมากนักหรอก
ไม่สิต้องบอกว่า</br></br>

ไม่มีเลยจะดีกว่าเพราะผมนั้นเรียกได้ว่าเข้า</br>
สังคมไม่เป็นเลย พ่อแม่ผมแยกทางกัน
ตั้งแต่ผมอยู่ชั้น ม.1 แม่ผมก็ดันมาเสียอีกพ่อ
ก็ติดยา ตุ้ม!!</br></br>
...แม่งเอ๊ยยยย!!!.... เสียงทุบโต๊ะมันเลยทำให้ผม
ต้องทำงาน</br>
💧หาเลี้ยงปาก💧ท้องและส่งตัวเองเรียนไปด้วยในเวลา...💧💧..เดียว...กัน💧💧 ซืดดด~~~ฮาาา~~~....ฟิ้ววเขียนแบบนี่ก็ได้</br>
ระบายไปอีกแบบแฮะ กวินกล่าวพร้อมน้ำตาที่
ซึมออกมา</br>
เฮ้ยๆๆนี้ใครวะเนี้ยไอเด๋อวินนิหว่า เพ่ๆไปส่งผมที่
หอนี้เท่าไรออ 5555!!</br>
เสียงของไอ้พวกโจ๋ที่คอยแกล้งเขาอยู่ทุกๆวัน 555 ใช่ๆละเดียวไปส่งกูต่อด้วยนะ55 เสียงพวกกุ๊ยคนอื่นๆในแก๊ง</br>
 ละนีัไรเนี้ยยยยหนังสือไรวะเอามาดูเดะ เอ้ยย!เฮ้ยย!เอามาา!!</br>
อะไรรๆดูหน่อยไม่ได้อ่อ ไหนดูดิ...โหเยดดดๆ แม่งงงเขียนไดอาลีวะ55⁵⁵5⁵55⁵55 </br>
เสียงพวกมันหัวเราะ </br>
ดูพอใจยังเอามาได้ละ </br>
เออพอใจละ คากกกกก!~!~!~ ถุ๋ย!! ตับ!! มันถุ๋ยน้ำลายใส่ในสมุดของกวินแล้วปิด<br>
พร้อมส่งคืนให้เขา 55⁵⁵555⁵55⁵5⁵5 แกล้งไอ้ห่านี้แม่งโคตรหนุกเลยวะ
ใช่ๆลูกพี่แกล้งคนไม่มีทางสู้นี้แหละวิถีกุ๊ยอย่างเรา </br></br>
((เสียงพูดค่อยเบาลงตามยะทาง))</br>
แหนะไอเวรมึงชมหรือด่าเนี่ย เอาก็ชมไงพี่ อ้อแล้วไป</br>

<p>กวินเขาไม่ได้ตอบโต้อะไรจากนั้นแล้วเก็บกระเป๋าพร้อมทิ้ง dairy ของเขาลงถังขยะเพราะใจจริงแล้วเขาก็ไม่ได้อยากเก็บมันเอาไว้</p>

<p>กวินมองไปที่นาฬิกาปรากฎว่าตอนนี้เป็เวลา 19:35เวรและค่ำสะแล้วบ้าเอ๊ยยยต้องเดินกลับด้วยลืมสะนิดเลย</p>

<p>เขานั้นรีบเดินกลับด้วยความเร่งรีบ</p>

<p>เวรๆๆๆเวร!~ไม่น่าเพลินเลยยยเราเชี้ย!เอ๊ยย~ทางกลับบ้านเราแม่ง ก็ด๊านนนน!!เป็นทางเปลี่ยว ปล่าวๆสะด้วย</p>

20 นาทีผ่านไป โอ้ยยย ทำไมมันไม่ถึงบ้านสะทีวะ หึ..... เออนัันดิทำไมมันยังไม่ถึงบ้านปกติบ้านเรามันเดินแค่ 5 นาทีก็ถึงละนิ นี้เราาเดินหลงยั่งงั้นหรอ..เหี้ย!!!กูหลงซวยแล้วทำไงดีว๊ะ ซี๊ดดดโอ๊ยยยย!! เชี้ยๆๆเชี้ย!! ทำไงดีๆๆ .จิ๊. เออ เดี๋ยวเดินไปก่อนละกัน คุ้นๆอยู่แถวนี้
     `
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