$(document).ready(function() {
  $(".form-submit").click(function(e) {
    // e.preventDefault();
    let name = $(".name").val();
    let email = $(".email").val();
    let subject = $(".subject").val();
    let message = $(".message").val();

    function emailIsValid(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    if (emailIsValid(email)) {
    }
    if (subject.length > 2) {
    }
    if (message.length > 2) {
    }
    if (name.length > 0) {
    } else {
        e.preventDefault();
      alert(
        "Invalid email credentials. Please make sure to include a valid email, a subject line greater than two characters and a message."
      );
    }
  });
});
