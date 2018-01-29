$('#contact-form').on('submit',
  function(e) {
    console.log('The form was submitted.');
    var email = $('#email').val();
    var emailcheck_regex = /.+@.+\..+/g;
    regex_results = emailcheck_regex.exec(email);
    console.log(regex_results);
    if(!regex_results || regex_results.length > 1) {
      e.preventDefault();
      /* Yell at user */
    } else {
      /* Remove form */
      /* Thank the user */
    }
  }
);
