function change(e) {
  console.log(e.target.value)
  console.log(e)
  e.preventDefault();
  // window.alert("hi")
  
  const savedPass = localStorage.getItem('sign_up_password');
  const oldPass= document.getElementById("old_pass").value;
  const newPass=document.getElementById("new_pass").value;

  // if(savedPass===oldPass){
  //   localStorage.setItem('sign_up_password', newPass)
  //   alert("password changed")
  // }
  // else{
  //   alert('does not match')
  // }
  
  if(savedPass!==oldPass){
    alert('does not match')
    return
  }

  localStorage.setItem('sign_up_password', newPass)
  alert("password changed")
  window.location.href = 'index.html'
}
function cancel() {
  window.location.href = 'index.html'
}
