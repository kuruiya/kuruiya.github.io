document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let clicked = false;
        card.addEventListener('click', function() {
            if (!clicked) {
                // Remove 'active' class from other cards
                cards.forEach(c => c !== card && c.classList.remove('active'));
                // Add 'active' class to the clicked card
                card.classList.add('active');
                clicked = true;
            } else {
                // Redirect to the link specified in 'data-link' attribute
                const link = card.getAttribute('data-link');
                if (link) {
                    window.location.href = link;
                }
            }
        });
    });

    // Update book count
    const bookCountElement = document.getElementById('book-count');
    const totalBooks = document.querySelectorAll('.card').length;
    bookCountElement.textContent = `มีหนังสือทั้งหมด : ${totalBooks} เล่ม`;
});