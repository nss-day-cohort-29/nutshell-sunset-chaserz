
//import dataCollection from "./dataCollection"

const registrationForm = {
  createAndAppendForm () {
    let registrationDiv = document.getElementById("regForm")
    registrationDiv.innerHTML = `
      <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" autocomplete="off">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input name="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off">
      </div>
      <div class="form-group form-check">
      </div>
      <button name="newAcctButton" type="submit" class="btn btn-primary">New Account</button>
      <button name="loginButton" type="submit" class="btn btn-primary">Login</button>
      </form>`
  },
  handleAddNewUser (event) {
    let inputUserEmail = document.querySelector("#exampleInputEmail1").value
    let inputUserPassword = document.querySelector("#exampleInputPassword1").value
  }
}
export default registrationForm