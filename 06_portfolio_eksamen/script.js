document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const buttonContainer = document.getElementById('button-container');

    burgerMenu.addEventListener('click', () => {
        buttonContainer.classList.toggle('show');
        burgerMenu.classList.toggle('active'); // Toggle the active class
    });
});
