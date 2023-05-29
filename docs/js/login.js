'use strict';

let listUser = [
    {
    name: "Sara",
    user:"saraacuna@gmail.com",
    password: "sara123",
    phone: "3007302949",
    },

    {
    name: "Acuna",
    user:"acunabenavides@hotmail.com",
    password: "acuna123",
    phone: "3007302000",
    },

    {
        name: "Prueba",
        user:"123@gmail.com",
        password: "123",
        phone: "3007302001",
        }
]
    

// Validando los datos del formulario de login
document.getElementById("formLogin").addEventListener("submit", (event)=> {
    event.preventDefault();
    let email = document.getElementById("user").value;
    let  password = document.getElementById("password").value;

    let alertUser = document.getElementById("alertUser");
    let alertPassword = document.getElementById("alertPassword");
    let loginMessage = document.getElementById(" loginMessage");

    // Verificar si los campos estan vacios
    alertUser.textContent = email ? null : "El correo es necesario para ingresar";
    alertPassword.textContent = password ? null : "La contraseña es necesaria";
    
    // Verificar si el usuario existe y si la contraseña es correcta
    let user = listUser.find((user) => user.user === email);

    if (user) {
        if (user.password === password) {
            // Usuario y contraseña correctos
            alertUser.textContent = null;
            alertPassword.textContent = null;
            loginMessage.textContent = "Inicio de sesión correcto";

            // Redirigir a la página donde hay cursos
            window.location.href = "mainStudy.html";
        } else {
            // Contraseña incorrecta
            alertUser.textContent = null;
            alertPassword.textContent = "Contraseña incorrecta. Vuelve a intentarlo o selecciona ¿Olvidaste tu contraseña?";
        }
    } else {
        // Usuario incorrecto
        alertUser.textContent = "Los datos que ingreso son incorrectos. Por favor, verifique su cuenta o cree una nueva";
        alertPassword.textContent = null;

    }
});

// Crear un nuevo usuario y guardarlo en listUser
console.log(document.getElementById("formCreateUser"));
document.getElementById("formCreateUser").addEventListener("submit", (event) => {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password= document.getElementById("passwordCreated").value;
    let confirmedPassword = document.getElementById("confirmed-password").value;

    let createUserMessage = document.getElementById("createUserMessage");
    let createUserMessageError = document.getElementById("createUserMessageError");

     // Verificar si el usuario ya existe en listUser
     let existingUser = listUser.find((user) => user.user === email);
     if (existingUser) {
        createUserMessageError.textContent = "El usuario que ingresaste ya existe. Por ende, verifica los datos";
         return;
     }
  

    // Verificar si los campos requeridos están completos y si las contraseñas coinciden
    if (name && email && password && confirmedPassword && password === confirmedPassword) {
        // Crear un nuevo objeto de usuario
        let newUser = {
            name: name,
            email: email,
            phone: phone,
            password: password
        };

        // Agregar el nuevo usuario a la lista listUser
        listUser.push(newUser);

    
        // Mostrar un mensaje o redirigir a una página de éxito de registro
        createUserMessage.textContent="¡Usuario creado con éxito!";
        console.log(listUser);
        // Restablecer los valores del formulario
        document.getElementById("formCreateUser").reset();
    } else {
        alert("Por favor, completa todos los campos y asegúrate de que las contraseñas coincidan.");
        console.log("Error: campos incompletos o contraseñas no coinciden");
    }
});


function closeModal(){
    document.getElementById("formLogin").reset;
}
