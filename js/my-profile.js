document.addEventListener("DOMContentLoaded", function () {
    if ((sessionStorage.getItem('usuario') != null || (sessionStorage.getItem('password') != null))) {
        return;
    } else {
        if ((localStorage.getItem('usuario') != null || (localStorage.getItem('password') != null))) {
            return;
        }
    }
    window.location.href = './login.html';
});

document.addEventListener("DOMContentLoaded", function () {


document.addEventListener("DOMContentLoaded", function(){
    let userShow = document.getElementById('user-name');
    let userData = localStorage.getItem('usuario');
    let userSession = sessionStorage.getItem('usuario');
    inputMail.value = localStorage.getItem('usuario') || sessionStorage.getItem('usuario');

    if (userData != null) {
        userShow.innerHTML = `
            <p>${userData}<p>
    `
    } else {
        userShow.innerHTML = `
            <p>${userSession}<p>
    `
    }

});

let profilePicture = document.getElementById('profilePicture');
let fileUpload = document.getElementById('fileUpload');

// Cargar la imagen almacenada localmente al cargar la página
window.addEventListener('load', () => {
    loadProfilePicture();
});

fileUpload.addEventListener("change", handleFiles, false);

function handleFiles() {
    for (let i = 0; i < this.files.length; i++) {
        const reader = new FileReader();

        reader.onload = function (event) {
            // Establecer la imagen en el elemento img
            profilePicture.src = event.target.result;

            // Guardar los datos de la imagen en el localStorage
            localStorage.setItem('profilePic', event.target.result);

            // Configurar otras propiedades si es necesario (por ejemplo, width)
            profilePicture.width = 60;
        };

        // Leer el contenido del archivo como una URL de datos
        reader.readAsDataURL(this.files[i]);
    }
}

/// Validacion de Formulario

const inputs = document.getElementsByClassName('form-camp');
const name = document.getElementById('inputName');
const secondName = document.getElementById('inputSecondName');
const surname = document.getElementById('inputSurname');
const secondSurname = document.getElementById('inputSecondSurname');
const email = document.getElementById('inputMail');
const number = document.getElementById('inputNumber');
const btn = document.getElementById('btn');
const alert = document.getElementById('alert-warning');


//validacion de inputs

function validarInputs() {
    if (!(name.checkValidity()) || !(secondName.checkValidity()) || !(surname.checkValidity()) || !(secondSurname.checkValidity()) || !(email.checkValidity()) || !(number.checkValidity())) {
        return false;
    } else {
        return true;
    }
}function loadProfilePicture() {
    // Obtener la URL de la imagen almacenada localmente
    let profilePicStr = localStorage.getItem('profilePic');

    // Si hay una imagen almacenada localmente, cargarla en el elemento img
    if (profilePicStr != null && profilePicStr != undefined) {
        profilePicture.src = profilePicStr;
    }
}

// Validacion de formulario y envio

btn.addEventListener('click', function (e) {
    e.preventDefault();
    if (validarInputs()) { //Formulario valido
        alert.classList.add('show', 'alert-success');
        alert.classList.remove('alert-warning');
        alert.innerHTML = `<strong>Listo!</strong> Tus cambios fueron guardados.`;
        setTimeout(() => {
            alert.classList.remove('show');
        }
            , 2000);
        console.log('Formulario Valido');
        let userData = { // Datos del usuario
            name: name.value,
            secondName: secondName.value,
            surname: surname.value,
            secondSurname: secondSurname.value,
            email: email.value,
            number: number.value
        };
        localStorage.setItem('userData', JSON.stringify(userData)); //Datos al localStorage    console.log(userData);
    }
    else { //Formulario invalido
        alert.classList.add('show');
        alert.classList.remove('alert-success');
        alert.classList.add('alert-warning');
        alert.innerHTML = `<strong>Atencion!</strong> Verifica que todos los campos esten completos.`;
        setTimeout(() => {
            alert.classList.remove('show');
        }
            , 2000);
        console.log('Formulario Invalido');
    }
});});