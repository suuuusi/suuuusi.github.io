document.addEventListener('DOMContentLoaded', function () {
    const increaseFontButton = document.getElementById('increaseFont');
    const decreaseFontButton = document.getElementById('decreaseFont');
    const toggleColorButton = document.getElementById('toggleColor');
    const body = document.body;

    // Font
    increaseFontButton.addEventListener('click', function () {
        changeFontSize(2);
    });

    decreaseFontButton.addEventListener('click', function () {
        changeFontSize(-2);
    });

    function changeFontSize(change) {
        const currentFontSize = parseFloat(window.getComputedStyle(body).fontSize);
        body.style.fontSize = `${currentFontSize + change}px`;
    }

    // Color
    toggleColorButton.addEventListener('click', function () {
        body.classList.toggle('alternative-color');
    });
});
