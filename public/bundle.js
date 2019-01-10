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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGFDb2xsZWN0aW9uLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBLE1BQU0sY0FBYyxHQUFHO0FBQ3JCO0FBQ0E7QUFDQSxFQUFBLFlBQVksR0FBRztBQUNiLFdBQU8sS0FBSyxDQUFDLDZCQUFELENBQUwsQ0FDTixJQURNLENBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFgsRUFFTixJQUZNLENBRUQsUUFBUSxJQUFJO0FBQ2hCO0FBQ0EsTUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFFBQVo7QUFDRCxLQUxNLENBQVA7QUFNRCxHQVZvQjs7QUFXckI7QUFDQTtBQUNBLEVBQUEsU0FBUyxDQUFDLE9BQUQsRUFBVTtBQUNqQixXQUFPLEtBQUssQ0FBQyw2QkFBRCxFQUFnQztBQUMxQyxNQUFBLE1BQU0sRUFBRSxNQURrQztBQUUxQyxNQUFBLE9BQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURULE9BRmlDO0FBSzFDLE1BQUEsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFMLENBQWUsT0FBZjtBQUxvQyxLQUFoQyxDQUFaO0FBT0Q7O0FBckJvQixDQUF2QjtlQXdCZSxjLEVBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdkRGOzs7O0FBRUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSx3QkFBZSxZQUFmLEVBQVo7QUFFQSxNQUFNLENBQUMsS0FBUCxDQUFhLElBQWIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBaYWNcbi8vIEdyYWIgc29tZSBkYXRhXG5jb25zdCBkYXRhQ29sbGVjdGlvbiA9IHtcbiAgLy8qKioqKioqKiogVVNFUlMgVEFCTEUgKioqKioqKioqLy9cbiAgLy8gR3JhYiBhbGwgdXNlciBkYXRhXG4gIHNvTWFueUZyaWVuZCgpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvdXNlcnNcIilcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgLy8gV09SS1NcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgIH0pXG4gIH0sXG4gIC8vKioqKiogVEVTVCAqKioqKi9cbiAgLy8gQUREIFVTRVJcbiAgeWF5TmV3UGFsKG5ld1VzZXIpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvdXNlcnNcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdVc2VyKVxuICAgIH0pXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFDb2xsZWN0aW9uXG5cbiAgLy8qKioqKiBURVNUICoqKioqL1xuICAvLyBERUxFVEUgVVNFUlxuICAvLyBkdWRlR29Bd2F5KGlkKSB7XG4gIC8vICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvJHtpZH1gLCB7XG4gIC8vICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gIC8vICAgICBoZWFkZXJzOiB7XG4gIC8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gIC8vICAgICB9XG4gIC8vICAgfSlcbiAgLy8gfSxcbiAgLy8qKioqKiBURVNUICoqKioqL1xuICAvLyBFRElUIFVTRVIgLSAyIFNUQUdFU1xuXG4gIC8vU1RBR0UgMSAtIEdldCB0aGUgaWQgb2YgdGhlIGl0ZW0uXG4gIC8vIHNlZWtzVXNlcklkKGlkKSB7XG4gIC8vICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvdXNlcnMvJHtpZH1gKVxuICAvLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLy8gfSxcbiAgLy8gLy9TVEFHRSAyIC0gRG8gc29tZSBzdHVmZiB0byB0aGUgaXRlbS5cbiAgLy8gdGhpbmdzQ2hhbmdlKCkge1xuICAvLyAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4L3VzZXJzLyR7aWR9YCwge1xuICAvLyAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAvLyAgICAgaGVhZGVyczoge1xuICAvLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAvLyAgICAgfSxcbiAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1VzZXIpXG4gIC8vICAgfSlcbiAgLy8gfSwiLCJpbXBvcnQgZGF0YUNvbGxlY3Rpb24gZnJvbSBcIi4vZGF0YUNvbGxlY3Rpb25cIlxuXG5jb25zb2xlLmxvZyhkYXRhQ29sbGVjdGlvbi5zb01hbnlGcmllbmQoKSk7XG5cbndpbmRvdy5hbGVydCgnSEknKSJdfQ==
