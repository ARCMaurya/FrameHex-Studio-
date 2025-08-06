document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate form submission
    document.getElementById('form-message').textContent = "Thank you for reaching out! We'll get back to you soon.";
    this.reset();
});