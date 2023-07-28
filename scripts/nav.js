// Smooth scrolling function
function smoothScroll(target) {
    const targetElement = document.querySelector(target);
    const offsetTop = targetElement.getBoundingClientRect().top;
    const headerOffset = 50; // Adjust this value as needed to account for fixed headers or other elements.

    window.scrollBy({
        top: offsetTop - headerOffset,
        behavior: 'smooth'
    });
}

// Attach event listeners to the navigation items
$(document).ready(function() {
    $('.items a').on('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior (jumping to the section)
        const target = $(this).attr('href');
        smoothScroll(target);
    });
});
