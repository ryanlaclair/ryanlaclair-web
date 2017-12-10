$(document).ready(() => {
    var firstName = document.contact.firstName;
    var lastName = document.contact.lastName;
    var email = document.contact.email;
    var message = document.contact.message;

    $("#firstName").blur(() => {
        validateFirstName(firstName);
    });

    $("#lastName").blur(() => {
        validateLastName(lastName);
    });

    $("#email").blur(() => {
        validateEmail(email);
    });

    $("#message").blur(() => {
        validateMessage(message);
    });

    $("#reset").click(() => {
        $("#first-name-valid").removeClass();
        $("#last-name-valid").removeClass();
        $("#email-valid").removeClass();
        $("#message-valid").removeClass();
    });
});

// validate all of the form data
function validateContact() {
    var firstName = document.contact.firstName;
    var lastName = document.contact.lastName;
    var email = document.contact.email;
    var message = document.contact.message;

    return validateFirstName(firstName) &&
           validateLastName(lastName) &&
           validateEmail(email) &&
           validateMessage(message);
}

// validate a first name
function validateFirstName(firstName) {
    var valid = validateName(firstName);

    if (valid) {
        $("#first-name-valid").removeClass().addClass("fa fa-check fa-green");
    }
    else {
        $("#first-name-valid").removeClass().addClass("fa fa-times fa-red");
    }

    return valid;
}

// validate a last name
function validateLastName(lastName) {
    var valid = validateName(lastName);

    if (valid) {
        $("#last-name-valid").removeClass().addClass("fa fa-check fa-green");
    }
    else {
        $("#last-name-valid").removeClass().addClass("fa fa-times fa-red");
    }

    return valid;
}

// validate a name to ensure it is at least 2 characters long and
// only contains alpha characters
function validateName(name) {
    var nameVal = name.value;

    if (nameVal.length < 2) {
        return false;
    }

    var i, code;

    // step through thr characters
    for (i=0; i<nameVal.length; i++) {
        // get the character code
        code = nameVal.charCodeAt(i);

        // if not a lower or upper case character return false
        if (!(code > 64 && code < 91) && !(code > 96 && code < 123)) {
            return false;
        }
    }

    return true;
}

// validate an email to ensure it contains both an "@" and a "."
function validateEmail(email) {
    var valid = (email.value.includes("@") && email.value.includes("."));

    if (valid) {
        $("#email-valid").removeClass().addClass("fa fa-check fa-green");
    }
    else {
        $("#email-valid").removeClass().addClass("fa fa-times fa-red");
    }

    return valid;
}

// validate to ensure the user entered a message
function validateMessage(message) {
    var valid = message.value.length > 0;

    if (valid) {
        $("#message-valid").removeClass().addClass("fa fa-check fa-green");
    }
    else {
        $("#message-valid").removeClass().addClass("fa fa-times fa-red");
    }

    return valid;
}