//TASKS FORM

  let taskForm = document.getElementById("taskContainer");
  taskContainer.innerHTML = `
  <form>
    <div class="form-group">
      <label for="formGroupNameInput">Task Name</label>
      <input type="text" class="form-control" id="formGroupNameInput" placeholder="Task Name">
    </div>
    <div class="form-group">
      <label for="formGroupDateInput">Due Date</label>
      <input type="text" class="form-control" id="formGroupDateInput" placeholder="Due Date">
    </div>
    <button type="submit" id="taskBtn">Add Task</button>
  </form>
  ` 
  console.log(taskForm);
export default taskForm

//format below lifted from fridgify
/* const taskForm = {
  createAndAppendForm () {
    let taskNameField = document.createElement("fieldset")

    let taskNameLabel = document.createElement("label")
    taskNameLabel.textContent = "Task Name"
    taskNameLabel.setAttribute("for", "task-name")
    let taskNameInput = document.createElement("input")
    taskNameInput.setAttribute("id", "task-name")
    taskNameInput.setAttribute("name", "task-name")

    taskNameField.appendChild(taskNameLabel)
    taskNameField.appendChild(taskNameInput)

    //BUTTON
    let submitButton = document.createElement("button")
    submitButton.textContent = "Add Task"
    submitButton.setAttribute("class", "task-save")

    //Attach event listener to button in form
    submitButton.addEventListener("click", this.handleAddNewtask)

    //Append the HTML form to the DOM
    let taskFormFragment = document.createDocumentFragment()
    taskFormFragment.appendChild(taskNameField)
    taskFormFragment.appendChild(submitButton)

    let formArticle = document.querySelector("taskContainer")
    formArticle.appendChild(taskFormFragment)

  },
} */

//export default taskForm
