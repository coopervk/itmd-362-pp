$('#contact-form').on('submit',
  function(e) {
    console.log('The form was submitted.');
    var email = $('#email').val();
    console.log('Your email: ' + email);
    e.preventDefault();
  }
);
