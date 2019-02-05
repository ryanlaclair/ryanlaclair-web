$(document).ready(() => {
  var firstName = document.contact.firstName;
  var lastName = document.contact.lastName;
  var email = document.contact.email;
  var message = document.contact.message;

  $('#firstName').blur(() => {
    validateFirstName(firstName);
  });

  $('#lastName').blur(() => {
    validateLastName(lastName);
  });

  $('#email').blur(() => {
    validateEmail(email);
  });

  $('#message').blur(() => {
    validateMessage(message);
  });

  $('#contact').submit(event => {
    event.preventDefault();

    if (validateContact()) {
      grecaptcha.ready(function () {
        grecaptcha.execute('6LdWlHcUAAAAAPHyMCao2IBpkpWh2kYLVqH6xIp2', { action: 'contact' })
          .then((token) => {
            var jqxhr = $.ajax({
              url: 'https://76h64qfzt9.execute-api.us-east-1.amazonaws.com/dev',
              method: 'post',
              contentType: 'application/json',
              crossDomain: true,
              data: JSON.stringify({
                firstName: document.contact.firstName.value,
                lastName: document.contact.lastName.value,
                email: document.contact.email.value,
                message: document.contact.message.value,
                token: token
              })
            })
              .done(handleValidContact)
              .fail(handleFailedContact);
          });
      });
    }
  });

  $('#reset').click(() => {
    $('#first-name-error').remove();
    $('#first-name-icon').removeClass();

    $('#last-name-error').remove();
    $('#last-name-icon').removeClass();

    $('#email-error').remove();
    $('#email-icon').removeClass();

    $('#message-error').remove();
    $('#message-icon').removeClass();
  });
});

// validate all of the form data
function validateContact() {
  var firstName = document.contact.firstName;
  var lastName = document.contact.lastName;
  var email = document.contact.email;
  var message = document.contact.message;

  return (
    validateFirstName(firstName) &&
    validateLastName(lastName) &&
    validateEmail(email) &&
    validateMessage(message)
  );
}

// validate a first name
function validateFirstName(firstName) {
  var valid = validateName(firstName);

  if (valid) {
    $('#first-name-error').remove();
    $('#first-name-icon')
      .removeClass()
      .addClass('fa fa-check fa-green validation-icon');
  } else if (!$('#first-name-error').length) {
    $('#first-name-icon')
      .removeClass()
      .addClass('fa fa-times validation-icon');

    var firstNameError = $('<span></span>')
      .attr('id', 'first-name-error')
      .text('First name must be 2 or more alpha characters');

    $('#first-name-valid')
      .addClass('fa-red')
      .prepend(firstNameError);
  }

  return valid;
}

// validate a last name
function validateLastName(lastName) {
  var valid = validateName(lastName);

  if (valid) {
    $('#last-name-error').remove();
    $('#last-name-icon')
      .removeClass()
      .addClass('fa fa-check fa-green validation-icon');
  } else if (!$('#last-name-error').length) {
    $('#last-name-icon')
      .removeClass()
      .addClass('fa fa-times fa-red validation-icon');

    var lastNameError = $('<span></span>')
      .attr('id', 'last-name-error')
      .text('Last name must be 2 or more alpha characters');

    $('#last-name-valid')
      .addClass('fa-red')
      .prepend(lastNameError);
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
  for (i = 0; i < nameVal.length; i++) {
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
  var valid = email.value.includes('@') && email.value.includes('.');

  if (valid) {
    $('#email-error').remove();
    $('#email-icon')
      .removeClass()
      .addClass('fa fa-check fa-green validation-icon');
  } else if (!$('#email-error').length) {
    $('#email-icon')
      .removeClass()
      .addClass('fa fa-times fa-red validation-icon');

    var emailError = $('<span></span>')
      .attr('id', 'email-error')
      .text('Email must contain a domain');

    $('#email-valid')
      .addClass('fa-red')
      .prepend(emailError);
  }

  return valid;
}

// validate to ensure the user entered a message
function validateMessage(message) {
  var valid = message.value.length > 0;

  if (valid) {
    $('#message-error').remove();
    $('#message-icon')
      .removeClass()
      .addClass('fa fa-check fa-green validation-icon');
  } else if (!$('#message-error').length) {
    $('#message-icon')
      .removeClass()
      .addClass('fa fa-times fa-red validation-icon');

    var messageError = $('<span></span>')
      .attr('id', 'message-error')
      .text('Please enter a message');

    $('#message-valid')
      .addClass('fa-red')
      .prepend(messageError);
  }

  return valid;
}

function handleValidContact() {
  $('form').hide();

  var successMsg = $('<h4></h4>').text('Thanks for the message!');

  $('main').prepend(successMsg);
}

function handleFailedContact(blah, bleh, error) {
  $('form').hide();

  console.log(error);
  var failureMsg = $('<h4></h4>').text('Contact failure, please try again');

  $('main').prepend(failureMsg);
}