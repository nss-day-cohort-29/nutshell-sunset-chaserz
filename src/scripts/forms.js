import taskList from "./dataList"
// HN: import eventListeners here

const taskForm = {
  //HN: This is the "big object" that all of the task methods are categorized under. It will be exported at the bottom of the module.
  
  // --------------------------------------- BEGIN TASKS FORM ------------------------------
  
  const taskForm = {
    let formElement = document.getElementById("taskContainer");
    taskForm.innerHTML 
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

  export default taskForm
