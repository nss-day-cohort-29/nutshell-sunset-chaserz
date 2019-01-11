// Here is where the second promises can be listed, imported from dataCollection.js

import taskCollection from "./dataCollection"

const taskList = {
  listify(){
    //Get data
    //the getAlltasks method will do a fetch and return a promise
    //--return data from database.json
    taskCollection.getAllTasks()
    //.then here refers to fetch call in taskCollection.js
    .then(alltasks => {
      let taskDocFragment = document.createDocumentFragment();
      
      //iterate over data and build HTML for each item
      alltasks.forEach(taskItem => {
        let taskHTML = task.taskBuilder(taskItem)
        taskDocFragment.appendChild(taskHTML)
      })

      //Append HTML to the DOM
      let outputArticle = document.querySelector(".output")

      while (outputArticle.firstChild) {
        outputArticle.removeChild(outputArticle.firstChild);
      }
      outputArticle.appendChild(taskDocFragment)

    })
  }
}

export default taskList