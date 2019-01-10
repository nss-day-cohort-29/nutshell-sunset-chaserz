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
let usernameInputField = document.getElementById("exampleInputEmail1");
newAcctButton.addEventListener("click", function () {
  console.log("Clicked!!!");
}); //Works
//console.log(newAcctButton.className);

const handleNewUser = () => {
  let email = document.querySelector('[name="email"]').value;
  let password = document.querySelector('[name="password"]').value;
  let newUser = {
    email: email,
    password: password
  };
  console.log("email:"); // newAcctButton.addEventListener("click", handleNewUser()),
  // dataCollection.yayNewPal(newUser)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGFDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIiwiLi4vc2NyaXB0cy9yZWdpc3RyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0EsTUFBTSxjQUFjLEdBQUc7QUFDckI7QUFDQTtBQUNBLEVBQUEsWUFBWSxHQUFHO0FBQ2IsV0FBTyxLQUFLLENBQUMsNkJBQUQsQ0FBTCxDQUNOLElBRE0sQ0FDRCxRQUFRLElBQUksUUFBUSxDQUFDLElBQVQsRUFEWCxFQUVOLElBRk0sQ0FFRCxRQUFRLElBQUk7QUFDaEI7QUFDQSxNQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWjtBQUNELEtBTE0sQ0FBUDtBQU1ELEdBVm9COztBQVdyQjtBQUNBO0FBQ0EsRUFBQSxTQUFTLENBQUMsT0FBRCxFQUFVO0FBQ2pCLFdBQU8sS0FBSyxDQUFDLDZCQUFELEVBQWdDO0FBQzFDLE1BQUEsTUFBTSxFQUFFLE1BRGtDO0FBRTFDLE1BQUEsT0FBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQsT0FGaUM7QUFLMUMsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxPQUFmO0FBTG9DLEtBQWhDLENBQVo7QUFPRDs7QUFyQm9CLENBQXZCLEMsQ0F1QkE7O2VBQ2UsYyxFQUtiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFERjs7QUFDQTs7OztBQUNBO0FBQ0Esc0JBQWlCLG1CQUFqQjs7QUFJQSxJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1Qix3QkFBdkIsQ0FBcEI7QUFDQSxJQUFJLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLG9CQUF4QixDQUF6QjtBQUNBLGFBQWEsQ0FBQyxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxZQUFXO0FBQUMsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFlBQVo7QUFBMkIsQ0FBL0UsRSxDQUNBO0FBQ0E7O0FBQ0EsTUFBTSxhQUFhLEdBQUcsTUFBTTtBQUMxQixNQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUMsS0FBckQ7QUFDQSxNQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixtQkFBdkIsRUFBNEMsS0FBM0Q7QUFDQSxNQUFJLE9BQU8sR0FBRztBQUNaLElBQUEsS0FBSyxFQUFFLEtBREs7QUFFWixJQUFBLFFBQVEsRUFBRTtBQUZFLEdBQWQ7QUFJQSxFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWixFQVAwQixDQVEzQjtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0MsQ0FkRCxDLENBa0JBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFHSjtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTtBQUVBLE1BQU0sZ0JBQWdCLEdBQUc7QUFDdkIsRUFBQSxtQkFBbUIsR0FBSTtBQUNyQixRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixTQUF4QixDQUF0QjtBQUNBLElBQUEsZUFBZSxDQUFDLFNBQWhCLEdBQTZCOzs7Ozs7Ozs7Ozs7OztjQUE3QjtBQWVELEdBbEJzQjs7QUFtQnZCLEVBQUEsZ0JBQWdCLENBQUUsS0FBRixFQUFTO0FBQ3ZCLFFBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLHFCQUF2QixFQUE4QyxLQUFuRTtBQUNBLFFBQUksaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsd0JBQXZCLEVBQWlELEtBQXpFO0FBQ0Q7O0FBdEJzQixDQUF6QjtlQXdCZSxnQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIFphY1xuLy8gR3JhYiBzb21lIGRhdGFcbmNvbnN0IGRhdGFDb2xsZWN0aW9uID0ge1xuICAvLyoqKioqKioqKiBVU0VSUyBUQUJMRSAqKioqKioqKiovL1xuICAvLyBHcmFiIGFsbCB1c2VyIGRhdGFcbiAgc29NYW55RnJpZW5kKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC91c2Vyc1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAvLyBXT1JLU1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgfSlcbiAgfSxcbiAgLy8qKioqKiBURVNUICoqKioqL1xuICAvLyBBREQgVVNFUlxuICB5YXlOZXdQYWwobmV3VXNlcikge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC91c2Vyc1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1VzZXIpXG4gICAgfSlcbiAgfSxcbn1cbi8vICoqKiBFWFBPUlQgdG8gcmVnaXN0cmF0aW9uLmpzIChldmVudHVhbGx5IGZvcm1zLmpzKSAqKipcbmV4cG9ydCBkZWZhdWx0IGRhdGFDb2xsZWN0aW9uXG5cblxuXG5cbiAgLy8qKioqKiBURVNUICoqKioqL1xuICAvLyBERUxFVEUgVVNFUlxuICAvLyBkdWRlR29Bd2F5KGlkKSB7XG4gIC8vICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtpZH1gLCB7XG4gIC8vICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gIC8vICAgICBoZWFkZXJzOiB7XG4gIC8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gIC8vICAgICB9XG4gIC8vICAgfSlcbiAgLy8gfSxcbiAgLy8qKioqKiBURVNUICoqKioqL1xuICAvLyBFRElUIFVTRVIgLSAyIFNUQUdFU1xuXG4gIC8vU1RBR0UgMSAtIEdldCB0aGUgaWQgb2YgdGhlIGl0ZW0uXG4gIC8vIHNlZWtzVXNlcklkKGlkKSB7XG4gIC8vICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvdXNlcnMvJHtpZH1gKVxuICAvLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLy8gfSxcbiAgLy8gLy9TVEFHRSAyIC0gRG8gc29tZSBzdHVmZiB0byB0aGUgaXRlbS5cbiAgLy8gdGhpbmdzQ2hhbmdlKCkge1xuICAvLyAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4L3VzZXJzLyR7aWR9YCwge1xuICAvLyAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAvLyAgICAgaGVhZGVyczoge1xuICAvLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAvLyAgICAgfSxcbiAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1VzZXIpXG4gIC8vICAgfSlcbiAgLy8gfSwiLCJpbXBvcnQgZGF0YUNvbGxlY3Rpb24gZnJvbSBcIi4vZGF0YUNvbGxlY3Rpb25cIlxuaW1wb3J0IHJlZ2lzdHJhdGlvbkZvcm0gZnJvbSBcIi4vcmVnaXN0cmF0aW9uXCJcbi8vaW1wb3J0IGV2ZW50TGlzdGVuZXIgZnJvbSBcIi4vZXZlbnRMaXN0ZW5lclwiXG5yZWdpc3RyYXRpb25Gb3JtLmNyZWF0ZUFuZEFwcGVuZEZvcm0oKTtcblxuXG5cbmxldCBuZXdBY2N0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9XCJuZXdBY2N0QnV0dG9uXCJdJylcbmxldCB1c2VybmFtZUlucHV0RmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGVJbnB1dEVtYWlsMVwiKVxubmV3QWNjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7Y29uc29sZS5sb2coXCJDbGlja2VkISEhXCIpIH0pXG4vL1dvcmtzXG4vL2NvbnNvbGUubG9nKG5ld0FjY3RCdXR0b24uY2xhc3NOYW1lKTtcbmNvbnN0IGhhbmRsZU5ld1VzZXIgPSAoKSA9PiB7XG4gIGxldCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZW1haWxcIl0nKS52YWx1ZVxuICBsZXQgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInBhc3N3b3JkXCJdJykudmFsdWVcbiAgbGV0IG5ld1VzZXIgPSB7XG4gICAgZW1haWw6IGVtYWlsLFxuICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICB9XG4gIGNvbnNvbGUubG9nKFwiZW1haWw6XCIpXG4gLy8gbmV3QWNjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTmV3VXNlcigpKSxcblxuLy8gZGF0YUNvbGxlY3Rpb24ueWF5TmV3UGFsKG5ld1VzZXIpXG4vLyAgIC50aGVuKHJlc3BvbnNlID0+IHtcbi8vICAgICB1c2VyTGlzdC5kYXRhQ29sbGVjdGlvbigpXG4vLyAgIH0pXG59XG5cblxuXG4vLyAgbmV3QWNjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTmV3VXNlcilcbiAgICAvLyBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9c3VibWl0QnV0dG9uXScpXG4gICAgLy8gc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZWdpc3RyYXRpb25Gb3JtLmhhbmRsZUFkZE5ld1VzZXIoKSlcbiAgICAvLyBsZXQgcmVnRm9ybSA9IHJlZ2lzdHJhdGlvbkZvcm0uaGFuZGxlQWRkTmV3VXNlcigpXG4gICAgLy8gY29uc29sZS5sb2cocmVnRm9ybSlcbiAgXG5cbi8vY29uc29sZS5sb2coZGF0YUNvbGxlY3Rpb24uc29NYW55RnJpZW5kKCkpO1xuLy9jb25zb2xlLmxvZyhyZWdpc3RyYXRpb25Gb3JtLmhhbmRsZUFkZE5ld1VzZXIoKSk7XG4vL2NvbnNvbGUubG9nKGV2ZW50TGlzdGVuZXIuY29uc29sZUJ1dHRvbigpKTsiLCJcbi8vaW1wb3J0IGRhdGFDb2xsZWN0aW9uIGZyb20gXCIuL2RhdGFDb2xsZWN0aW9uXCJcblxuY29uc3QgcmVnaXN0cmF0aW9uRm9ybSA9IHtcbiAgY3JlYXRlQW5kQXBwZW5kRm9ybSAoKSB7XG4gICAgbGV0IHJlZ2lzdHJhdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVnRm9ybVwiKVxuICAgIHJlZ2lzdHJhdGlvbkRpdi5pbm5lckhUTUwgPSBgXG4gICAgICA8Zm9ybT5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJleGFtcGxlSW5wdXRFbWFpbDFcIj5FbWFpbCBhZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBhdXRvY29tcGxldGU9XCJvZmZcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgZm9ybS1jaGVja1wiPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIG5hbWU9XCJuZXdBY2N0QnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+TmV3IEFjY291bnQ8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbmFtZT1cImxvZ2luQnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+TG9naW48L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5gXG4gIH0sXG4gIGhhbmRsZUFkZE5ld1VzZXIgKGV2ZW50KSB7XG4gICAgbGV0IGlucHV0VXNlckVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleGFtcGxlSW5wdXRFbWFpbDFcIikudmFsdWVcbiAgICBsZXQgaW5wdXRVc2VyUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2V4YW1wbGVJbnB1dFBhc3N3b3JkMVwiKS52YWx1ZVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCByZWdpc3RyYXRpb25Gb3JtIl19
