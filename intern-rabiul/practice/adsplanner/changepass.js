const getElement = (id) => {
  return document.getElementById(id)
}
const makeModal = (text, action = () => { }) => {
  getElement("myModal").style.display = "block";
  document.getElementById("alertText").innerText = text
  // window.location.href = 'login.html'
  document.getElementById("modalBtn").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("myModal").style.display = "none";
    action();
    return;
  });

}


function change() {


  // window.alert("hi")

  const savedPass = localStorage.getItem('sign_up_password');
  const oldPass = document.getElementById("old_pass").value;
  const newPass = document.getElementById("new_pass").value;

  // if(savedPass===oldPass){
  //   localStorage.setItem('sign_up_password', newPass)
  //   alert("password changed")
  // }
  // else{
  //   alert('does not match')
  // }
  if(savedPass===newPass){
    makeModal("You enter same password");
    return; 
  }

  if (savedPass !== oldPass) {
    makeModal("Please enter your old password...!")
    // alert('does not match')
    return
  }
  else {
    localStorage.setItem('sign_up_password', newPass)
    makeModal("Password changed successfully..!",()=>{
      window.location.href = 'index.html'
    })
    // alert("password changed")
    // window.location.href = 'index.html'
  }

}
function cancel() {
  window.location.href = 'index.html'
}
