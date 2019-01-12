//author: Grady R.
// purpose: Forms module, object with methods to retrieve misc. forms.

const forms2 = {

    renderNewsForm() {

        return `
        <fieldset class="newsField">
        <label for="newsTitle">Title</label>
        <input required type="text" id="newsTitle">
        </fieldset>
        <fieldset class="newsField">
        <label for="newsContent">Synopsis</label>
        <input required type="text" id="newsContent"></input>
        </fieldset>
        <fieldset class="newsField">
        <label for="newsURL">URL</label>
        <input required type="text" id="newsURL"></input>
        </fieldset>
        <button class="saveNewsButton">Save this Entry</button>
        `
    },
    clearForm() {
        console.log("save news button clicked");
        // document.getElementById("newsTitle").value = "";
        // document.getElementById("newsContent").value = "";
        // document.getElementById("newsURL").value = "";

        // return
    }

}



export default forms2