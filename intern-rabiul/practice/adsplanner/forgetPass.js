function openAll() {
  let oldPassword = localStorage.getItem("sign_up_password");

  let newPassword = document.getElementById("forgot_password").value;
  if (!oldPassword) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("myModal1").style.display = "none";
    // window.location.href = 'login.html'
    document.getElementById("modalBtn").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "login.html";
        return;
      });

    
  }

  if (newPassword === oldPassword) {
    document.getElementById("myModal2").style.display = "block";
    document.getElementById("myModal1").style.display = "none";
    // window.location.href = 'login.html'
    document.getElementById("modalBtn1").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "forgetpass.html";
        return;
      });

    // window.location.href = 'login.html
    //window.location.href = 'login.html'
    //alert('You entered the old password. Please enter a new password.');
  } else {
    //alert('Password updated successfully.');
    // Optionally update the old password in local storage
    localStorage.getItem("sign_up_password");
    localStorage.setItem("sign_up_password", newPassword);

    document.getElementById("myModal3").style.display = "block";
    document.getElementById("myModal1").style.display = "none";
    // window.location.href = 'login.html'
    document.getElementById("modalBtn2").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "index.html";
        return;
      });

  }
}
// function closeAll() {
//   document.getElementById("myModal").style.display="none";
//   document.getElementById("myModal1").style.display="block"
// }

// function openAll() {
//   document.getElementById("myModal").style.display="block";
//   document.getElementById("myModal1").style.display="none"
//   // window.location.href = 'login.html'
//   document.getElementById('modalBtn').addEventListener('click', function(event) {
//     event.preventDefault();
//     window.location.href = 'login.html'
//   });
// }

//document.getElementById("changepass").addEventListener("click", change);
