// Menunggu seluruh dokumen dimuat
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ANIMASI MUNCUL SAAT SCROLL (REVEAL EFFECT)
    const observerOptions = {
        threshold: 0.1 // Animasi jalan saat 10% elemen terlihat di layar
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target); // Hanya jalankan animasi sekali
            }
        });
    }, observerOptions);

    // Targetkan elemen yang ingin diberi animasi (Header, Section, dan Gambar)
    const elementsToAnimate = document.querySelectorAll('header, section, img');
    
    elementsToAnimate.forEach(el => {
        // Setup awal: sembunyikan elemen sedikit ke bawah
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
        
        revealOnScroll.observe(el);
    });

    // 2. FITUR PESAN OTOMATIS WHATSAPP
    const waButton = document.querySelector('.btn-whatsapp');
    
    if (waButton) {
        waButton.addEventListener('click', (e) => {
            // Opsional: Anda bisa menambahkan pesan otomatis di sini
            const message = "Halo Om Donny, saya ingin booking layanan pijat terapi. Tersedia kapan ya?";
            const encodedMessage = encodeURIComponent(message);
            const phoneNumber = "6285691842448";
            
            // Mengarahkan ke WA dengan pesan otomatis
            window.location.href = `wa.me{phoneNumber}?text=${encodedMessage}`;
            
            // Mencegah link default (wa.me) agar tidak bentrok
            e.preventDefault();
        });
    }
});