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

};
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
  `;
console.log(taskForm);
var _default = taskForm;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

var _dataCollection = _interopRequireDefault(require("./dataCollection"));

var _forms = _interopRequireDefault(require("./forms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_dataCollection.default.soManyFriend());
console.log(_forms.default); //window.alert('HI');

},{"./dataCollection":1,"./forms":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGFDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9mb3Jtcy5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQSxNQUFNLGNBQWMsR0FBRztBQUNyQjtBQUNBO0FBQ0EsRUFBQSxZQUFZLEdBQUc7QUFDYixXQUFPLEtBQUssQ0FBQyw2QkFBRCxDQUFMLENBQ04sSUFETSxDQUNELFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQURYLEVBRU4sSUFGTSxDQUVELFFBQVEsSUFBSTtBQUNoQjtBQUNBLE1BQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsS0FMTSxDQUFQO0FBTUQsR0FWb0I7O0FBV3JCO0FBQ0E7QUFDQSxFQUFBLFNBQVMsQ0FBQyxPQUFELEVBQVU7QUFDakIsV0FBTyxLQUFLLENBQUMsNkJBQUQsRUFBZ0M7QUFDMUMsTUFBQSxNQUFNLEVBQUUsTUFEa0M7QUFFMUMsTUFBQSxPQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUZpQztBQUsxQyxNQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLE9BQWY7QUFMb0MsS0FBaEMsQ0FBWjtBQU9EOztBQXJCb0IsQ0FBdkI7ZUF3QmUsYyxFQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2REY7QUFDQSxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixlQUF4QixDQUFmO0FBQ0EsUUFBUSxDQUFDLFNBQVQsR0FBc0I7Ozs7Ozs7Ozs7O0dBQXRCO0FBWUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaO2VBQ2UsUTs7Ozs7O0FDZmY7O0FBQ0E7Ozs7QUFFQSxPQUFPLENBQUMsR0FBUixDQUFZLHdCQUFlLFlBQWYsRUFBWjtBQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksY0FBWixFLENBRUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBaYWNcclxuLy8gR3JhYiBzb21lIGRhdGFcclxuY29uc3QgZGF0YUNvbGxlY3Rpb24gPSB7XHJcbiAgLy8qKioqKioqKiogVVNFUlMgVEFCTEUgKioqKioqKioqLy9cclxuICAvLyBHcmFiIGFsbCB1c2VyIGRhdGFcclxuICBzb01hbnlGcmllbmQoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvdXNlcnNcIilcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgLy8gV09SS1NcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgLy8qKioqKiBURVNUICoqKioqL1xyXG4gIC8vIEFERCBVU0VSXHJcbiAgeWF5TmV3UGFsKG5ld1VzZXIpIHtcclxuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC91c2Vyc1wiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdVc2VyKVxyXG4gICAgfSlcclxuICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRhQ29sbGVjdGlvblxyXG5cclxuICAvLyoqKioqIFRFU1QgKioqKiovXHJcbiAgLy8gREVMRVRFIFVTRVJcclxuICAvLyBkdWRlR29Bd2F5KGlkKSB7XHJcbiAgLy8gICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2lkfWAsIHtcclxuICAvLyAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSlcclxuICAvLyB9LFxyXG4gIC8vKioqKiogVEVTVCAqKioqKi9cclxuICAvLyBFRElUIFVTRVIgLSAyIFNUQUdFU1xyXG5cclxuICAvL1NUQUdFIDEgLSBHZXQgdGhlIGlkIG9mIHRoZSBpdGVtLlxyXG4gIC8vIHNlZWtzVXNlcklkKGlkKSB7XHJcbiAgLy8gICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC91c2Vycy8ke2lkfWApXHJcbiAgLy8gICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLy8gfSxcclxuICAvLyAvL1NUQUdFIDIgLSBEbyBzb21lIHN0dWZmIHRvIHRoZSBpdGVtLlxyXG4gIC8vIHRoaW5nc0NoYW5nZSgpIHtcclxuICAvLyAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4L3VzZXJzLyR7aWR9YCwge1xyXG4gIC8vICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAvLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdVc2VyKVxyXG4gIC8vICAgfSlcclxuICAvLyB9LCIsIi8vVEFTS1MgRk9STVxyXG5sZXQgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tDb250YWluZXJcIik7XHJcbnRhc2tGb3JtLmlubmVySFRNTCA9IGBcclxuICA8Zm9ybT5cclxuICAgIDxoNT5UYXNrczwvaDU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiZm9ybUdyb3VwTmFtZUlucHV0XCIgcGxhY2Vob2xkZXI9XCJUYXNrIE5hbWVcIj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImZvcm1Hcm91cERhdGVJbnB1dFwiIHBsYWNlaG9sZGVyPVwiRHVlIERhdGVcIj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJ0YXNrQnRuXCI+QWRkIFRhc2s8L2J1dHRvbj5cclxuICA8L2Zvcm0+XHJcbiAgYFxyXG5jb25zb2xlLmxvZyh0YXNrRm9ybSk7XHJcbmV4cG9ydCBkZWZhdWx0IHRhc2tGb3JtXHJcblxyXG4iLCJpbXBvcnQgZGF0YUNvbGxlY3Rpb24gZnJvbSBcIi4vZGF0YUNvbGxlY3Rpb25cIjtcclxuaW1wb3J0IHRhc2tGb3JtIGZyb20gXCIuL2Zvcm1zXCI7XHJcblxyXG5jb25zb2xlLmxvZyhkYXRhQ29sbGVjdGlvbi5zb01hbnlGcmllbmQoKSk7XHJcbmNvbnNvbGUubG9nKHRhc2tGb3JtKVxyXG5cclxuLy93aW5kb3cuYWxlcnQoJ0hJJyk7Il19
