document.addEventListener('DOMContentLoaded', function() {
    // Example of form validation
    const form = document.querySelector('.contact-form form');
    const emailInput = document.querySelector('input[type="email"]');

    function validateEmail() {
        const emailValue = emailInput.value;
        if (!emailValue || !/^\S+@\S+\.\S+$/.test(emailValue)) {
            alert('Please enter a valid email address.');
            return false;
        }
        return true;
    }

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting

            // Validate the email when form is submitted
            if (validateEmail()) {
                // Simulate form submission here
                alert('Form is valid and ready to be submitted!');
                // form.submit(); // Uncomment this to submit the form
            }
        });
    }

    // Example of adding interactivity
    const socialMediaLinks = document.querySelectorAll('.social-media a');
    socialMediaLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.opacity = '0.7';
        });
        link.addEventListener('mouseleave', () => {
            link.style.opacity = '1';
        });
    });
});
