//author: Grady R.
// purpose: Forms module, object with methods to retrieve misc. forms.

const forms2 = {

    // clearForm() {
    //     return
    //         document.querySelector("#taskName").value = ""
    //         document.querySelector("#taskDescription").value = ""

    // },
    renderNewsForm() {

            return `
        <fieldset class="newsField">
            <label for="newsTitle">Title</label>
            <input required type="text" id="newsTitle">
        </fieldset>
        <fieldset class="newsField">
            <label for="newsContent">Synopsis</label>
            <input id="newsContent"></input>
        </fieldset>
        <fieldset class="newsField">
            <label for="newsURL">URL</label>
            <input required type="text" id="newsURL">
        </fieldset>
        <button class="saveNewsButton">Save News Entry</button>
        <button class="backToNewsButton">Back to News</button>
        `
        }

}



export default forms2