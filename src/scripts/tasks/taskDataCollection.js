/* const dataCollection = {
  //TASK FETCH CALLS
    getAllTasks() {
      return fetch("http://localhost:8088/tasks")
      .then(response => response.json())
    },
  
    postNewtask(newtaskToSave) {
      return fetch("http://localhost:8088/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newtaskToSave)
      })
    }
}

export default dataCollection */
