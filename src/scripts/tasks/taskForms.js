/* import taskList from "./taskDataList"

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
  
export default sharedFormsBuilder */
