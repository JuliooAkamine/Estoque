// Autenticando Usuario
const btnLogin = document.getElementById("btn_login");

btnLogin.addEventListener("click", function(event) {
    event.preventDefault();

    // Resgatando array de usuários no localStorage
    let usuariosJSON = localStorage.getItem("usuarios");

    if (usuariosJSON === null) {
        Swal.fire({
            title: "Nenhum usuário cadastrado",
            icon: "warning"
        });
        return;
    }

    let usuarios = JSON.parse(usuariosJSON);

    let email = document.getElementById("user_email").value;
    let password = document.getElementById("user_password").value;

    if (email === "" || password === "") {
        Swal.fire({
            title: "Preencha todos os campos",
            icon: "warning"
        });
    } else {
        // Verificar se existe um usuário com o email fornecido
        let usuarioEncontrado = usuarios.find(function(user) {
            return user.emailUser === email;
        });

        if (usuarioEncontrado) {
            // Se o usuário for encontrado, verificar se a senha está correta
            if (usuarioEncontrado.passwordUser === password) {
                Swal.fire({
                    title: "Autenticação bem sucedida",
                    icon: "success",
                    showConfirmButton: false
                });

                setTimeout(() => {
                    window.location.replace("pages/home.html");
                }, 1000);

                // Armazenar indicador de login
                localStorage.setItem('isLoggedIn', true);
            } else {
                Swal.fire({
                    title: "Senha incorreta",
                    icon: "error"
                });
            }
        } else {
            Swal.fire({
                title: "Email não cadastrado",
                icon: "warning"
            });
        }
    }
});

//Função para alterar a visibilidade do input de senha
const btnVisibilityOFF = document.getElementById("visibility_off");
btnVisibilityOFF.addEventListener("click", function() {
    if (btnVisibilityOFF.src.endsWith("visibility_on.svg")) {
        btnVisibilityOFF.src = "assets/icons/visibility_off.svg";
        document.getElementById("user_password").type = "password";
    } else {
        btnVisibilityOFF.src = "assets/icons/visibility_on.svg";
        document.getElementById("user_password").type = "text";
    }
});

// Verificar se o usuário está logado e redirecioná-lo para a página inicial
document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn) {
        window.location.href = "pages/home.html"; // Altere "home.html" para o caminho correto da sua página inicial
    }
});
