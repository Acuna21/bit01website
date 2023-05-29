'use strict';


console.log("creare");
let listUserCreate = [
  {
    name: "Sara",
    user: "sara@gmail.com",
    password: "sara123",
    phone: "3007302949",
  },
  {
    name: "Acuna",
    user: "acunabenavides@hotmail.com",
    password: "acuna123",
    phone: "3007302000",
  },
  {
    name: "Prueba",
    user: "123@gmail.com",
    password: "123",
    phone: "3007302001",
  }
];

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
  let existingUser = listUserCreate.find((user) => user.user === email);
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
    user: email,
    password: password,
    phone: phone
  };

  // Agregar el nuevo usuario a la lista listUser
  listUserCreate.push(newUser);

  // Mostrar los detalles del usuario creado con éxito
  alert(`¡Usuario creado con éxito!
        Nombre: ${newUser.name}
        Correo electrónico: ${newUser.user}
        Teléfono: ${newUser.phone}`
  );

  closeModal();
  console.log(listUserCreate);

  // Redirigir a otra página después de 2 segundos
  setTimeout(() => {
    window.location.href = "mainStudy.html";
  }, 2000);

  // Restablecer los valores del formulario
  document.getElementById("formCreateUser").reset();
});

function closeModal() {
  let modal = document.getElementById("myModal");
  let form = document.getElementById("formCreateUser");
  modal.style.display = "none";
  form.reset();
}
