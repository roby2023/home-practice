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
  .getElementById("login_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let loginUseEmail = document.querySelector('input[name="uname"]').value; //AI help
    let loginPassword = document.getElementById("login_password").value;
    let storedEmail = localStorage.getItem("sign_up_mail");
    let storedPass = localStorage.getItem("sign_up_password");

    if (loginUseEmail === storedEmail && loginPassword === storedPass) {
      //alert('Log in!!');
      // document.getElementById("myModal").style.display = "block";

      // document.getElementById("alertText").innerText="Login successfully...!"
      // // window.location.href = 'login.html'
      // document.getElementById("modalBtn").addEventListener("click", function (event) {
      //   event.preventDefault();
      //   document.getElementById("myModal").style.display = "none";
      //   document.getElementById("login_form").style.display = "block";
      //   window.location.href = 'index.html'

      //   return;
      // });
      makeModal("Login successfully...!", () => {
        window.location.href = "index.html";
      });
      return;
      //google help
    } else {
      makeModal("Your password is incorrect...!");
      // document.getElementById("myModal").style.display = "block";

      // document.getElementById("alertText").innerText="Your password is incorrect...!"
      // // window.location.href = 'login.html'
      // document.getElementById("modalBtn").addEventListener("click", function (event) {
      //   event.preventDefault();
      //   document.getElementById("myModal").style.display = "none";
      //   document.getElementById("login_form").style.display = "block";

      //   return;
      // });
      return;
      //alert('Wrong information!!!');
    }
  });
