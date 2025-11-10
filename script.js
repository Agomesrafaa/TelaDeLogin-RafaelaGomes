document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const emailIndup= document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Validação do formulário
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

    // Validação básica
    if (validadeForm()) {
        // Simulação de login bem-sucedido
        alert('Login realizado com sucesso');
        //Aqui você normalmente faria uma requisição para o servidor
        //loginForm.subit();
        
    }
    
