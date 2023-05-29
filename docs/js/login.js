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
document.getElementById("formCreateUser").addEventListener("submit", (event) => {
    event.preventDefault();
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("passwordCreated").value;
    let confirmedPassword = document.getElementById("confirmed-password").value;
  
    let createUserMessage = document.getElementById("createUserMessage");
    let createUserMessageError = document.getElementById("createUserMessageError");
  
    // Verificar si el usuario ya existe en listUser
    let existingUser = listUser.find((user) => user.email === email);
    if (existingUser) {
      createUserMessageError.textContent = "El usuario que ingresaste ya existe. Por favor, verifica los datos.";
      return;
    }
  
    // Verificar si los campos requeridos están completos
    if (!name || !email || !password || !confirmedPassword) {
      alert("Por favor, completa todos los campos del formulario.");
      return;
    }
  
    // Verificar si las contraseñas coinciden
    if (password !== confirmedPassword) {
      alert("Las contraseñas no coinciden. Por favor, verifica.");
      return;
    }

    // Verificar si se ingresó el número de teléfono
    if (!phone) {
        alert("Por favor, ingresa tu número de teléfono.");
        return;
    }
  
    // Crear un nuevo objeto de usuario
    let newUser = {
      name: name,
      email: email,
      phone: phone,
      password: password
    };
  
    // Agregar el nuevo usuario a la lista listUser
    listUser.push(newUser);
  
    // Mostrar los detalles del usuario creado con éxito
    alert(`¡Usuario creado con éxito!
        Nombre: ${newUser.name}
        Correo electrónico: ${newUser.email}
        Teléfono: ${newUser.phone}`
    );

    closeModal();
    console.log(listUser);

    // Redirigir a otra página después de 2 segundos
    setTimeout(() => {
        window.location.href = "mainStudy.html";
    }, 500);


    // Restablecer los valores del formulario
    document.getElementById("formCreateUser").reset();
  });
  
  
  function closeModal() {
    let modal = document.getElementById("myModal");
    let form = document.getElementById("formCreateUser");
    modal.style.display = "none";
    form.reset();
  }
