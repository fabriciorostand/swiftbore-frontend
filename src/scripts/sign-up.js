const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Seleciona os campos
    const nameInput = document.querySelector('input[type="text"]');
    const dobInput = document.querySelector('input[type="date"]');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');

    const name = nameInput.value.trim();
    const dob = dobInput.value;
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validação de campos obrigatórios
    if (!name || !dob || !email || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Digite um e-mail válido.');
        return;
    }

    // Validação de senha mínima
    if (password.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres.');
        return;
    }

    // Validação de idade mínima (por exemplo 18 anos)
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age < 18) {
        alert('Você deve ter pelo menos 18 anos para se cadastrar.');
        return;
    }

    // Se passou nas validações, redireciona para o dashboard
    window.location.href = './dashboard.html';
});