// Event listeners
// name: Grady R.
// purpose: build and export an object with methods allowing for eventlisteners.


import forms2 from "./news/forms2"

const eventListeners = {

    // when user clicks on "News" in NavBar, execute a function
    newsClick() {

        let makeNewsplaceholder = document.getElementById("newsNavLink");
        // makeNewsplaceholder.addEventListener("click", () => forms2.renderNewsForm);
        makeNewsplaceholder.addEventListener("click", () => {
        let formsContainerDiv = document.getElementById("formsContainer");
        formsContainerDiv.innerHTML += forms2.renderNewsForm();})
        // return makeNewsplaceholder
      },

    newsFormSaveEntryButton() {
        let newsFormSaveEntryButton = document.getElementById("saveNewsButton");
        newsFormSaveEntryButton.addEventListener("click", () => {
            //another function needed to capture the values and POST,
            //then
            // forms2.clearForm()
            console.log("hello")
        })

    }



      //import registrationForm from "./registration";

      // All event listeners

      // Registration listener
      // Submit button
      // const eventListener = {
      //   consoleButton() {
      //let submitButton = document.querySelector('[name=submitButton]')
      //     submitButton.addEventListener("click", registrationForm.handleAddNewUser())
      //     let regForm = registrationForm.handleAddNewUser()
      //     console.log(submitButton)
      //   }
      // }
      //export default eventListener

}

export default eventListeners

// HN:
// Create eventhandlers to capture the values of userInput
// An example of this can be found on line 69 of: https://github.com/nss-day-cohort-29/fridgify/blob/implementing-edit-functionality/src/scripts/foodForm.js

// ---------------------------- BEGIN REGISTRATION LISTENTERS/HANDLERS -------------------------------

// Registration listener
// Submit button
// const eventListener = {
//   consoleButton() {
//let submitButton = document.querySelector('[name=submitButton]')
//     submitButton.addEventListener("click", registrationForm.handleAddNewUser())
//     let regForm = registrationForm.handleAddNewUser()
//     console.log(submitButton)
//   }
// }

// ---------------------------- END REGISTRATION LISTENTERS/HANDLERS -------------------------------




// ---------------------------- BEGIN EVENT/CAL LISTENTERS/HANDLERS -------------------------------
// Create eventListener ("click") for save-cal-btn
// let calendarEvents = {
// let saveCalListener = document.getElementById("save-cal-btn").addEventListener("click", function(event) {
//     let calFormNameInput = "calNameInput";
//     let calFormDateInput = "calDateInput";
//     let calFormLocationInput = "calLocationInput";
//     console.log(calFormNameInput.value, calFormDateInput.value, calFormLocationInput.value);
// })
// }
// export default calendarEvents

// Then the event should be displayed in the application in the Events component

// ---------------------------- END EVENT/CAL LISTENTERS/HANDLERS -------------------------------

