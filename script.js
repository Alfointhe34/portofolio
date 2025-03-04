document.addEventListener('DOMContentLoaded', function() {
    // Tambahkan class untuk animasi fade in
    document.body.classList.add('fade-in');

    // Tangkap semua link navigasi
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Jika bukan link external atau anchor
            if (this.getAttribute('href').indexOf('#') !== 0 && 
                this.getAttribute('target') !== '_blank') {
                e.preventDefault();
                
                // Tambahkan class untuk animasi fade out
                document.body.classList.add('fade-out');

                // Tunggu animasi selesai, lalu pindah halaman
                setTimeout(() => {
                    window.location.href = this.getAttribute('href');
                }, 500);
            }
        });
    });
}); 