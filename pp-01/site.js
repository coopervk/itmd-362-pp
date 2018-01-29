$('#contact-form').on('submit',
  function(e) {
    console.log('The form was submitted.');
    var email = $('#email').val();
    var emailcheck_regex = /.+@.+\..+/g;
    regex_results = emailcheck_regex.exec(email);
    console.log(regex_results);
    e.preventDefault();
    if ($("#form-check-results").length == 0) {
      $("<h1 id='form-check-results'>TEST</h1>").insertAfter($(this));
    }
    if(!regex_results || regex_results.length > 1) {
      /* Change content of form-check-results to an error message */
    } else {
      /* Change content of form-check-results to an error message */
      $(this).remove();
    }
  }
);
