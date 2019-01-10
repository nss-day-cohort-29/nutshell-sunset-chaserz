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

var _dataCollection = _interopRequireDefault(require("./dataCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_dataCollection.default.soManyFriend());
window.alert('HI');

},{"./dataCollection":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGFDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBLE1BQU0sY0FBYyxHQUFHO0FBQ3JCO0FBQ0E7QUFDQSxFQUFBLFlBQVksR0FBRztBQUNiLFdBQU8sS0FBSyxDQUFDLDZCQUFELENBQUwsQ0FDTixJQURNLENBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFgsRUFFTixJQUZNLENBRUQsUUFBUSxJQUFJO0FBQ2hCO0FBQ0EsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVo7QUFDRCxLQUxNLENBQVA7QUFNRCxHQVZvQjs7QUFXckI7QUFDQTtBQUNBLEVBQUEsU0FBUyxDQUFDLE9BQUQsRUFBVTtBQUNqQixXQUFPLEtBQUssQ0FBQyw2QkFBRCxFQUFnQztBQUMxQyxNQUFBLE1BQU0sRUFBRSxNQURrQztBQUUxQyxNQUFBLE9BQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURULE9BRmlDO0FBSzFDLE1BQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsT0FBZjtBQUxvQyxLQUFoQyxDQUFaO0FBT0Q7O0FBckJvQixDQUF2QjtlQXdCZSxjLEVBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdkRGOzs7O0FBRUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSx3QkFBZSxZQUFmLEVBQVo7QUFFQSxNQUFNLENBQUMsS0FBUCxDQUFhLElBQWIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBaYWNcclxuLy8gR3JhYiBzb21lIGRhdGFcclxuY29uc3QgZGF0YUNvbGxlY3Rpb24gPSB7XHJcbiAgLy8qKioqKioqKiogVVNFUlMgVEFCTEUgKioqKioqKioqLy9cclxuICAvLyBHcmFiIGFsbCB1c2VyIGRhdGFcclxuICBzb01hbnlGcmllbmQoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvdXNlcnNcIilcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgLy8gV09SS1NcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgLy8qKioqKiBURVNUICoqKioqL1xyXG4gIC8vIEFERCBVU0VSXHJcbiAgeWF5TmV3UGFsKG5ld1VzZXIpIHtcclxuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC91c2Vyc1wiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdVc2VyKVxyXG4gICAgfSlcclxuICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXRhQ29sbGVjdGlvblxyXG5cclxuICAvLyoqKioqIFRFU1QgKioqKiovXHJcbiAgLy8gREVMRVRFIFVTRVJcclxuICAvLyBkdWRlR29Bd2F5KGlkKSB7XHJcbiAgLy8gICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2lkfWAsIHtcclxuICAvLyAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSlcclxuICAvLyB9LFxyXG4gIC8vKioqKiogVEVTVCAqKioqKi9cclxuICAvLyBFRElUIFVTRVIgLSAyIFNUQUdFU1xyXG5cclxuICAvL1NUQUdFIDEgLSBHZXQgdGhlIGlkIG9mIHRoZSBpdGVtLlxyXG4gIC8vIHNlZWtzVXNlcklkKGlkKSB7XHJcbiAgLy8gICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC91c2Vycy8ke2lkfWApXHJcbiAgLy8gICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgLy8gfSxcclxuICAvLyAvL1NUQUdFIDIgLSBEbyBzb21lIHN0dWZmIHRvIHRoZSBpdGVtLlxyXG4gIC8vIHRoaW5nc0NoYW5nZSgpIHtcclxuICAvLyAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4L3VzZXJzLyR7aWR9YCwge1xyXG4gIC8vICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAvLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdVc2VyKVxyXG4gIC8vICAgfSlcclxuICAvLyB9LCIsImltcG9ydCBkYXRhQ29sbGVjdGlvbiBmcm9tIFwiLi9kYXRhQ29sbGVjdGlvblwiXHJcblxyXG5jb25zb2xlLmxvZyhkYXRhQ29sbGVjdGlvbi5zb01hbnlGcmllbmQoKSk7XHJcblxyXG53aW5kb3cuYWxlcnQoJ0hJJykiXX0=
