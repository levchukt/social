import { profileAPI } from "../api/api";

let actionsTypes = {
  addPost: 'ADD-POST',
  updateText: 'UPDATE-POST-TEXT',
  setProfile: 'SET_PROFILE',
  setStatus: 'SET_STATUS'
}

const initialState = {
  posts: [
      { id: 1, text: 'Hello world?', likes: 20 },
      { id: 2, text: 'Working', likes: 10 }
  ],
  newMessage: '',
  profile: null,
  status: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionsTypes.addPost: {
        let newPost = {
          id: 3,
          text: state.newMessage,
          likes: 0
        };

        return {
          ...state,
          posts: [...state.posts, newPost],
          newMessage: ''
        };
      }
      case actionsTypes.updateText: {
        return {
          ...state,
          newMessage: action.newText
        };
      }
      case actionsTypes.setProfile: {
        return {
          ...state,
          profile: action.profile
        };
      }
      case actionsTypes.setStatus: {
        return {
          ...state,
          status: action.status
        };
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
export const setStatus = (status) => {
  return {
    type: actionsTypes.setStatus,
    status
  }
}

export const setProfile = (profile) => {
  return {
    type: actionsTypes.setProfile,
    profile
  }
}

export const getProfile = (userId) => {
  return (dispatch) => {
    
    profileAPI.setProfile(userId)
      .then(responce => {
        dispatch(setProfile(responce.data));
      })
  }
}
export const getStatus = (userId) => {
  return (dispatch) => {
    
    profileAPI.getStatus(userId)
      .then(responce => {
        dispatch(setStatus(responce.data));
      })
  }
}
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then(responce => {
        if (responce.data.resultCode === 0) {
          dispatch(setStatus(status));
        }
        
      })
  }
}

export default profileReducer;