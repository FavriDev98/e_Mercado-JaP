let name = document.getElementById('name').value;
let sname = document.getElementById('sname').value;
let email = document.getElementById('email').value;
let pass1 = document.getElementById('password1').value;
let pass2 = document.getElementById('password2').value;
let passVer = pass1 === pass2;

function validation() {
    if (name != '' && sname != '' && email != '' && passVer) {
        return true;
    } else {
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function(){ 

    const registrarme = document.getElementById("regBtn");

    registrarme.addEventListener("click", function(){
        if (validation()){
            showAlertSuccess();
        } else {
            showAlertError();
        }
    });
})