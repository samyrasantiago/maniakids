// js/main.js

document.addEventListener("DOMContentLoaded", function() {
    
    // --- Lógica para o Menu Hambúrguer ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerButton && navMenu) {
        hamburgerButton.addEventListener('click', function() {
            hamburgerButton.classList.toggle('is-active');
            navMenu.classList.toggle('is-open');
        });
    }

    // --- Lógica para o "Voltar ao Topo" ---
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o salto imediato do link
            
            // Pega o destino do link (o #top-anchor)
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Rola suavemente para o elemento
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth' // A mágica do scroll suave!
                });
            }
        });
    }

});