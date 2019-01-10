import dataCollection from "./dataCollection"
import registrationForm from "./registration"
//import eventListener from "./eventListener"
registrationForm.createAndAppendForm();



let newAcctButton = document.querySelector('[name="newAcctButton"]')
let usernameInputField = document.getElementById("exampleInputEmail1")

newAcctButton.addEventListener("click", function() {


}
//Works
//console.log(newAcctButton.className);
const handleNewUser = () => {
  let email = document.querySelector('[name="email"]').value
  let password = document.querySelector('[name="password"]').value
  let newUser = {
    email: email,
    password: password
  }
  console.log("email:")
 // newAcctButton.addEventListener("click", handleNewUser()),

// dataCollection.yayNewPal(newUser)
//   .then(response => {
//     userList.dataCollection()
//   })
}



//  newAcctButton.addEventListener("click", handleNewUser)
    // let submitButton = document.querySelector('[name=submitButton]')
    // submitButton.addEventListener("click", registrationForm.handleAddNewUser())
    // let regForm = registrationForm.handleAddNewUser()
    // console.log(regForm)
  

//console.log(dataCollection.soManyFriend());
//console.log(registrationForm.handleAddNewUser());
//console.log(eventListener.consoleButton());