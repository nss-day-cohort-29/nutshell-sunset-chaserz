(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _module = _interopRequireDefault(require("./module1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_module.default.getAllUsers());

},{"./module1":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Zac
//Grab some data
const dataCollection = {
  //********* USERS TABLE *********//
  // Grab all user data
  soManyFriend() {
    return fetch("http://localhost:8088/users").then(response => response.json()).then(response => {// WORKS
      //console.log(response)
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
  },

  //***** TEST *****/
  // DELETE USER
  dudeGoAway(id) {
    return fetch(`http://localhost:8088/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  },

  //***** TEST *****/
  // EDIT USER - 2 STAGES
  //STAGE 1 - Get the id of the item.
  seeksUserId(id) {
    return fetch(`http://localhost:8088/users/${id}`).then(response => response.json());
  },

  //STAGE 2 - Do some stuff to the item.
  thingsChange() {
    return fetch(`http://localhost:8088/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    });
  }

};
var _default = dataCollection;
exports.default = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL21vZHVsZTEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBRUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxnQkFBZSxXQUFmLEVBQVo7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQSxNQUFNLGNBQWMsR0FBRztBQUNyQjtBQUNBO0FBQ0EsRUFBQSxZQUFZLEdBQUc7QUFDYixXQUFPLEtBQUssQ0FBQyw2QkFBRCxDQUFMLENBQ04sSUFETSxDQUNELFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQURYLEVBRU4sSUFGTSxDQUVELFFBQVEsSUFBSSxDQUNoQjtBQUNBO0FBQ0QsS0FMTSxDQUFQO0FBTUQsR0FWb0I7O0FBV3JCO0FBQ0E7QUFDQSxFQUFBLFNBQVMsQ0FBQyxPQUFELEVBQVU7QUFDakIsV0FBTyxLQUFLLENBQUMsNkJBQUQsRUFBZ0M7QUFDMUMsTUFBQSxNQUFNLEVBQUUsTUFEa0M7QUFFMUMsTUFBQSxPQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUZpQztBQUsxQyxNQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLE9BQWY7QUFMb0MsS0FBaEMsQ0FBWjtBQU9ELEdBckJvQjs7QUFzQnJCO0FBQ0E7QUFDQSxFQUFBLFVBQVUsQ0FBQyxFQUFELEVBQUs7QUFDYixXQUFPLEtBQUssQ0FBRSx5QkFBd0IsRUFBRyxFQUE3QixFQUFnQztBQUMxQyxNQUFBLE1BQU0sRUFBRSxRQURrQztBQUUxQyxNQUFBLE9BQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURUO0FBRmlDLEtBQWhDLENBQVo7QUFNRCxHQS9Cb0I7O0FBZ0NyQjtBQUNBO0FBRUE7QUFDQSxFQUFBLFdBQVcsQ0FBQyxFQUFELEVBQUs7QUFDZCxXQUFPLEtBQUssQ0FBRSwrQkFBOEIsRUFBRyxFQUFuQyxDQUFMLENBQ04sSUFETSxDQUNELFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBVCxFQURYLENBQVA7QUFFRCxHQXZDb0I7O0FBd0NyQjtBQUNBLEVBQUEsWUFBWSxHQUFHO0FBQ2IsV0FBTyxLQUFLLENBQUUsK0JBQThCLEVBQUcsRUFBbkMsRUFBc0M7QUFDaEQsTUFBQSxNQUFNLEVBQUUsS0FEd0M7QUFFaEQsTUFBQSxPQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUZ1QztBQUtoRCxNQUFBLElBQUksRUFBRSxJQUFJLENBQUMsU0FBTCxDQUFlLE9BQWY7QUFMMEMsS0FBdEMsQ0FBWjtBQU9EOztBQWpEb0IsQ0FBdkI7ZUFvRGUsYyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBkYXRhQ29sbGVjdGlvbiBmcm9tIFwiLi9tb2R1bGUxXCJcblxuY29uc29sZS5sb2coZGF0YUNvbGxlY3Rpb24uZ2V0QWxsVXNlcnMoKSkiLCIvLyBaYWNcbi8vR3JhYiBzb21lIGRhdGFcbmNvbnN0IGRhdGFDb2xsZWN0aW9uID0ge1xuICAvLyoqKioqKioqKiBVU0VSUyBUQUJMRSAqKioqKioqKiovL1xuICAvLyBHcmFiIGFsbCB1c2VyIGRhdGFcbiAgc29NYW55RnJpZW5kKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC91c2Vyc1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAvLyBXT1JLU1xuICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICB9KVxuICB9LFxuICAvLyoqKioqIFRFU1QgKioqKiovXG4gIC8vIEFERCBVU0VSXG4gIHlheU5ld1BhbChuZXdVc2VyKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3VzZXJzXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3VXNlcilcbiAgICB9KVxuICB9LFxuICAvLyoqKioqIFRFU1QgKioqKiovXG4gIC8vIERFTEVURSBVU0VSXG4gIGR1ZGVHb0F3YXkoaWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuICAvLyoqKioqIFRFU1QgKioqKiovXG4gIC8vIEVESVQgVVNFUiAtIDIgU1RBR0VTXG5cbiAgLy9TVEFHRSAxIC0gR2V0IHRoZSBpZCBvZiB0aGUgaXRlbS5cbiAgc2Vla3NVc2VySWQoaWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC91c2Vycy8ke2lkfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICB9LFxuICAvL1NUQUdFIDIgLSBEbyBzb21lIHN0dWZmIHRvIHRoZSBpdGVtLlxuICB0aGluZ3NDaGFuZ2UoKSB7XG4gICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvdXNlcnMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3VXNlcilcbiAgICB9KVxuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBkYXRhQ29sbGVjdGlvbiJdfQ==
