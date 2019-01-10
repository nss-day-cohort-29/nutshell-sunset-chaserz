(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Zac
// Grab some data
const dataCollection = {
  //********* USERS TABLE *********//
  // Grab all user data
  soManyFriend() {
    return fetch("http://localhost:8088/users").then(response => response.json()).then(response => {
      // WORKS
      console.log(response);
    });
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
    });
  }

}; // *** EXPORT to registration.js (eventually forms.js) ***

var _default = dataCollection; //***** TEST *****/
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

exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _dataCollection = _interopRequireDefault(require("./dataCollection"));

var _registration = _interopRequireDefault(require("./registration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import eventListener from "./eventListener"
_registration.default.createAndAppendForm();

let newAcctButton = document.querySelector('[name="newAcctButton"]');
newAcctButton.addEventListener("click", function () {
  let usernameInputField = document.getElementById("exampleInputEmail1");
  let usernameInputValue = usernameInputField.value;
  console.log("userNameInputValue :");
});

_dataCollection.default.yayNewPal(newUser); //Works
//console.log(newAcctButton.className);


const handleNewUser = () => {
  let email = document.querySelector('[name="email"]').value;
  let password = document.querySelector('[name="password"]').value;
  let newUser = {
    email: email,
    password: password
  };
  console.log("email:"); // dataCollection.yayNewPal(newUser)
  //   .then(response => {
  //     userList.dataCollection()
  //   })
}; //  newAcctButton.addEventListener("click", handleNewUser)
// let submitButton = document.querySelector('[name=submitButton]')
// submitButton.addEventListener("click", registrationForm.handleAddNewUser())
// let regForm = registrationForm.handleAddNewUser()
// console.log(regForm)
//console.log(dataCollection.soManyFriend());
//console.log(registrationForm.handleAddNewUser());
//console.log(eventListener.consoleButton());

},{"./dataCollection":1,"./registration":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//import dataCollection from "./dataCollection"
const registrationForm = {
  createAndAppendForm() {
    let registrationDiv = document.getElementById("regForm");
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
      </form>`;
  },

  handleAddNewUser(event) {
    let inputUserEmail = document.querySelector("#exampleInputEmail1").value;
    let inputUserPassword = document.querySelector("#exampleInputPassword1").value;
  }

};
var _default = registrationForm;
exports.default = _default;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGFDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIiwiLi4vc2NyaXB0cy9yZWdpc3RyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0EsTUFBTSxjQUFjLEdBQUc7QUFDckI7QUFDQTtBQUNBLEVBQUEsWUFBWSxHQUFHO0FBQ2IsV0FBTyxLQUFLLENBQUMsNkJBQUQsQ0FBTCxDQUNOLElBRE0sQ0FDRCxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEWCxFQUVOLElBRk0sQ0FFRCxRQUFRLElBQUk7QUFDaEI7QUFDQSxNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWjtBQUNELEtBTE0sQ0FBUDtBQU1ELEdBVm9COztBQVdyQjtBQUNBO0FBQ0EsRUFBQSxTQUFTLENBQUMsT0FBRCxFQUFVO0FBQ2pCLFdBQU8sS0FBSyxDQUFDLDZCQUFELEVBQWdDO0FBQzFDLE1BQUEsTUFBTSxFQUFFLE1BRGtDO0FBRTFDLE1BQUEsT0FBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQsT0FGaUM7QUFLMUMsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxPQUFmO0FBTG9DLEtBQWhDLENBQVo7QUFPRDs7QUFyQm9CLENBQXZCLEMsQ0F1QkE7O2VBQ2UsYyxFQUtiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFERjs7QUFDQTs7OztBQUNBO0FBQ0Esc0JBQWlCLG1CQUFqQjs7QUFJQSxJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBcEI7QUFFQSxhQUFhLENBQUMsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBVztBQUNqRCxNQUFJLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLG9CQUF4QixDQUF6QjtBQUNBLE1BQUksa0JBQWtCLEdBQUcsa0JBQWtCLENBQUMsS0FBNUM7QUFDQSxFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksc0JBQVo7QUFDRCxDQUpEOztBQUtBLHdCQUFlLFNBQWYsQ0FBeUIsT0FBekIsRSxDQUNBO0FBQ0E7OztBQUNBLE1BQU0sYUFBYSxHQUFHLE1BQU07QUFDMUIsTUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsZ0JBQXZCLEVBQXlDLEtBQXJEO0FBQ0EsTUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsbUJBQXZCLEVBQTRDLEtBQTNEO0FBQ0EsTUFBSSxPQUFPLEdBQUc7QUFDWixJQUFBLEtBQUssRUFBRSxLQURLO0FBRVosSUFBQSxRQUFRLEVBQUU7QUFGRSxHQUFkO0FBSUEsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFQMEIsQ0FVNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQyxDQWRELEMsQ0FrQkE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUdKO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDM0NBO0FBRUEsTUFBTSxnQkFBZ0IsR0FBRztBQUN2QixFQUFBLG1CQUFtQixHQUFJO0FBQ3JCLFFBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFNBQXhCLENBQXRCO0FBQ0EsSUFBQSxlQUFlLENBQUMsU0FBaEIsR0FBNkI7Ozs7Ozs7Ozs7Ozs7O2NBQTdCO0FBZUQsR0FsQnNCOztBQW1CdkIsRUFBQSxnQkFBZ0IsQ0FBRSxLQUFGLEVBQVM7QUFDdkIsUUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIscUJBQXZCLEVBQThDLEtBQW5FO0FBQ0EsUUFBSSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1Qix3QkFBdkIsRUFBaUQsS0FBekU7QUFDRDs7QUF0QnNCLENBQXpCO2VBd0JlLGdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gWmFjXG4vLyBHcmFiIHNvbWUgZGF0YVxuY29uc3QgZGF0YUNvbGxlY3Rpb24gPSB7XG4gIC8vKioqKioqKioqIFVTRVJTIFRBQkxFICoqKioqKioqKi8vXG4gIC8vIEdyYWIgYWxsIHVzZXIgZGF0YVxuICBzb01hbnlGcmllbmQoKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3VzZXJzXCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIC8vIFdPUktTXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICB9KVxuICB9LFxuICAvLyoqKioqIFRFU1QgKioqKiovXG4gIC8vIEFERCBVU0VSXG4gIHlheU5ld1BhbChuZXdVc2VyKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3VzZXJzXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3VXNlcilcbiAgICB9KVxuICB9LFxufVxuLy8gKioqIEVYUE9SVCB0byByZWdpc3RyYXRpb24uanMgKGV2ZW50dWFsbHkgZm9ybXMuanMpICoqKlxuZXhwb3J0IGRlZmF1bHQgZGF0YUNvbGxlY3Rpb25cblxuXG5cblxuICAvLyoqKioqIFRFU1QgKioqKiovXG4gIC8vIERFTEVURSBVU0VSXG4gIC8vIGR1ZGVHb0F3YXkoaWQpIHtcbiAgLy8gICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2lkfWAsIHtcbiAgLy8gICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgLy8gICAgIGhlYWRlcnM6IHtcbiAgLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuICAvLyB9LFxuICAvLyoqKioqIFRFU1QgKioqKiovXG4gIC8vIEVESVQgVVNFUiAtIDIgU1RBR0VTXG5cbiAgLy9TVEFHRSAxIC0gR2V0IHRoZSBpZCBvZiB0aGUgaXRlbS5cbiAgLy8gc2Vla3NVc2VySWQoaWQpIHtcbiAgLy8gICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC91c2Vycy8ke2lkfWApXG4gIC8vICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAvLyB9LFxuICAvLyAvL1NUQUdFIDIgLSBEbyBzb21lIHN0dWZmIHRvIHRoZSBpdGVtLlxuICAvLyB0aGluZ3NDaGFuZ2UoKSB7XG4gIC8vICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvdXNlcnMvJHtpZH1gLCB7XG4gIC8vICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gIC8vICAgICBoZWFkZXJzOiB7XG4gIC8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gIC8vICAgICB9LFxuICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3VXNlcilcbiAgLy8gICB9KVxuICAvLyB9LCIsImltcG9ydCBkYXRhQ29sbGVjdGlvbiBmcm9tIFwiLi9kYXRhQ29sbGVjdGlvblwiXG5pbXBvcnQgcmVnaXN0cmF0aW9uRm9ybSBmcm9tIFwiLi9yZWdpc3RyYXRpb25cIlxuLy9pbXBvcnQgZXZlbnRMaXN0ZW5lciBmcm9tIFwiLi9ldmVudExpc3RlbmVyXCJcbnJlZ2lzdHJhdGlvbkZvcm0uY3JlYXRlQW5kQXBwZW5kRm9ybSgpO1xuXG5cblxubGV0IG5ld0FjY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cIm5ld0FjY3RCdXR0b25cIl0nKVxuXG5uZXdBY2N0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgbGV0IHVzZXJuYW1lSW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZUlucHV0RW1haWwxXCIpO1xuICBsZXQgdXNlcm5hbWVJbnB1dFZhbHVlID0gdXNlcm5hbWVJbnB1dEZpZWxkLnZhbHVlO1xuICBjb25zb2xlLmxvZyhcInVzZXJOYW1lSW5wdXRWYWx1ZSA6XCIpO1xufSk7XG5kYXRhQ29sbGVjdGlvbi55YXlOZXdQYWwobmV3VXNlcilcbi8vV29ya3Ncbi8vY29uc29sZS5sb2cobmV3QWNjdEJ1dHRvbi5jbGFzc05hbWUpO1xuY29uc3QgaGFuZGxlTmV3VXNlciA9ICgpID0+IHtcbiAgbGV0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJlbWFpbFwiXScpLnZhbHVlXG4gIGxldCBwYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwicGFzc3dvcmRcIl0nKS52YWx1ZVxuICBsZXQgbmV3VXNlciA9IHtcbiAgICBlbWFpbDogZW1haWwsXG4gICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gIH1cbiAgY29uc29sZS5sb2coXCJlbWFpbDpcIilcblxuXG4vLyBkYXRhQ29sbGVjdGlvbi55YXlOZXdQYWwobmV3VXNlcilcbi8vICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuLy8gICAgIHVzZXJMaXN0LmRhdGFDb2xsZWN0aW9uKClcbi8vICAgfSlcbn1cblxuXG5cbi8vICBuZXdBY2N0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVOZXdVc2VyKVxuICAgIC8vIGxldCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1zdWJtaXRCdXR0b25dJylcbiAgICAvLyBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlZ2lzdHJhdGlvbkZvcm0uaGFuZGxlQWRkTmV3VXNlcigpKVxuICAgIC8vIGxldCByZWdGb3JtID0gcmVnaXN0cmF0aW9uRm9ybS5oYW5kbGVBZGROZXdVc2VyKClcbiAgICAvLyBjb25zb2xlLmxvZyhyZWdGb3JtKVxuICBcblxuLy9jb25zb2xlLmxvZyhkYXRhQ29sbGVjdGlvbi5zb01hbnlGcmllbmQoKSk7XG4vL2NvbnNvbGUubG9nKHJlZ2lzdHJhdGlvbkZvcm0uaGFuZGxlQWRkTmV3VXNlcigpKTtcbi8vY29uc29sZS5sb2coZXZlbnRMaXN0ZW5lci5jb25zb2xlQnV0dG9uKCkpOyIsIlxuLy9pbXBvcnQgZGF0YUNvbGxlY3Rpb24gZnJvbSBcIi4vZGF0YUNvbGxlY3Rpb25cIlxuXG5jb25zdCByZWdpc3RyYXRpb25Gb3JtID0ge1xuICBjcmVhdGVBbmRBcHBlbmRGb3JtICgpIHtcbiAgICBsZXQgcmVnaXN0cmF0aW9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWdGb3JtXCIpXG4gICAgcmVnaXN0cmF0aW9uRGl2LmlubmVySFRNTCA9IGBcbiAgICAgIDxmb3JtPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImV4YW1wbGVJbnB1dEVtYWlsMVwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVJbnB1dEVtYWlsMVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBmb3JtLWNoZWNrXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gbmFtZT1cIm5ld0FjY3RCdXR0b25cIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5OZXcgQWNjb3VudDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBuYW1lPVwibG9naW5CdXR0b25cIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgPC9mb3JtPmBcbiAgfSxcbiAgaGFuZGxlQWRkTmV3VXNlciAoZXZlbnQpIHtcbiAgICBsZXQgaW5wdXRVc2VyRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V4YW1wbGVJbnB1dEVtYWlsMVwiKS52YWx1ZVxuICAgIGxldCBpbnB1dFVzZXJQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXhhbXBsZUlucHV0UGFzc3dvcmQxXCIpLnZhbHVlXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdHJhdGlvbkZvcm0iXX0=
