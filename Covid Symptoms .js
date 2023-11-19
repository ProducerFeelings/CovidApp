window.onload = function() {
    function changeBackgroundColor() {
        // Set the background color to green
        document.body.style.backgroundColor = 'green';
    }

    // Change the background color every 5 seconds
    setInterval(changeBackgroundColor, 5000);
};