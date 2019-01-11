import taskList from "./dataList"
// HN: import eventListeners here

const taskForm = {
  //HN: This is the "big object" that all of the task methods are categorized under. It will be exported at the bottom of the module.
  
  // --------------------------------------- BEGIN TASKS FORM ------------------------------
  
  const taskForm = {
    let formElement = document.getElementById("taskContainer");
    taskForm.innerHTML 
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

  export default taskForm
