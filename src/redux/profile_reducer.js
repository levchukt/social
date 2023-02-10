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
        case actionsTypes.addPost:
            let newPost = {
                id: 3,
                text: state.newMessage,
                likes: 0
            };

            state.posts.push(newPost);
            state.newMessage = '';
            return state;
        case actionsTypes.updateText:
            state.newMessage = action.newText;
            return state;
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