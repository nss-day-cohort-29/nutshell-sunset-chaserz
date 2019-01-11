// Zac
// Grab some data
const dataCollection = {
  //********* USERS TABLE *********//
  // Grab all user data
  soManyFriend() {
    return fetch("http://localhost:8088/users")
    .then(response => response.json())
    .then(response => {
      // WORKS
      // console.log(response)
    })
  },
  //***** TEST *****/
  // ADD USER
  yayNewPal(newUser) {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
  },
  //News feature- gmr
  getAllNews() {
    return fetch("http://localhost:8088/news")
    .then(response => response.json())
    .then(response => {
      // WORKS
      console.log(response)
    })
  },

// *** EXPORT to registration.js (eventually forms.js) ***

  //***** TEST *****/
  // DELETE USER
  // dudeGoAway(id) {
  //   return fetch(`http://localhost:8088/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   })
  // },
  //***** TEST *****/
  // EDIT USER - 2 STAGES

  //STAGE 1 - Get the id of the item.
  // seeksUserId(id) {
  //   return fetch(`http://localhost:8088/users/${id}`)
  //   .then(response => response.json())
  // },
  // //STAGE 2 - Do some stuff to the item.
  // thingsChange() {
  //   return fetch(`http://localhost:8088/users/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(newUser)
  //   })
  // },

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

export default dataCollection
