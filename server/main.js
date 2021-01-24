import { Meteor } from "meteor/meteor";
import { TasksCollection } from "/imports/db/TasksCollection";
import { Accounts } from "meteor/accounts-base";
import "/imports/api/tasksMethods";
import "/imports/api/tasksPublications";

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

const insertTask = (taskText, user) =>
  TasksCollection.insert({
    text: taskText,
    userId: user._id,
    createdAt: newDate(),
  });

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  const user = Accounts.findUserByUsername(SEED_USERNAME);

  if (TasksCollection.find().count() === 0) {
    [
      "First Task",
      "Second Task",
      "Third Task",
      "Fourth Task",
      "Fifth Task",
      "Sixth Task",
      "Seventh Task",
    ].forEach((taskText) => insertTask(taskText, user));
  }
});

// RestRouter.get(
//   "/__coverage__",
//   Meteor.bindEnvironment((req, res) => {
//     const result = { coverage: global.__coverage__ };
//     res.send(result);
//   })
// );
