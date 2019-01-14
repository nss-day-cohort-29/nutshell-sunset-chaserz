
import taskList from "./dataList"

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

const sharedFormsBuilder = {
  createAndAppendForm () {

  // --------------------------------------- BEGIN TASKS FORM ------------------------------
    //Build HTML form
    //TASK NAME
    let taskNameField = document.createElement("fieldset")

    let taskNameLabel = document.createElement("label")
    taskNameLabel.textContent = "Name"
    taskNameLabel.setAttribute("for", "task-name")
    let taskNameInput = document.createElement("input")
    taskNameInput.setAttribute("id", "task-name")
    taskNameInput.setAttribute("name", "task-name")

    taskNameField.appendChild(taskNameLabel)
    taskNameField.appendChild(taskNameInput)

    //TASK DATE
    let taskDateField = document.createElement("fieldset")

    let taskDateLabel = document.createElement("label")
    taskDateLabel.textContent = "Due date"
    taskDateLabel.setAttribute("for", "task-date")
    let taskDateInput = document.createElement("input")
    taskDateInput.setAttribute("id", "task-date")
    taskDateInput.setAttribute("name", "task-date")

    taskDateField.appendChild(taskDateLabel)
    taskDateField.appendChild(taskDateInput)


    //BUTTON
    let taskBtn = document.createElement("button")
    taskBtn.textContent = "Add Task"
    taskBtn.setAttribute("class", "task-save")

    //Attach event listener to button in form
    taskBtn.addEventListener("click", this.handleAddNewTask)

    //Append the HTML form to the DOM
    let taskFormFragment = document.createDocumentFragment()
    taskFormFragment.appendChild(taskNameField)
    taskFormFragment.appendChild(taskDateField)
    taskFormFragment.appendChild(submitButton)

    let formArticle = document.querySelector("taskContainer")
    formArticle.appendChild(foodFormFragment)

  },
  //Function that executes when event happens
  handleAddNewTask() {
    //get user input
    let inputTaskName = document.getElementById("task-name").value
    let inputTaskDate = document.getElementById("task-date").value

    //create new object
    let newTask = {
      name: inputTaskName,
      date: inputTaskDate
    }

    //call the method (postNewTask)
    //--fetch request: POST to the database and pass it the object we just created
    postNewTask(newTask)
    //grunt wouldn't run until i console logged response
    .then(response => {
      taskList.listify()
      console.log(response)
    })
  }
}

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

  export default sharedFormsBuilder
