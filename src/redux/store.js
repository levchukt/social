import dialogsReducer from "./dialogs_reducer";
import navbarReducer from "./navbar_reducer";
import profileReducer from "./profile_reducer";

let store = {
  _state: {
    profilePage: {
        posts: [
            { id: 1, text: 'Hello world?', likes: 20 },
            { id: 2, text: 'Working', likes: 10 }
        ],
      newMessage: '',
    },
    dialogsPage: {
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
    },
    navbar: {
      sections: ['profile', 'messages', 'news', 'music', 'settings']
    }
  },

  _callSub() {
    console.log('state has been changed');
  },

  subscribe(observer) {
    this._callSub = observer
  },

  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    navbarReducer(this._state.navbar, action);

    this._callSub(this._state);
  }
  
}








export default store; 
