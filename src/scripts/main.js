import dataCollection from "./dataCollection";
import taskForm from "./forms";
import taskList from "./dataList";

console.log(dataCollection.soManyFriend());

//this console.log is needed for the import to work
console.log(taskForm)

//remind me why these need to be called again in main.js......
taskList.listify()
taskForm.createAndAppendForm()