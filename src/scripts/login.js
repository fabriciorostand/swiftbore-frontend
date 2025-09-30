// Aguarda o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    const signinButton = document.getElementById('signin-button');
    
    if (!signinButton) {
        console.error('Botão de login não encontrado');
        return;
    }

    signinButton.addEventListener('click', function(event) {
        event.preventDefault();

        // Seleciona os campos usando IDs específicos
        const emailInput = document.querySelector('input[type="email"]');
        const passwordInput = document.getElementById('password');

        // Verifica se os elementos existem
        if (!emailInput) {
            alert('Campo de email não encontrado.');
            return;
        }
        
        if (!passwordInput) {
            alert('Campo de senha não encontrado.');
            return;
        }

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

    // Validação simples
    if (!email || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validação básica de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Digite um e-mail válido.');
        return;
    }

    // Validação mínima de senha
    if (password.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres.');
        return;
    }

        // Se passou nas validações, redireciona para o dashboard
        window.location.href = 'dashboard.html';
    });
});