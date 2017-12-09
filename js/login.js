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
    $("main").empty();

    $("h2").text("Your messages!");
    $("h3").text("Don't forget to respond.");
    
    createMessageList(JSON.parse(data));
}

function handleFailedLogin() {
    $("#password-valid").removeClass().addClass("fa fa-times fa-red");
}

function createMessageList(messages) {
    for (var i=0; i<messages.length; i++) {
        addMessage(messages[i]);
    }
}

function addMessage(message) {
    var newMessage = $("<ul></ul>").addClass("message");
    
    var name = $("<li></li>").addClass("message-name");

    var nameHeading = $("<h4></h4>")
            .text(message.first_name + " " + message.last_name);

    var info = $("<li></li>").addClass("message-info");

    var email = $("<span></span>").addClass("message-email")
            .text(message.email);

    var timestamp = $("<span></span>").addClass("message-timestamp")
            .text(message.timestamp);

    var messageText = $("<li></li>").addClass("message-text")
            .text(message.message);
    
    $("main").append(newMessage);
    newMessage.append(name, info, messageText);
    name.append(nameHeading);
    info.append(email, timestamp);
}