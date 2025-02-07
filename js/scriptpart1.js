let contents = [];
let currentPage = 1;

async function fetchContent() {
    const response = await fetch('../data/content.json');
    contents = await response.json();
    updateContent();
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        updateContent();
    }
}

function nextPage() {
    if (currentPage < contents.length) {
        currentPage++;
        updateContent();
    }
}

function goHome() {
    currentPage = 1;
    updateContent();
}

function goToPage() {
    const pageNumber = document.getElementById('pageNumber').value;
    if (pageNumber >= 1 && pageNumber <= contents.length) {
        currentPage = pageNumber;
        updateContent();
    } else {
        alert('ไม่มีหน้านี้ในนิยาย');
    }
}

function updateContent() {
    const content = document.getElementById('content');
    content.innerHTML = `<p>${contents[currentPage - 1]}</p>`;
}

fetchContent();