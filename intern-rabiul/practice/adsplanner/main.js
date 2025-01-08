const getElement=(id)=>{
  return document.getElementById(id)
}
const makeModal=(text, action=()=>{})=>{
  getElement("myModal").style.display = "block";
  document.getElementById("alertText").innerText=text
    // window.location.href = 'login.html'
    document.getElementById("modalBtn").addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("myModal").style.display = "none";
      action();
      return;
    });
    

}
function modalCancel(){
  document.getElementById("modalBtn1").addEventListener("click",function(event){
    // console.log("clicked")
    
    event.preventDefault();
    document.getElementById("myModal").style.display = "none";
    return;
  })
}



function roman(s) {

  let x = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let ttl = 0;
  for (let i = 0; i < s.length; i++) {
    if (x[s[i]] < x[s[i + 1]]) {
      ttl -= x[s[i]];
    }
    else {
      ttl += x[s[i]];
    }
  }
  return ttl;

};

function convert() {
  const roman_input = document.getElementById("romaninput").value;
  const roman_result = document.getElementById("output")
  const res = roman(roman_input.toUpperCase());
  roman_result.textContent = `The Integer number is: ${res}`
}

function deleteAccount(){
  let storedUsername = localStorage.getItem('sign_up_user_name');
  let storedEmail = localStorage.getItem('sign_up_mail');
  let storedPass = localStorage.getItem('sign_up_password');
  if(storedUsername && storedEmail && storedPass ){
    makeModal("Are you sure to delete account",()=>{
      localStorage.removeItem('sign_up_user_name');
      localStorage.removeItem('sign_up_mail');
      localStorage.removeItem('sign_up_password');
      window.location.replace("signup.html");
      return;
    })
    modalCancel();
    return;
     

  }
  // else{
  //   document.getElementById("modalBtn1").addEventListener("click",function(event){
  //     console.log("clicked")
      
  //     event.preventDefault();
  //     document.getElementById("myModal").style.display = "none";
  //   })
    
  // }
  return;
 
}

document.addEventListener('DOMContentLoaded', function(event) {
  event.preventDefault();
  let storedUsername = localStorage.getItem('sign_up_user_name');
  let storedEmail = localStorage.getItem('sign_up_mail');
  let storedPass = localStorage.getItem('sign_up_password');
  
  
  if (!storedUsername || !storedEmail || !storedPass) {
    window.location.replace("login.html");
  }
  
});

// function change_pass(){
//   let newPassword = document.getElementById('forgot_password').value;

//   if (newPassword === oldPassword) {
//     // window.location.href = 'login.html
//       window.location.href = 'login.html'
//       alert('You entered the old password. Please enter a new password.');
      
//   } else {
      
//       alert('Password updated successfully.');
//       localStorage.getItem('sign_up_password');
//       localStorage.setItem('sign_up_password',newPassword)
      
//   }
// }