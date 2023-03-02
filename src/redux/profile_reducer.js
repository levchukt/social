import { profileAPI } from "../api/api";

let actionsTypes = {
  addPost: 'ADD-POST',
  setProfile: 'SET_PROFILE',
  setStatus: 'SET_STATUS',
  deletePost: 'DELETE_POST'
}

const initialState = {
  posts: [
      { id: 1, text: 'Hello world?', likes: 20 },
      { id: 2, text: 'Working', likes: 10 }
  ],
  profile: null,
  status: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionsTypes.addPost: {
        let newPost = {
          id: 3,
          text: action.text,
          likes: 0
        };

        return {
          ...state,
          posts: [...state.posts, newPost]
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
      case actionsTypes.deletePost: {
        return {
          ...state,
          posts: state.posts.filter(post => post.id !== action.postId)
        };
      }
        default:
            return state;
    }
}

export const addPostActionCreator = (text) => {
  return {
    type: actionsTypes.addPost,
    text
  }
}

export const deletePost = (postId) => {
  return {
    type: actionsTypes.deletePost,
    postId
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
  return async (dispatch) => {
    
    let responce = await profileAPI.setProfile(userId)

    dispatch(setProfile(responce.data));
      
  }
}
export const getStatus = (userId) => {
  return async (dispatch) => {
    
    let responce = await profileAPI.getStatus(userId)

    dispatch(setStatus(responce.data));
  }
}
export const updateStatus = (status) => {
  return async (dispatch) => {
    let responce = await profileAPI.updateStatus(status)
      
    if (responce.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  }
}

export default profileReducer;