//Form Elements
var fName;
var lName;
var phone;
var email;

//Var for message
var msg;
var error;

//Submit Button Press
function submitFunc() {
  //Get Vars from Form
  fName = document.getElementById("myForm").elements[0].value;
  lName = document.getElementById("myForm").elements[1].value;
  phone = document.getElementById("myForm").elements[2].value;
  email = document.getElementById("myForm").elements[3].value;
  error = false;
  msg = "";
  
  //Check to make sure fiels are full
  if (fName == ""){
	msg += "Error: No First Name.\n";
	error = true;
  }
  if (lName == ""){
	msg += "Error: No Last Name.\n";
	error = true;
  }
  if (phone == ""){
	msg += "Error: No Phone Number.\n";
	error = true;
  }
  if (email == ""){
	msg += "Error: No Email Address.\n";
	error = true;
  }
  
  //If all checks pass
  if (error == false) {
	alert("Thank you " + fName + " " + lName + "!\nSomeone Will contact you via:\n\t" + email);
  }else{
	document.getElementById("error").innerHTML = msg;
  }
}

document.getElementById("myForm").onsubmit = function(){submitFunc()};

//Clear Button Press
function clearForm(){
  alert("Form has been cleared.")
  document.getElementById("error").innerHTML = "";
}

document.getElementById("myForm").onreset = function(){clearForm()};
  