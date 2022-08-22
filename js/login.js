// step:1 add click ebentHandler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // always rememmber use .value to get the text from inpur field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if (email == 'apurba4224@gmail.com' && password == 'apurba') {
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid')
    }

}
)