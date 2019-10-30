$(document).ready(function () {
    $('.form-submit').click(function (e) {
        e.preventDefault();
        let name = $('.name').val()
        let email = $('.email').val()
        let subject = $('.subject').val()
        let message = $('.message').val()

        function emailIsValid(email) {
          return /\S+@\S+\.\S+/.test(email);
        }

        if(emailIsValid(email)) {

        } else {
            alert("Invalid email credentials.")
        }

    })
})