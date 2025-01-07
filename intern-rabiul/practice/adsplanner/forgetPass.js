function change(){
  let oldPassword = localStorage.getItem('sign_up_password');
  
  if (!oldPassword) {
      alert('No old password found in local storage. Please set one first.');
      return;
  }

  let newPassword = document.getElementById('forgot_password').value;

  if (newPassword === oldPassword) {
    // window.location.href = 'login.html
      window.location.href = 'login.html'
      //alert('You entered the old password. Please enter a new password.');
      
  } else {
      
      //alert('Password updated successfully.');
      // Optionally update the old password in local storage
      localStorage.getItem('sign_up_password');
      localStorage.setItem('sign_up_password',newPassword)
      
  }
}
function closeAll() {
  document.getElementById("myModal").style.display="none";
  document.getElementById("myModal1").style.display="block"
}

function openAll() {
  document.getElementById("myModal").style.display="block";
  document.getElementById("myModal1").style.display="none"
  // window.location.href = 'login.html'
  document.getElementById('modalBtn').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'login.html'
  });
}



//document.getElementById("changepass").addEventListener("click", change);