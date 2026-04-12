  
  let signup = document.getElementById("signup");

  signup.onclick = function() {
    window.location.href = "signup.html";
  };


  let users = [
    { email: "user1@gmail.com", password: "1234" },
    { email: "user2@gmail.com", password: "1234" },
    { email: "user3@gmail.com", password: "1234" },
    { email: "user4@gmail.com", password: "1234" },
    { email: "user5@gmail.com", password: "1234" }
  ];


  let form = document.getElementById("email").form;

  form.onsubmit = function(event) {
    event.preventDefault(); // stop refresh

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let success = false;

   
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        success = true;
      }
    }

  
    if (success) {
      alert("Login Successful");
    } else {
      alert("Login Unsuccessful");
    }
  };