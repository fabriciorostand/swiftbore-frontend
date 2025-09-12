const signinButton = document.getElementById('signin-button');

signinButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = './pages/dashboard.html';
});