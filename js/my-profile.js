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
    let userShow = document.getElementById('user-name');
    let userData = localStorage.getItem('usuario');
    let userSession = sessionStorage.getItem('usuario');
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

fileUpload.addEventListener("change", handleFiles, false);

function handleFiles() {
    for (let i = 0; i < this.files.length; i++) {
        profilePicture.src = URL.createObjectURL(this.files[i]);
        profilePicture.width = 60;
        profilePicture.onload = () => {
            URL.revokeObjectURL(profilePicture.src);
        };
    };
};



// Validacion de Formulario

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
});

