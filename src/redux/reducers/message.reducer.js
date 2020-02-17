import { types } from '../actions/message.actions';

const initialState = {
  messages: [],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE: {
      const { newMessage } = action;
      let newMessages = [...state.messages];
      newMessages.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
      newMessages = [newMessage, ...newMessages];
      return {
        ...state,
        messages: [...newMessages],
      };
    }
    default:
      return state;
  }
};

export default messageReducer;
