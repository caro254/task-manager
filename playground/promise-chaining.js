require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5db83e38c9f30743bf399ff7", { age: 19 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 19 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });
const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5db83e38c9f30743bf399ff7", 42).then(count => {
  console.log(count);
});
