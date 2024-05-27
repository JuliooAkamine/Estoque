const formCadastro = document.getElementById("register.form");
const cadastrar = document.getElementById("btn_register");
const btnVisibilityOFF = document.getElementById("visibility_off");
const btnVisibilityOFF2 = document.getElementById("visibility_off2");

//Função para alterar a visibilidade do input de senha
btnVisibilityOFF.addEventListener("click", function(){
    if(btnVisibilityOFF.src.endsWith("visibility_on.svg")){
        btnVisibilityOFF.src = "../assets/icons/visibility_off.svg"
        document.getElementById("user_password_register").type = "password"
    } else {
        btnVisibilityOFF.src = "../assets/icons/visibility_on.svg"
        document.getElementById("user_password_register").type = "text"
    }
});

//Função para alterar a visibilidade do input de confirmar senha 
btnVisibilityOFF2.addEventListener("click",function(){
    if(btnVisibilityOFF2.src.endsWith("visibility_on.svg")){
        btnVisibilityOFF2.src = "../assets/icons/visibility_off.svg"
        document.getElementById("user_password_confirmed").type = "password"
    } else {
        btnVisibilityOFF2.src = "../assets/icons/visibility_on.svg"
        document.getElementById("user_password_confirmed").type = "text"
    }
});

cadastrar.addEventListener("click", function(event) {
    // Pegar os valores dos campos de email e senha
    const email = document.getElementById("user_email_register").value;
    const password = document.getElementById("user_password_register").value;
    const passwordConfirmed = document.getElementById("user_password_confirmed").value;

    // Verificar se os campos estão vazios
    if (email === "" || password === "" || passwordConfirmed === "") {
        Swal.fire({
            title: "Preencha todos os campos",
            icon: "warning"
        });
        event.preventDefault(); // Impedir o envio do formulário
        return; // Sair da função para evitar a execução adicional do código
    }

    // Verificar se o email já está cadastrado
    const usuarios = localStorage.getItem('usuarios') ? JSON.parse(localStorage.getItem('usuarios')) : [];
    const usuarioEncontrado = usuarios.find(user => user.emailUser === email);

    if (usuarioEncontrado) {
        Swal.fire({
            title: "Email já tem cadastro",
            icon: "warning"
        });
        event.preventDefault();
        return;
    }

    // Verificar se as senhas são iguais
    if (password !== passwordConfirmed) {
        Swal.fire({
            title: "Senhas não coincidem",
            icon: "error"
        });
        event.preventDefault();
        return;
    }

    // Se todas as verificações passarem, cadastrar o usuário
    const novoUsuario = {
        emailUser: email,
        passwordUser: password
    };

    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    Swal.fire({
        title: "Usuário cadastrado com sucesso",
        icon: "success"
    });

    console.log(novoUsuario);

    // Armazenar indicador de login
    localStorage.setItem('isLoggedIn', true);

    // Redirecionar para a página inicial após o cadastro
    window.location.href = "home.html"; // Altere "home.html" para o caminho correto da sua página inicial

    event.preventDefault(); // Impedir o envio do formulário
});

// Verificar se o usuário está logado e redirecioná-lo para a página inicial
document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn) {
        window.location.href = "home.html"; // Altere "home.html" para o caminho correto da sua página inicial
    }
});
