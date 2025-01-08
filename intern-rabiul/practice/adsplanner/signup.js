const getElement = (id) => {
  return document.getElementById(id);
};
const makeModal = (text, action = () => {}) => {
  getElement("myModal").style.display = "block";
  document.getElementById("alertText").innerText = text;
  // window.location.href = 'login.html'
  document
    .getElementById("modalBtn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("myModal").style.display = "none";
      action();
      return;
    });
};
document
  .getElementById("sign_up_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("sign_up_user_name").value;
    let email = document.getElementById("sign_up_mail").value;
    let signUpPass = document.getElementById("sign_up_password").value;
    let signUpRepeatPass = document.getElementById(
      "sign_up_repeat_password"
    ).value;

    // if (username === "" || email === "" || signUpPass === "" || signUpRepeatPass === "") {
    //   alert('All fields are required.');
    //   return;
    // }
    if (signUpPass !== signUpRepeatPass) {
      makeModal("Password Mismatch");
      //   ()=>{
      //     window.location.href = 'index.html'
      //  }
      // getElement("myModal").style.display = "block";

      // document.getElementById("alertText").innerText=
      // // window.location.href = 'login.html'
      // document.getElementById("modalBtn").addEventListener("click", function (event) {
      //   event.preventDefault();
      //   document.getElementById("myModal").style.display = "none";
      //   // unnecessary line.
      //   document.getElementById("main_content").style.display = "block";

      //   return;
      // });
      return;
      // alert('Password Missmatch');
      // return;
    }

    if (!validateEmail(email)) {
      makeModal("Please enter a valid email address");

      // document.getElementById("myModal").style.display = "block";

      // document.getElementById("alertText").innerText="Please enter a valid email address"
      // // window.location.href = 'login.html'
      // document.getElementById("modalBtn").addEventListener("click", function (event) {
      //   event.preventDefault();
      //   document.getElementById("myModal").style.display = "none";
      //   // document.getElementById("main_content").style.display = "block";

      //   return;
      // });
      //alert('Please enter a valid email address.');
      return;
    }

    localStorage.setItem("sign_up_user_name", username);
    localStorage.setItem("sign_up_mail", email);
    localStorage.setItem("sign_up_password", signUpPass);

    makeModal("Form submitted and data saved to local storage!", () => {
      window.location.href = "index.html";
    });

    // document.getElementById("myModal").style.display = "block";

    //   document.getElementById("alertText").innerText="Form submitted and data saved to local storage!"
    //   // window.location.href = 'login.html'
    //   document.getElementById("modalBtn").addEventListener("click", function (event) {
    //     event.preventDefault();
    //     document.getElementById("myModal").style.display = "none";
    //     document.getElementById("main_content").style.display = "block";
    //     window.location.href = 'index.html'
    //     return;

    //   });
    return;

    //alert('Form submitted and data saved to local storage!');
  });

function myFunction() {
  const x = document.getElementById("sign_up_password");
  const btn = document.getElementById("passbtn1");
  if (x.type === "password") {
    x.type = "text";
    btn.innerText = "hide";
  } else {
    x.type = "password";
    btn.innerText = "see";
  }
}
function myFunction1() {
  let y = document.getElementById("sign_up_repeat_password");
  const btn1 = document.getElementById("passbtn2");
  if (y.type === "password") {
    y.type = "text";
    btn1.innerText = "hide";
  } else {
    y.type = "password";
    btn1.innerText = "see";
  }
}

function log() {
  let storedEmail = localStorage.getItem("sign_up_mail");
  let storedPass = localStorage.getItem("sign_up_password");

  if (storedEmail && storedPass) {
    window.location.replace("login.html");
  } else {
    makeModal("You don't have an account please Sign up first");
    document.getElementById("myModal").style.display = "block";

    document.getElementById("alertText").innerText =
      "You don't have an account please Sign up first";
    // window.location.href = 'login.html'
    document
      .getElementById("modalBtn")
      .addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("myModal").style.display = "none";
        document.getElementById("main_content").style.display = "block";

        return;
      });
    return;
    //alert("You don't have a account please Sign up first")
  }
}

// document.addEventListener('DOMContentLoaded', function() {
// let storedUsername = localStorage.getItem('sign_up_user_name');
// let storedEmail = localStorage.getItem('sign_up_mail');
// let storedPass = localStorage.getItem('sign_up_password');
//   let storedRepeatPass = localStorage.getItem('sign_up_repeat_password');

//   if (storedUsername && storedEmail && storedPass && storedRepeatPass ) {
//     alert('Stored Data:\nUsername: ' + storedUsername + '\nEmail: ' + storedEmail + '\nPass: ' + storedPass  + '\nRepaeatPass: ' + storedRepeatPass);
//   }
// });
document.addEventListener("DOMContentLoaded", function (event) {
  event.preventDefault();
  let storedUsername = localStorage.getItem("sign_up_user_name");
  let storedEmail = localStorage.getItem("sign_up_mail");
  let storedPass = localStorage.getItem("sign_up_password");

  if (storedUsername && storedEmail && storedPass) {
    window.location.replace("index.html");
  }
});

function validateEmail(email) {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// function roby(){

// }
// const roby=()=>{

// }
