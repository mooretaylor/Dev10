function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var phone = document.forms["myForm"]["phone"].value;
  var info = document.forms["myForm"]["info"].value;
  var bestDays = document.forms["myForm"]["bestDays"].checked;

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

  if (bestDays == "") {
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
  document.forms["myForm"]["bestDays"].checked = "";
  }


}
