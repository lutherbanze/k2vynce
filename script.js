// script.js

// Exemplo de funcionalidade para o menu hamburguer em mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links'); // Você precisaria ajustar o HTML para que os links fiquem dentro de uma div que possa ser mostrada/escondida

if (menuToggle && navLinks) { // Verifica se os elementos existem
    menuToggle.addEventListener('click', () => {
        // Adicione uma classe 'active' ao navLinks para mostrar/esconder
        // navLinks.classList.toggle('active');
        // Por exemplo, se .nav-links estiver com display:none,
        // a classe .active poderia ter display:flex e flex-direction:column
        alert("Menu toggle clicado! Implemente a lógica de exibição do menu aqui.");
    });
}


// Outras interatividades que o JavaScript poderia controlar:
// 1. Carrosséis ou sliders de imagens/benefícios.
// 2. Validação de formulários (se houvesse).
// 3. Animações ao rolar a página (scroll animations).
// 4. Mudança de conteúdo dinâmico sem recarregar a página (ex: abas em seções de planos).
// 5. Interação com modais ou pop-ups.

document.addEventListener('DOMContentLoaded', () => {
    console.log("Página carregada e pronta para interações JavaScript.");

    // Exemplo: Smooth scroll para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});