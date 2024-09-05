<script src="/scripts/script.js"></script>

document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById("homeLink");
    const gameLink = document.getElementById("gameLink");
    // Add more links as needed

    homeLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default action of link
        navigateToPage("home.html");
    });

    gameLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default action of link
        navigateToPage("game.html");
    });

    // Function to navigate to a page
    function navigateToPage(page) {
        window.location.href = page;
    }
});