// Zac
import dataCollection from "./dataCollection"

const registrationForm = {
  createAndAppendForm () {

    // 1. Build HTML form...like a boss!
    let formHeader = document.createElement("h3")
    formHeader.textContent = "Welcome to Nutshell!"
    let emailField = document.createElement("fieldset")
    let emailLabel = document.createElement("label")
    emailLabel.textContent = "Email"
    emailLabel.setAttribute("for", "email")
    let emailInput = document.createElement("input")
    emailInput.setAttribute("id", "email")
    emailInput.setAttribute("name", "email")

    emailField.appendChild(emailLabel)
    emailField.appendChild(emailInput)

    let passField = document.createElement("fieldset")
    let passLabel = document.createElement("label")
    passLabel.textContent = "Password"
    passLabel.setAttribute("for", "password")
    let passInput = document.createElement("input")
    passInput.setAttribute("id", "password")
    passInput.setAttribute("name", "password")

    passField.appendChild(passwordLabel)
    passField.appendChild(passwordInput)

    let newAcctBtn = document.createElement("button")
    newAcctBtn.textContent = "New Account"
    newAcctBtn.setAttribute("class", "new__acct")

    newAcctBtn.addEventListener("click", this.handleAddNewUser)

    //Refer to div on index with id "regForm"
    // 2. Create an empty frag and build it up
    let registrationFormFrag = document.createDocumentFragment()
    registrationFormFrag.appendChild(formHeader)
    registrationFormFrag.appendChild(emailField)
    registrationFormFrag.appendChild(passField)
    registrationFormFrag.appendChild(newAcctBtn)

    // 3. Target the div
    let registrationArticle = document.querySelector("#regForm")

    // 4. Append frag to div
    registrationArticle.appendChild(registrationFormFrag)
  },
  handleAddNewUser
}
export default registrationForm