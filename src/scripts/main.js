import dataCollection from "./dataCollection";
import taskForm from "./forms";
import taskList from "./dataList";
import eventListeners from "./eventListener"


taskList.listify()
taskForm.createAndAppendForm()


console.log(dataCollection.soManyFriend());
console.log(dataCollection.getAllNews());
console.log(taskForm)


eventListeners.newsClick();
//window.alert('HI');
// import dataCollection from "./dataCollection"
// import dataList from "./dataList"
// import registrationForm from "./registration"
// import taskForm from "./forms";

// //import eventListener from "./eventListener"
// registrationForm.createAndAppendForm();

// let newAcctButton = document.querySelector('[name="newAcctButton"]')

// newAcctButton.addEventListener("click", function() {
//   let usernameInputField = document.getElementById("exampleInputEmail1");
//   let usernameInputValue = usernameInputField.value;
//   console.log(userNameInputValue);
// });
// //dataCollection.yayNewPal(newUser);
// //Works
// console.log(newAcctButton.className);
// const handleNewUser = () => {
//   let email = document.querySelector('[name="email"]').value
//   let password = document.querySelector('[name="password"]').value
//   let newUser = {
//     email: email,
//     password: password
//   }
//   console.log(newUser)
// // dataCollection.yayNewPal(newUser)
// //   .then(response => {
// //     userList.dataCollection()
// //   })
// }
// //  newAcctButton.addEventListener("click", handleNewUser)
//     // let submitButton = document.querySelector('[name=submitButton]')
//     // submitButton.addEventListener("click", registrationForm.handleAddNewUser())
//     // let regForm = registrationForm.handleAddNewUser()
//     // console.log(regForm)


// //console.log(dataCollection.soManyFriend());
// //console.log(registrationForm.handleAddNewUser());
// //console.log(eventListener.consoleButton());
// console.log(dataCollection.soManyFriend());
// console.log(taskForm)

// //window.alert('HI');
