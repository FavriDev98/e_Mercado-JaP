document.addEventListener("DOMContentLoaded", function(){
    if ((sessionStorage.getItem('usuario') != null || (sessionStorage.getItem('password') != null))) {
        return;
    } else { if ((localStorage.getItem('usuario') != null || (localStorage.getItem('password') != null))){
        return;
        }
    }
    window.location.href = './login.html';
});



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

function loadProfilePicture() {
    // Obtener la URL de la imagen almacenada localmente
    let profilePicStr = localStorage.getItem('profilePic');

    // Si hay una imagen almacenada localmente, cargarla en el elemento img
    if (profilePicStr != null && profilePicStr != undefined) {
        profilePicture.src = profilePicStr;
    }
}