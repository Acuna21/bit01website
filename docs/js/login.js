'use strict';

let listUser = [
    {
    name: "Sara",
    user:"sara@gmail.com",
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
    let  password = document.getElementById("password-login").value;

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
            loginMessage.textContent = "Inicio de sesión correcto. Bienvenido.";

            // Mostrar alerta de inicio de sesión
            showAlert(loginMessage.textContent);

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

// Función para mostrar una alerta
function showAlert(message) {
  alert(message);
}
