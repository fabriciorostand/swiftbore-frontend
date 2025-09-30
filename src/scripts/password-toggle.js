document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('toggle-password');
    const eyeIcon = document.getElementById('eye-icon');

    // Mostrar ou esconder o botão dependendo se há texto
    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length > 0) {
            toggleButton.classList.remove('hidden');
        } else {
            toggleButton.classList.add('hidden');
            // Reset: senha oculta e ícone olho fechado
            passwordInput.type = 'password';
            eyeIcon.src = '../assets/icons/eye-visibility-off.png';
        }
    });

    toggleButton.addEventListener('click', (e) => {
        e.preventDefault();

        if (passwordInput.type === 'password') {
            // Mostra a senha
            passwordInput.type = 'text';
            eyeIcon.src = '../assets/icons/eye-visibility.png'; // ícone olho aberto
        } else {
            // Esconde a senha
            passwordInput.type = 'password';
            eyeIcon.src = '../assets/icons/eye-visibility-off.png'; // ícone olho fechado
        }
    });
});