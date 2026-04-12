let nameInput = document.getElementById("nameInput");
  let emailInput = document.getElementById("emailInput");
  let passwordInput = document.getElementById("passwordInput");

  let nameMsg = document.getElementById("nameMsg");
  let emailMsg = document.getElementById("emailMsg");
  let passMsg = document.getElementById("passMsg");


  nameInput.onblur = function() {
    let name = nameInput.value;

    if (name.length > 5 && /^[A-Za-z]+$/.test(name)) {
      nameMsg.innerHTML = "Valid Name";
    } else {
      nameMsg.innerHTML = "Invalid Name";
    }
  };

  
  emailInput.onblur = function() {
    let email = emailInput.value;

    if (email.includes("@") && email.includes(".")) {
      emailMsg.innerHTML = "Valid Email";
    } else {
      emailMsg.innerHTML = "Invalid Email";
    }
  };

  
  passwordInput.onblur = function() {
    let pass = passwordInput.value;

    if (
      pass.length == 8 &&
      /[A-Z]/.test(pass) &&
      /[a-z]/.test(pass) &&
      /[0-9]/.test(pass) &&
      /[!@#$%^&*]/.test(pass)
    ) {
      passMsg.innerHTML = "Valid Password";
    } else {
      passMsg.innerHTML = "Invalid Password";
    }
  };

  
  let form = nameInput.form;

  form.onsubmit = function(event) {
    event.preventDefault();

    let user = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value
    };

    console.log(user); 

    alert("User Registered Successfully");
  };