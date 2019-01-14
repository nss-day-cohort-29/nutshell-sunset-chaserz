import userCollection from "./userCollection"
//import eventListener from "./eventListener"
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

    let userField = document.createElement("fieldset")
    let userLabel = document.createElement("label")
    userLabel.textContent = "Username"
    userLabel.setAttribute("for", "user")
    let userInput = document.createElement("input")
    userInput.setAttribute("id", "user")
    userInput.setAttribute("name", "user")

    userField.appendChild(userLabel)
    userField.appendChild(userInput)

    let newAcctBtn = document.createElement("button")
    newAcctBtn.textContent = "New Account"
    newAcctBtn.setAttribute("class", "new__acct")

    let loginBtn = document.createElement("button")
    loginBtn.textContent = "Login"
    loginBtn.setAttribute("class", "log__in")

    newAcctBtn.addEventListener("click", this.handleAddNewUser)
    
    let nodes = document.getElementById("display-container").childNodes;
    for(let i=0; i<nodes.length; i++) {
      if (nodes[i].nodeName.toLowerCase() == "div") {
        nodes[i].style.visibility = "hidden";
      }
        // if (newAcctBtn.click === true) {
        //   if (userInputEmail && userInputUsername != null){
        //     nodes[i].style.visibility = "visible";
        //     console.log("clicked")
        //   }
        // }
    }

    // Hides display divs beneath the login section until login.
    // for(var i=0; i<nodes.length; i++) {
    //   if (nodes[i].nodeName.toLowerCase() == "div") {
          
    //}
  

    //*********** Maybe handleLoginReturnUser here? ***********/
    //loginBtn.addEventListener("click", this.handleAddNewUser)
    
    //Refer to div on index with id "regForm"
    // 2. Create an empty frag and build it up
    let registrationFormFrag = document.createDocumentFragment()
    registrationFormFrag.appendChild(formHeader)
    registrationFormFrag.appendChild(emailField)
    registrationFormFrag.appendChild(userField)
    registrationFormFrag.appendChild(newAcctBtn)
    registrationFormFrag.appendChild(loginBtn)

    // 3. Target the div
    let registrationArticle = document.querySelector("#regForm")

    // 4. Append frag to div
    registrationArticle.appendChild(registrationFormFrag)
  },
  handleAddNewUser (NewAcct) {
    // Add an if and forEach in here to see if user already exists or not. Do something depending on their status.
    userCollection.yayNewPal(NewAcct)
      let userInputEmail = document.querySelector("#email").value
      let userInputUsername = document.querySelector("#user").value
      
      let newUser = {
        email: userInputEmail,
        username: userInputUsername
      }
      userCollection.yayNewPal(newUser)
    },
    //handleReturnUser
    // newAcctOnClick () {
    //   registrationForm.createAndAppendForm.newAcctBtn.addEventListener("click", this.showDivs)
    //   console.log("clicked")
    // }
}
export default registrationForm