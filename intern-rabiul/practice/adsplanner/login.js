document.getElementById('login_form').addEventListener('submit', function(event) {
  event.preventDefault();

  let loginUseEmail = document.querySelector('input[name="uname"]').value; //AI help
  let loginPassword = document.getElementById('login_password').value;
  let storedEmail = localStorage.getItem('sign_up_mail');
  let storedPass = localStorage.getItem('sign_up_password');

  if (loginUseEmail === storedEmail && loginPassword === storedPass) {
    alert('Log in!!');
    window.location.href = 'index.html' //google help
  } else {
    alert('Wrong information!!!');
  }
});
