document.querySelector('.form-recover-account').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    let email = document.getElementById('email').value; // Obtiene el valor del campo de correo electrónico

    alert('Revise su correo para confirmar la validación. El correo electrónico ingresado es: ' + email); 

    this.reset(); // Restablece el formulario
});
