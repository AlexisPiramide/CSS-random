document.querySelectorAll('.opciones').forEach(option => {
    option.addEventListener('click', () => {
        // Remove selected class from all options
        document.querySelectorAll('.opciones').forEach(opt => {
            opt.classList.remove('selected');
            // Show the shadow for all options
            opt.nextElementSibling.style.opacity = '1'; // Show shadow
        });

        // Add selected class to the clicked option
        option.classList.add('selected');
        // Hide shadow for the selected option
        option.nextElementSibling.style.opacity = '0'; // Hide shadow
    });
});
