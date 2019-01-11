// All event listeners
// name: Grady R.
// purpose: build and export an object with methods allowing for eventlisteners.


import forms2 from "./forms2"

const eventListeners = {

    // when user clicks on "News" in NavBar, execute a function
    newsClick() {

        let makeNewsplaceholder = document.getElementById('newsNavLink');
        // makeNewsplaceholder.addEventListener("click", () => forms2.renderNewsForm);
        makeNewsplaceholder.addEventListener("click", () => console.log("clicked news nav link"))
        let newsContainerDiv = document.getElementById("newsContainer");
        newsContainerDiv.innerHTML += forms2.renderNewsForm();
        return makeNewsplaceholder
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

