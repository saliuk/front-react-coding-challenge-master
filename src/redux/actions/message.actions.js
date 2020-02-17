export const types = Object.freeze({
  ADD_MESSAGE: 'ADD_MESSAGE',
  REMOVE_MESSAGE: 'REMOVE_MESSAGE',
});

export const AddMessageRequest = newMessage => ({
  type: types.ADD_MESSAGE,
  newMessage,
});
