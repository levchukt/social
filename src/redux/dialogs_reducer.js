let actionsTypes = {
  addMessage: 'ADD-MESSAGE',
  updateMessage: 'UPDATE-MESSAGE'
}

const initialState = {
  messages: [
      { id: 1, text: 'Hello' },
      { id: 2, text: 'How are you' },
      { id: 3, text: '?' },
  ],
  chats: [
    { id: 1, name: 'Taras' },
    { id: 2, name: 'Nazar' },
    { id: 3, name: 'Kolya' },
    { id: 4, name: 'Sonya' },
    { id: 5, name: 'Nastya' },
    { id: 6, name: 'Sasha' },
  ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionsTypes.addMessage: { 
        let newMessage = {
          id: 4,
          text: action.text
        }
      
        return {
          ...state,
          messages: [...state.messages, newMessage]
        };
      }
        default:
            return state;
    }
}

export const addMessageActionCreator = (text) => {
  return {
    type: actionsTypes.addMessage,
    text
  }
}

export default dialogsReducer;