// import taskList from "./dataList"
// BEGIN "FORMS FUNCTION": A general function to create all the forms.
// The variable "sharedFormsBuilder" refers to the generic form setup which all users share. This is not optional: all of use will have to place our forms within the overall "sharedFormsBuilder" object in order to export.
// There are two options for creating a form:
  // 1. .innerHTML = ` `
  // 2. createElement()
  //HN: I spoke with Jisie this morning and we can use .innerHTML but we will have to be careful when we capture the data to pass to another module, and we will have to use createElement for building out that data on the userDash.

  //This is the tasks section within the sharedFormsBuilder function:

  // createTaskForm(articleId, taskObjectToEdit)
    //let taskNameField = document.createElement(element)
    //Follow format on fridgify foodBuilderAndAppender:
    //https://github.com/nss-day-cohort-29/fridgify/blob/implementing-edit-functionality/src/scripts/foodForm.js

// const sharedFormsBuilder = {



  // --------------------------------------- BEGIN TASKS FORM ------------------------------

  // const forms = {
  //   let taskForm = document.getElementById("taskContainer");
  //   taskForm.innerHTML = `
  //   <form>
  //   <h5>Tasks</h5>
  //   <div class="form-group">
  //   <input type="text" class="form-control" id="formGroupNameInput" placeholder="Task Name">
  //   </div>
  //   <div class="form-group">
  //   <input type="date" class="form-control" id="formGroupDateInput" placeholder="Due Date">
  //   </div>
  //   <button type="submit" id="taskBtn">Add Task</button>
  //   </form>
  //   `
  //   //Attach event listener to button in form
  //   taskBtn.addEventListener("click", handleAddNewTask());

  //   //Function that executes when event happens
  //   function handleAddNewTask() {
  //     //get user input
  //     let inputTaskName = document.getElementById("formGroupNameInput").value
  //     let inputTaskDate = document.getElementById("formGroupDateInput").value

  //     //create new object
  //     let newTask = {
  //       name: inputTaskName,
  //       date: inputTaskDate
  //     }

  //     //call the method (postNewTask)
  //     //--fetch request: POST to the database and pass it the object we just created
  //     postNewTask(newTask)
  //     //grunt wouldn't run until i console logged response
  //     .then(response => {
  //       taskList.listify()
  //       console.log(response)
  //     })
  //   }
  // }
  // export default forms
  // --------------------------------------- END TASKS FORM ------------------------------

  // --------------------------------------- BEGIN EVENTS/CAL FORM ------------------------------

  // let calForm = document.getElementById("calContainer");
  // calForm.innerHTML = `

  // <form>
  // <h5>Events</h5>
  // <div class = "form-group">
  // <input type = "text" class = "form-control" id = "calNameInput" placeholder="Event Name">
  // </div>
  // <div class = "form-group">
  // <input type="date" class = "form-control" id = "calDateInput" placeholder="Event Date">
  // </div>
  // <div class = "form-group">
  // <input type = "text" class = "form-control" id = "calLocationInput" placeholder="Event Location">
  // </div>
  // <button type="submit" id="save-cal-btn">Add Event</button>
  // </form>`
  // export default calForm
  // --------------------------------------- END EVENTS/CAL FORM ------------------------------

  // --------------MESSAGES FORM ---------------------------------

  // --------------FRIENDS FORM ---------------------------------
