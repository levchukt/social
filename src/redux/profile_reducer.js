let actionsTypes = {
  addPost: 'ADD-POST',
  updateText: 'UPDATE-POST-TEXT',
}

const initialState = {
  posts: [
      { id: 1, text: 'Hello world?', likes: 20 },
      { id: 2, text: 'Working', likes: 10 }
  ],
  newMessage: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionsTypes.addPost: {
        const newState = { ...state };

        let newPost = {
          id: 3,
          text: newState.newMessage,
          likes: 0
        };

        newState.posts.push(newPost);
        newState.newMessage = '';

        return newState;
      }
      case actionsTypes.updateText: {
        const newState = { ...state }

        newState.newMessage = action.newText;
        
        return newState;
      }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
  return {
    type: actionsTypes.addPost
  }
}
export const updatePostTextActionCreator = (text) => {
  return {
    type: actionsTypes.updateText,
    newText: text
  }
}

export default profileReducer;