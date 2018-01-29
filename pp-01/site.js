$('#contact-form').on('submit',
  function(e) {
    console.log('The form was submitted.');
    var email = $('#email').val();
    var emailcheck_regex = /.+@.+\..+/g;
    regex_results = emailcheck_regex.exec(email);
    console.log(regex_results);
    e.preventDefault();
    if ($("#form_check_results").length == 0) {
      $("<h1 id='form_check_results' class=''>TEST</h1>").insertAfter($(this));
    }
    if(!regex_results || regex_results.length > 1) {
      $("#form_check_results").attr('class', 'error_message');
      /* Change content of form-check-results to an error message */
    } else {
      $("#form_check_results").attr('class', 'thanks_message');
      /* Change content of form-check-results to a thanks message */
      $(this).remove();
    }
  }
);
