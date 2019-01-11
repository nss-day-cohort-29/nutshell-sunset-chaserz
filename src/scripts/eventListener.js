// All event listeners
// name: Grady R.
// purpose: build and export an object with methods allowing for eventlisteners.


// import forms2 from "./forms2"

const eventListeners = {

    // when user clicks on "News" in NavBar, execute a function
    newsClick() {

        let makeNewsplaceholder = document.getElementById('newsNavLink');
        // makeNewsplaceholder.addEventListener("click", () => forms2.renderNewsForm);
        makeNewsplaceholder.addEventListener("click", () => console.log("clicked news nav link"))
        return makeNewsplaceholder
      }


}

export default eventListeners

