document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".desktop-nav ul li");
    const navContents = document.querySelectorAll(".desktop-nav-open");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetId = item.getAttribute("data-target");

            // Oculta todos os conteúdos
            navContents.forEach(content => {
                content.classList.remove("active");
            });

            // Exibe o conteúdo correspondente
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add("active");
            }
        });
    });
});