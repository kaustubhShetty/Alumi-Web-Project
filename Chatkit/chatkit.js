// Chatkit Client 

import { ChatManager, TokenProvider } from "@pusher/chatkit-client";

// Instantiate Chatkit
const chatManager = new ChatManager({
    instanceLocator: '#', // Get This form dashboard
    userId: 'sarah',
    tokenProvider: new TokenProvider({ url: 'your.auth.url' })
  })

// Create a Token Provider
const tokenProvider = new TokenProvider({
    url: 'your.auth.url',
    queryParams: {
      someKey: someValue,
      ...
    },
    headers: {
      SomeHeader: 'some-value',
      ...
    }
  })

  chatManager.connect({
    onAddedToRoom: room => {
      console.log(`Added to room ${room.name}`)
    }
  })
  .then(currentUser => {
    console.log('Successful connection', currentUser)
  })
  .catch(err => {
    console.log('Error on connection', err)
  })


  // Create a Room
  currentUser.createRoom({
    id: '#general',
    name: 'General',
    private: true,
    addUserIds: ['craig', 'kate'], // USer names to be updated
    customData: { foo: 42 },
  }).then(room => {
    console.log(`Created room called ${room.name}`)
  })
  .catch(err => {
    console.log(`Error creating room ${err}`)
  })

  // Fetching Old Messages In The Room
  currentUser.fetchMultipartMessages({
    roomId: someRoomId,
    initialId: 42, // Update the initial id
    direction: 'older',
    limit: 10,
  })
    .then(messages => {
      // do something with the messages
    })
    .catch(err => {
      console.log(`Error fetching messages: ${err}`)
    })

 // Adding user to the room
 currentUser.addUserToRoom({
    userId: 'keith', // Update the userId and roomId
    roomId: 123
  })
    .then(() => {
      console.log('Added keith to room 123')
    })
    .catch(err => {
      console.log(`Error adding keith to room 123: ${err}`)
    })

// Removing User from the room
    currentUser.removeUserFromRoom({
        userId: 'leah', // Update roomId and userId
        roomId: 123
      })
        .then(() => {
          console.log('Removed leah from room 123')
        })
        .catch(err => {
          console.log(`Error removing leah from room 123: ${err}`)
        })

// Leaving a Room
currentUser.leaveRoom({ roomId: someRoomID })
  .then(room => {
    console.log(`Left room with ID: ${room.id}`)
  })
  .catch(err => {
    console.log(`Error leaving room ${someRoomID}: ${err}`)
  })

  // Delete a Room
  currentUser.deleteRoom({ roomId: someRoomID })
  .then(() => {
    console.log(`Deleted room with ID: ${someRoomID}`)
  })
  .catch(err => {
    console.log(`Error deleted room ${someRoomID}: ${err}`)
  })

  // Sending a simple Message
  currentUser.sendSimpleMessage({
    roomId: myRoom.id,
    text: "Hi there!", // capture message from the site
  })
  .then(messageId => {
    console.log(`Added message to ${myRoom.name}`)
  })
  .catch(err => {
    console.log(`Error adding message to ${myRoom.name}: ${err}`)
  })