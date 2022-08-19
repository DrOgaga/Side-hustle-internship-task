function validateForm(){
  var pw1 = document.getElementById("password").value;
  var pw2 = document.getElementById("cnfrm-password").value;
  if(pw1 != pw2) {document.getElementById("message").innerHTML = "*Password do not match";
  return false;
} 
}



