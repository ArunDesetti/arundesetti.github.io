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

        try {
            // Open user's default email client
            const mailtoLink = `mailto:${emailContent.to}?subject=${encodeURIComponent(emailContent.subject)}&body=${encodeURIComponent(emailContent.body)}`;
            window.location.href = mailtoLink;

            // Clear the form
            contactForm.reset();

            // Show success message
            alert('Thank you for your message! Your default email client will open to send the email.');

        } catch (error) {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again or contact directly via email.');
        }
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
