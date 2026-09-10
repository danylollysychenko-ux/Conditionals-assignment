const message = document.getElementById("displayMessage");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitPassword");
const lockImage = document.getElementById("lockImage");
const checkMarkImage = document.getElementById("checkMarkImage");
let counter = 0;
let attempts = 0;
let password1 = "admin123";
let password2 = "sigma67";
let password3 = "system32";

submitBtn.addEventListener("click", function () {
  const show = document.getElementById(".show");
  show?.classList.remove("show");
  if (
    passwordInput.value == password1 ||
    passwordInput.value == password2 ||
    passwordInput.value == password3
  ) {
    attempts = 0;
    counter = 0;
    message.innerHTML = "Access Granted.";
    checkMarkImage.classList.add("show")

  } else {
    message.innerHTML = "Invalid";
    counter++;
    if (counter == 3) {
      attempts++;
      counter = 0;
      message.innerHTML = `Failed Attempt #${attempts}`;
      if (attempts == 3) {
        message.innerHTML = "MACHINE BLOCKED";
        lockImage.classList.add("show");
        submitBtn.disabled = true;
        passwordInput.disabled = true;
      }
    }
  }
});
