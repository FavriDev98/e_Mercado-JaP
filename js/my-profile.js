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