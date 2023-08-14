/* boton */

document.addEventListener('DOMContentLoaded', function() {
    let boton = document.getElementById('lginbttn');

    boton.addEventListener("click", function(){
        
    let user = document.getElementById('usuario').value;
        let password = document.getElementById('password').value;
        localStorage.removeItem('usuario');
        localStorage.removeItem('password');

        if (document.getElementById('check-recordar').checked) {
            localStorage.setItem('usuario', user);
            localStorage.setItem('password', password);
        }
    });
});

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

