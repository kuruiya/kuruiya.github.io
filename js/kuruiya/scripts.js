document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
        card.addEventListener("click", function() {
            if (card.classList.contains("active")) {
                window.location.href = card.querySelector("a").href;
            } else {
                cards.forEach(c => c.classList.remove("active"));
                card.classList.add("active");
            }
        });
    });
});