// Chatkit server

import Chatkit from "@pusher/chatkit-server";

const chatkit = new Chatkit.default({
  instanceLocator: YOUR_INSTANCE_LOCATOR,
  key: YOUR_KEY
});

// Creating a User
chatkit
  .createUser({
    id: "userId",
    name: "Some Name"
  })
  .then(() => {
    console.log("User created successfully");
  })
  .catch(err => {
    console.log(err);
  });

/* Creating Multiple Users

const usersToCreate = [
  {
    id: 'user1',
    name: 'User 1',
  },
  {
    id: 'user2',
    name: 'User 2',
  }
];

chatkit.createUsers({ users: usersToCreate })
  .then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });

  */

// Delete a User
chatkit
  .asyncDeleteUser({ userId: "someId" })
  .then(() => {
    console.log("User deleted successfully");
  })
  .catch(err => {
    console.error(err);
  });

// Create a Room
chatkit
  .createRoom({
    id: "my-room",
    creatorId: "userId",
    name: "my room",
    customData: { foo: 42 }
  })
  .then(() => {
    console.log("Room created successfully");
  })
  .catch(err => {
    console.log(err);
  });

// Adding Users to the Room
chatkit
  .addUsersToRoom({
    roomId: room.id,
    userIds: ["alice", "bob"]
  })
  .then(() => console.log("added"))
  .catch(err => console.error(err));

// Remove Users From The Room
chatkit
  .removeUsersFromRoom({
    roomId: room.id,
    userIds: ["alice", "bob"]
  })
  .then(() => console.log("removed"))
  .catch(err => console.error(err));

// Delete a Room
chatkit
  .asyncDeleteRoom({
    roomId: roomToDelete.id
  })
  .then(() => console.log("gone forever"))
  .catch(err => console.error(err));
