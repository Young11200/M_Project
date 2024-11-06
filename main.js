// This is a basic JavaScript setup to enhance interactivity or dynamic content
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page Loaded!');

    // Example: Dynamically update the intro text after 2 seconds
    setTimeout(() => {
        const intro = document.querySelector('#intro p');
        intro.textContent = 'The introduction text has been updated!';
    }, 2000);
});
