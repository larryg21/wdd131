document.addEventListener('DOMContentLoaded', () => {

    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('nav');

    if (hamButton && navigation) {
        hamButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            hamButton.classList.toggle('open');
        });
    }

    
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    const currentYearElement = document.getElementById('currentyear');
    if (currentYearElement) {
        currentYearElement.textContent = currentYear;
    }

    const lastModifiedElement = document.getElementById('lastmodified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = lastModified;
    }
});