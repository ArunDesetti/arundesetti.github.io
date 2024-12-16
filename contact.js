document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Create email content
        const emailContent = {
            to: 'arundesetti@gmail.com',
            subject: `New Contact Form Message from ${name}`,
            body: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `
        };

        alert('Sorry for your inconvenience, Arun cannot receive any messages at the moment through this method!\nReach him at his email address.');
    });

    // Optional: Add form validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('invalid', function(e) {
            e.preventDefault();
            this.classList.add('error');
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                this.classList.remove('error');
            }
        });
    });
});
