
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;

    if (email.trim() === '') {
        document.getElementById('message').innerText = 'Please enter your email.';
        return;
    }

    var subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
    subscriptions.push(email);
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));

    document.getElementById('message').textContent = "Thank you for subscribing"
});
