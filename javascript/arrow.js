document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const isDarkMode = document.body.classList.contains('dark-mode');
            const arrow = this.querySelector('.arrow');

            if (isDarkMode) {
                arrow.style.color = 'black'; // Karanlık modda ok rengi
                arrow.style.transform = 'rotate(180deg)'; // Döndürme işlemi
            } else {
                arrow.style.color = 'black'; // Aydınlık modda ok rengi
                arrow.style.transform = 'rotate(180deg)'; // Döndürme işlemi
            }
        });

        item.addEventListener('mouseout', function() {
            const arrow = this.querySelector('.arrow');
            arrow.style.color = ''; // Varsayılan renk
            arrow.style.transform = ''; // Varsayılan dönüş
        });
    });
});