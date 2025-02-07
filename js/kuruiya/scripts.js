document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function(event) {
            if (event.target.tagName === 'A') {
                return; // ไม่ทำอะไรถ้าคลิกที่ลิงก์
            }

            if (card.classList.contains("expanded")) {
                window.location.href = card.getAttribute("data-link");
            } else {
                cards.forEach(c => c.classList.remove("expanded")); // หดการ์ดอื่นที่ขยาย
                card.classList.add("expanded");
            }
        });
    });
});