//use async await
//create deleteTaskAndCount  as an async function
//accept id of task to remove
// use await to delete task and count up incomplete task
//return the count
// call the function and attach then/ catch to log results
//test your work
require("../src/db/mongoose");
const Task = require("../src/models/task");

const deleteTaskAndCount = async id => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

updateTaskAndCount("5db83e38c9f30743bf399ff7")
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
