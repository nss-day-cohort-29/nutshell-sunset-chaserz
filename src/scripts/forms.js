// BEGIN "FORMS FUNCTION": A general function to create all the forms.
// The variable "sharedFormsBuilder" refers to the generic form setup which all users share. This is not optional: all of use will have to place our forms within the overall "sharedFormsBuilder" object in order to export.
// There are two options for creating a form:
  // 1. .innerHTML = ` `
  // 2. createElement()
  //HN: I spoke with Jisie this morning and we can use .innerHTML but we will have to be careful when we capture the data to pass to another module, and we will have to use createElement for building out that data on the userDash.


// const sharedFormsBuilder = {

// --------------TASKS FORM ---------------------------------
  //This is the tasks section within the sharedFormsBuilder function:

  // createTaskForm(articleId, taskObjectToEdit)
    //let taskNameField = document.createElement(element)
    //Follow format on fridgify foodBuilderAndAppender:
    //https://github.com/nss-day-cohort-29/fridgify/blob/implementing-edit-functionality/src/scripts/foodForm.js


// --------------EVENTS FORM ---------------------------------
  //This is the events section within the sharedFormsBuilder function:

  // createCalForm(articleId, calObjectToEdit)

// --------------MESSAGES FORM ---------------------------------
// etc.
// --------------FRIENDS FORM ---------------------------------
// etc.

// }
// export default sharedFormsBuilder

//This enables us to use one function for all forms and still create the forms for our own Issues/Tickets individually.


//TASKS FORM
let taskForm = document.getElementById("taskContainer");
taskForm.innerHTML = `
  <form>
    <h5>Tasks</h5>
    <div class="form-group">
      <input type="text" class="form-control" id="formGroupNameInput" placeholder="Task Name">
    </div>
    <div class="form-group">
      <input type="date" class="form-control" id="formGroupDateInput" placeholder="Due Date">
    </div>
    <button type="submit" id="taskBtn">Add Task</button>
  </form>
  `
// console.log(taskForm);


export default taskForm

// --------------------------------------- BEGIN EVENTS/CAL FORM ------------------------------

let calForm = document.getElementById("calContainer");
calForm.innerHTML = `

<form>
  <h5>Events</h5>
  <div class = "form-group">
    <input type = "text" class = "form-control" id = "calNameInput" placeholder="Event Name">
  </div>
  <div class = "form-group">
    <input type="date" class = "form-control" id = "calDateInput" placeholder="Event Date">
  </div>
  <div class = "form-group">
  <input type = "text" class = "form-control" id = "calLocationInput" placeholder="Event Location">
  </div>
  <button type="submit" id="save-cal-btn">Add Event</button>
</form>`
// export default calForm
// --------------------------------------- END EVENTS/CAL FORM ------------------------------
