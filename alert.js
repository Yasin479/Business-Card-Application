function companyName() {
  document.getElementById("company").innerHTML = inputCompany.value;
}

function companyMsg() {
  document.getElementById("companyMessage").innerHTML = inputMsg.value;
}

function background() {
  document.querySelector(".preview").style.backgroundColor = backgroundColor.value;
}

function color() {
  document.querySelector(".preview").style.color = textColor.value;
}

function leftAlign() {
  document.querySelector(".preview").style.textAlign = "left";
}

function centerAlign() {
  document.querySelector(".preview").style.textAlign = "center";
}

function rightAlign() {
  document.querySelector(".preview").style.textAlign = "right";
}

function yourName() {
  document.getElementById("name").innerHTML = inputName.value;
}

function jobTitle() {
  document.getElementById("job").innerHTML = inputJob.value;
}

function email() {
  document.getElementById("email").innerHTML = inputEmail.value;
}

function telephoneNumber() {
  document.getElementById("tel").innerHTML = inputTel.value;
}
