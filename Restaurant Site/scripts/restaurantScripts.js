/*
Name: Taylor Moore
Date Created: 12.20.2018
Last Modified: 12.21.2018
*/


function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var phone = document.forms["myForm"]["phone"].value;
  var info = document.forms["myForm"]["info"].value;
  var monday = document.myForm.monday.checked;
  var tuesday = document.myForm.tuesday.checked;
  var wednesday = document.myForm.wednesday.checked;
  var thursday = document.myForm.thursday.checked;
  var friday = document.myForm.friday.checked;

  if (name == "") {
    alert("Name is required.");
    return false;
  }

  if (email == "") {
    alert("Email is required.");
    return false;
  }

  if (phone == "") {
    alert("Phone is required.");
    return false;
  }

  if (info == "") {
    alert("Additional Information is required.");
    return false;
  }

  if ((monday == false) && (tuesday == false) && (wednesday == false) && (thursday == false) && (friday == false)) {
    alert("Please select at least one day that we can contact you.");
    return false;
  }

  else {alert ("Your request has been received.");
  document.forms["myForm"]["name"].value = "";
  document.forms["myForm"]["email"].value = "";
  document.forms["myForm"]["phone"].value = "";
  document.forms["myForm"]["reason"].value = "catering";
  document.forms["myForm"]["info"].value = "";
  document.forms["myForm"]["visit"].value = "no";
  }


}
