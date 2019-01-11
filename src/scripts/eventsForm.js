// BEGIN "FORMS FUNCTION": A general function to create all the forms.
// The variable "sharedFormsBuilder" refers to the generic form setup which all users share. This is not optional: all of use will have to place our forms within the overall "sharedFormsBuilder" object in order to export.
// There are two options for creating a form:
  // 1. .innerHTML = ` `
  // 2. createElement()
  //HN: I spoke with Jisie this morning and we can use .innerHTML but we will have to be careful when we capture the data to pass to another module, and we will have to use createElement for building out that data on the userDash.


    //Follow format on fridgify foodBuilderAndAppender:
    //https://github.com/nss-day-cohort-29/fridgify/blob/implementing-edit-functionality/src/scripts/foodForm.js

  // --------------------------------------- BEGIN EVENTS/CAL FORM ------------------------------
  
 const calForm = {

calContainer = document.getElementById("calContainer");
// HN: Do not use .innerHTML but use createElement to build the HTML below: 
//   calForm.innerHTML = `
  
//   <form>
//   <h5>Events</h5>
//   <div class = "form-group">
//   <input type = "text" class = "form-control" id = "calNameInput" placeholder="Event Name">
//   </div>
//   <div class = "form-group">
//   <input type="date" class = "form-control" id = "calDateInput" placeholder="Event Date">
//   </div>
//   <div class = "form-group">
//   <input type = "text" class = "form-control" id = "calLocationInput" placeholder="Event Location">
//   </div>
//   <button type="submit" id="save-cal-btn">Add Event</button>
//   </form>`

 }

  // --------------------------------------- END EVENTS/CAL FORM ------------------------------

  export default calForm