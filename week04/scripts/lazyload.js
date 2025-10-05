function updateFooter() {
    const lastModified = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('lastmodified').textContent = lastModified.toLocaleDateString('en-US', options);
    document.getElementById('currentyear').textContent = new Date().getFullYear();
}

function handleImageFadeIn() {
    const imagesToAnimate = document.querySelectorAll('img.fade-in-img');

    imagesToAnimate.forEach(img => {
        const animateIn = () => {
            img.classList.add('loaded');
        };

        if (img.complete) {
            animateIn();
        } 
        else {
            img.addEventListener('load', animateIn);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateFooter();
    handleImageFadeIn();
});