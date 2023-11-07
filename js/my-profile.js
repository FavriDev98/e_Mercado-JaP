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
    if (userData != null) {
        userShow.innerHTML = `
            <p>${userData}<p>
    `
    } else {
        userShow.innerHTML = `
            <p>${userSession}<p>
    `    
    }

    try {
        profilePicture.onload = () => {
            URL.canParse(profilePicStr.src);
        }
    } catch (error) {
        console.error(error);
    };
});

let profilePicStr = localStorage.getItem('profilePic');
let profilePicture = document.getElementById('profilePicture');
let fileUpload = document.getElementById('fileUpload');
  
fileUpload.addEventListener("change", handleFiles, false);

function handleFiles() {
    for (let i = 0; i < this.files.length; i++) {
        profilePicture.src = URL.createObjectURL(this.files[i]);
        localStorage.setItem('profilePic', profilePicture.src);
        profilePicture.width = 60;
        profilePicture.onload = () => {
            URL.revokeObjectURL(profilePicture.src);
        };
    };
};


let inputName = document.getElementById('inputName');
let secondName = document.getElementById('inputSecondName');
let inputFirst = document.getElementById('inputFirst');
let inputSecond = document.getElementById('inputSecond');
let inputMail = document.getElementById('inputMail');
let inputNumber = document.getElementById('inputNumber');

inputMail.value = localStorage.getItem('usuario')

