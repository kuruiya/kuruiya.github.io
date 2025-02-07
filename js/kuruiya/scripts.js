document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
        let clickCount = 0;
        
        card.addEventListener("click", function() {
            clickCount++;
            
            if (clickCount === 1) {
                card.classList.add("card-clicked");
                setTimeout(() => clickCount = 0, 500); // รีเซ็ตคลิกหลังจาก 500 มิลลิวินาที
            } else if (clickCount === 2) {
                window.location.href = card.querySelector("a").href;
            }
        });
    });
});