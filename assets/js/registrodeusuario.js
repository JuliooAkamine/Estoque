const formCadastro = document.getElementById("register.form")
const cadastrar = document.getElementById("btn_register")

const btnVisibilityOFF = document.getElementById("visibility_off")
const btnVisibilityOFF2 = document.getElementById("visibility_off2")

//Função para alterar a visibilidade do input de senha
btnVisibilityOFF.addEventListener("click", function(){
    if(btnVisibilityOFF.src.endsWith("visibility_on.svg")){
        btnVisibilityOFF.src = "../assets/icons/visibility_off.svg"
        document.getElementById("user_password_register").type = "password"
    } else {
        btnVisibilityOFF.src = "../assets/icons/visibility_on.svg"
        document.getElementById("user_password_register").type = "text"
    }})


//Função para alterar a visibilidade do input de confirmar senha 
btnVisibilityOFF2.addEventListener("click",function(){
    if(btnVisibilityOFF2.src.endsWith("visibility_on.svg")){
        btnVisibilityOFF2.src = "../assets/icons/visibility_off.svg"
        document.getElementById("user_password_confirmed").type = "password"
    } else {
        btnVisibilityOFF2.src = "../assets/icons/visibility_on.svg"
        document.getElementById("user_password_confirmed").type = "text"
    }
})

cadastrar.addEventListener("click", function(event){
    const email = document.getElementById("user_email_register").value
    const password = document.getElementById("user_password_register").value
    const passwordConfirmed = document.getElementById("user_password_confirmed").value

    if(email === "" || password === "" || passwordConfirmed === ""){
        Swal.fire({
            title: "Preencha todos os campos",
            icon: "warning"
          });
    }else{
        if(password === passwordConfirmed){
            var usuarios = localStorage.getItem('usuarios') ? JSON.parse(localStorage.getItem('usuarios')) : [];
    
            let usuario = {
                emailUser: email,
                passwordUser: password
            }
        
            usuarios.push(usuario)
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
            Swal.fire({
                title: "Usuario cadastrado com sucesso",
                icon: "success"
              });
    
            console.log(usuario)
        }else{
            Swal.fire({
                title: "Senha incorreta",
                icon: "error"
              });
        }
    }

    event.preventDefault()

    

    
})

