function checkForm() {
    var formEmail = document.myForm.email;
    const emailValidation = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)?$/
    if (formEmail.value.length === 0 || !formEmail.value.match(emailValidation)) {
      alert("please enter a valid email");
      formEmail.focus();
      return;
    }
    document.myForm.submit();

  }