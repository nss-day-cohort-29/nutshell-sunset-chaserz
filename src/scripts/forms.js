import taskList from "./dataList"

//TASKS FORM
const forms = {
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
  //Attach event listener to button in form
  taskBtn.addEventListener("click", handleAddNewTask());

  //Function that executes when event happens
  function handleAddNewTask() {
    //get user input
    let inputTaskName = document.getElementById("formGroupNameInput").value
    let inputTaskDate = document.getElementById("formGroupDateInput").value

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
export default forms

