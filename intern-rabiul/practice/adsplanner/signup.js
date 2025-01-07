
  document.getElementById('sign_up_form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let username = document.getElementById('sign_up_user_name').value;
    let email = document.getElementById('sign_up_mail').value;
    let signUpPass=document.getElementById('sign_up_password').value;
    let signUpRepeatPass=document.getElementById('sign_up_repeat_password').value;
   
    if (username === "" || email === "" || signUpPass=== "" || signUpRepeatPass=== "" ) {
      alert('All fields are required.');
      return;
    }
    else if(signUpPass!==signUpRepeatPass){
      alert('Password Missmatch');
      return;
    }
    
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
   
    localStorage.setItem('sign_up_user_name', username);
    localStorage.setItem('sign_up_mail', email);
    localStorage.setItem('sign_up_password', signUpPass);
    
    window.location.replace("index.html");
    alert('Form submitted and data saved to local storage!');

   
  });

  function myFunction() {
    const x = document.getElementById("sign_up_password"); 
    const btn=document.getElementById("passbtn1"); 
    if (x.type === "password") {
      x.type = "text";
      btn.innerText='hide'
    } else {
      x.type = "password";
      btn.innerText='see'
    }
  }
  function myFunction1() {
    let y = document.getElementById("sign_up_repeat_password");
    const btn1=document.getElementById("passbtn2"); 
    if (y.type === "password") {
      y.type = "text";
      btn1.innerText='hide';
    } else {
      y.type = "password";
      btn1.innerText='see';
    }
  }

  // function log() {
  
  //   let storedEmail = localStorage.getItem('sign_up_mail');
  //   let storedPass = localStorage.getItem('sign_up_password');
    
    
  //   if (storedEmail && storedPass) {
  //     window.location.replace("login.html");
  //   }
  //   else{
  //     alert("You don't have a account please Sign up first")
  //   }
    
  // };

  // document.addEventListener('DOMContentLoaded', function() {
    // let storedUsername = localStorage.getItem('sign_up_user_name');
    // let storedEmail = localStorage.getItem('sign_up_mail');
    // let storedPass = localStorage.getItem('sign_up_password');
  //   let storedRepeatPass = localStorage.getItem('sign_up_repeat_password');
    
  //   if (storedUsername && storedEmail && storedPass && storedRepeatPass ) {
  //     alert('Stored Data:\nUsername: ' + storedUsername + '\nEmail: ' + storedEmail + '\nPass: ' + storedPass  + '\nRepaeatPass: ' + storedRepeatPass);
  //   }
  // });
  document.addEventListener('DOMContentLoaded', function(event) {
    event.preventDefault();
    let storedUsername = localStorage.getItem('sign_up_user_name');
    let storedEmail = localStorage.getItem('sign_up_mail');
    let storedPass = localStorage.getItem('sign_up_password');
    
    
    if (storedUsername && storedEmail && storedPass) {
      window.location.replace("index.html");
    }
    
  });

  function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

