//Resgatando array de usuarios no localstorage
let usuariosJSON = localStorage.getItem("usuarios");
let usuario = JSON.parse(usuariosJSON)
console.log(usuario)

// Autenticando Usuario
const btnLogin = document.getElementById("btn_login")



btnLogin.addEventListener("click", function(event){
    event.preventDefault()
let email = document.getElementById("user_email").value
let password = document.getElementById("user_password").value

if(email ===  "" || password === ""){
    Swal.fire({
        title: "Preencha todos os campos",
        icon: "warning"
      });
}else{
    // Verificar se existe um usuário com o email fornecido
    let usuarioEncontrado = usuario.find(function(user) {
    return user.emailUser === email;
});

    if (usuarioEncontrado) {
        // Se o usuário for encontrado, verificar se a senha está correta
        if (usuarioEncontrado.passwordUser === password) {
            Swal.fire({
                title: "Autenticação bem sucedida",
                icon: "success"
              });

              setTimeout(() => {
                window.location.replace("../pages/home.html")
              }, 1000);
    
           
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


console.log(usuario.passwordUser)
//Função para alterar a visibilidade do input de senha
const btnVisibilityOFF = document.getElementById("visibility_off")
btnVisibilityOFF.addEventListener("click", function(){
    if(btnVisibilityOFF.src.endsWith("visibility_on.svg")){
        btnVisibilityOFF.src = "assets/icons/visibility_off.svg"
        document.getElementById("user_password").type = "password"
    } else {
        btnVisibilityOFF.src = "assets/icons/visibility_on.svg"
        document.getElementById("user_password").type = "text"
    }})