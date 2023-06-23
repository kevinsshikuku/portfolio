
  // Get the form element
  const form = document.querySelector('.contact-form');

  // Add event listener for form submission
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Prepare email body
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    // Create email link with subject and body
    const mailtoLink = `mailto:kevinsshikuku@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(body)}`;

    // Open user's email client with pre-filled email
    window.location.href = mailtoLink;
  });