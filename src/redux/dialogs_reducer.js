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
  newMessage: '',
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
        case actionsTypes.addMessage:
            let newMessage = {
                id: 4,
                text: state.newMessage
            }

            if (state.newMessage === '') {
                alert('Please write your mesage')
            } else {
                state.messages.push(newMessage);
                state.newMessage = '';
            }
      
            return state;
        case actionsTypes.updateMessage:
            state.newMessage = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
  return {
    type: actionsTypes.addMessage
  }
}
export const updateMessageTextActionCreator = (text) => {
  return {
    type: actionsTypes.updateMessage,
    newText: text
  }
}

export default dialogsReducer;