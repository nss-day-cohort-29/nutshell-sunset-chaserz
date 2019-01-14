// BUILD the structure to display data objects on the DOM.
// Fridgify reference - food.js



// ----------------------------------- BEGIN EVENTS/CAL USER DISPLAY -------------------------------------

//TASKS
function taskBuilder(taskObject) {
  let taskArticle = document.createElement("article")
  
  let taskName = document.createElement("h3")
  taskName.textContent = taskObject.name

  let taskType = document.createElement("p")
  taskType.textContent = taskObject.type

  taskArticle.appendChild(taskName)
  taskArticle.appendChild(taskExp)
  taskArticle.appendChild(taskType)

  return taskArticle
};