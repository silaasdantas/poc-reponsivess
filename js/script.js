document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.mobile-nav .menu-toggle');
    const closeMenu = document.querySelector('.mobile-menu .close-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuItemWithSubmenus = document.querySelectorAll('.mobile-menu .menu-item-with-submenu > a');

    if (menuToggle && mobileMenu && closeMenu) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.add('open');
            menuToggle.style.display = 'none';
        });

        closeMenu.addEventListener('click', function () {
            mobileMenu.classList.remove('open');
            menuToggle.style.display = 'flex';
        });
    }

    menuItemWithSubmenus.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            const submenu = this.nextElementSibling;
            const arrowIcon = this.querySelector('.arrow-icon');

            if (submenu && submenu.classList.contains('submenu')) {
                const openSubmenus = document.querySelectorAll('.mobile-menu .submenu.open');
                openSubmenus.forEach(function (openSubmenu) {
                    if (openSubmenu !== submenu) {
                        openSubmenu.classList.remove('open');
                        const siblingArrow = openSubmenu.previousElementSibling.querySelector('.arrow-icon');
                        if (siblingArrow) {
                            siblingArrow.classList.remove('open');
                        }
                    }
                });

                submenu.classList.toggle('open');
                if (arrowIcon) {
                    arrowIcon.classList.toggle('open');
                }

                // Calcular e definir a altura real do submenu ao abrir/fechar
                if (submenu.classList.contains('open')) {
                    submenu.style.maxHeight = submenu.scrollHeight + 'px';
                } else {
                    submenu.style.maxHeight = '0';
                }
            }
        });
    });
});


document.querySelectorAll('.subnavbtn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        // Fecha todos os outros menus
        document.querySelectorAll('.subnav').forEach(sub => {
            if (sub !== btn.parentElement) sub.classList.remove('open');
        });
        // Alterna o menu clicado
        btn.parentElement.classList.toggle('open');
    });
});

// Fecha o menu ao clicar fora
document.addEventListener('click', function () {
    document.querySelectorAll('.subnav').forEach(sub => sub.classList.remove('open'));
});
