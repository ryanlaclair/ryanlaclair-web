$(document).ready(() => {
    var password = document.login.password;

    $("#login").submit(() => {
        event.preventDefault();

        if (validateLogin(password)) {
            var jqxhr = $.post("php/login.php", { password: password.value })
                .done(handleValidLogin)
                .fail(handleFailedLogin);
        }
        
    });

    $("#reset").click(() => {
        $("#password-valid").removeClass();
    });
})

function validateLogin(password) {
    var valid = password.value.length > 0;
    
    if (valid) {
        $("#password-valid").removeClass().addClass("fa fa-check fa-green");
    }
    else {
        $("#password-valid").removeClass().addClass("fa fa-times fa-red");
    }

    return valid;
}

function handleValidLogin(data) {
    console.log(data);
}

function handleFailedLogin() {
    $("#password-valid").removeClass().addClass("fa fa-times fa-red");
}

function createMessageList(messages) {
    console.log(messages);
}