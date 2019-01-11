


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

