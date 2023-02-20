const FOLLOW = 'FOLLOW_USER';
const UNFOLLOW = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_LOADING = 'TOGGLE_LOADING';
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';

const initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 100,
    currentPage: 1,
    isLoading: false,
    followingProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                    
                    
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                            return {...user, followed: false}
                    } else {
                        return user
                    }
                    
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case TOGGLE_FOLLOWING:
            console.log(state.followingProgress);
            return {
                ...state,
                followingProgress: action.isLoading ?
                    [...state.followingProgress, action.userId]
                    :state.followingProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page: page
    }
}
export const setTotalUsersCount = (count) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: count
    }
}
export const toggleLoading = (isLoading) => {
    return {
        type: TOGGLE_LOADING,
        isLoading: isLoading
    }
}
export const toggleFollowing = (isLoading, userId) => {
    return {
        type: TOGGLE_FOLLOWING,
        isLoading: isLoading,
        userId: userId
    }
}

export default usersReducer;