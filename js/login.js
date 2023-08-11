let user = document.getElementById('user').value;
let email = document.getElementById('email').value;

function validation() {
    if (name != '' && email != '') {
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