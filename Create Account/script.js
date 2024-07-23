const passwordsBlock = document.getElementById("passwordsBlock")

const handelSubmit = () => {
  const password = document.getElementById("password")
  const rePassword = document.getElementById("rePassword")
  const errorMessage = document.getElementById("errorMessage")
  if(password.value === rePassword.value) {
    errorMessage.style.display = "none"
  } else {
    passwordsBlock.style.color = "red"
    errorMessage.style.display = "block"
  }
}
