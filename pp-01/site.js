$('#contact-form').on('submit',
  function(e) {
    console.log('The form was submitted.');
    var email = $('#email').val();
    var emailcheck_regex = /.+@.+\..+/g;
    regex_results = emailcheck_regex.exec(email);
    console.log(regex_results);
    e.preventDefault();
    if(!regex_results || regex_results.length > 1) {
      /* Yell at user */
    } else {
      $("<h1>Thank you for signing up!</h1>").insertAfter($(this));
      $(this).remove();
    }
  }
);
