import dataCollection from "./dataCollection";
// import calendarEvents from "./eventListener";
import eventListener from "./eventListener"
// import saveCalListener from "./eventListener"
// import taskForm from "./forms";
// import taskList from "./dataList";
// import forms2 from "./news/forms2"
// taskList.listify()
// taskForm.createAndAppendForm()


dataCollection.soManyFriend();
console.log(dataCollection.getAllNews());

var myHonda = {color: "red", wheels: 4, engine: {cylinders: 4, size: 2.2}};
dataCollection.yayNewPal(myHonda)
console.log("new friend!" , dataCollection.soManyFriend());


// console.log(taskForm)

// let newsContainerDiv = document.getElementById("newsContainer");
let formsContainerDiv = document.getElementById("formsContainer");
// newsContainerDiv.innerHTML += forms2.renderNewsForm();


eventListener.newsClick();



formsContainerDiv.addEventListener("click", () => {
    eventListener.newsFormSaveEntryButton();
})


//window.alert('HI');
// import dataCollection from "./dataCollection"
// import dataList from "./dataList"
// import registrationForm from "./registration"
// import taskForm from "./forms";

// console.log(dataCollection.soManyFriend());
// console.log(taskForm)
// console.log(calendarEvents)
// ---------------------------- BEGIN REGISTRATION  -------------------------------

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

// ---------------------------- END REGISTRATION  -------------------------------
