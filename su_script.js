document.addEventListener('DOMContentLoaded', function() {
    // User Name Prompt
    const nameButton = document.getElementById('nameButton');
    const nameOutput = document.getElementById('nameOutput');

    nameButton.addEventListener('click', function() {
        const name = prompt('Please enter your name:');
        nameOutput.textContent = 'Hello, ' + name + '!';
    });

    // Image
    const myImage = document.getElementById('myImage');
    myImage.addEventListener('click', function() {
        if (myImage.width === 150) {
            myImage.width = 300;
        } else {
            myImage.width = 150;
        }
    });

    // Customized Navigation Menu
    const menuItem = document.getElementById('menuItem');
    const menuDropdown = document.getElementById('menuDropdown');

    menuItem.addEventListener('click', function() {
        if (menuDropdown.style.display === 'none') {
            menuDropdown.style.display = 'block';
        } else {
            menuDropdown.style.display = 'none';
        }
    });

    // Navigation Hover Effect
    const navigationItems = document.querySelectorAll('#navigation li');

    navigationItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.style.backgroundColor = 'lightgray';
        });

        item.addEventListener('mouseout', function() {
            item.style.backgroundColor = 'pink';
        });
    });
});
