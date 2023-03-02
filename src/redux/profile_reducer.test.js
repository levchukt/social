import profileReducer from "./profile_reducer";
import { addPostActionCreator, deletePost } from "./profile_reducer";


const state = {
        posts: [
            { id: 1, text: 'Hello world?', likes: 20 },
            { id: 2, text: 'Working', likes: 10 }
        ],
        profile: null,
        status: null
    }

test('adding message', () => {
    let action = addPostActionCreator('new text');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3)
});

test('message of new post should be correct', () => {
    let action = addPostActionCreator('new text');
    
    let newState = profileReducer(state, action);

    expect(newState.posts[2].text).toBe('new text')
});

test('posts count should be decremented', () => {
    let action = deletePost(1);
    
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1)
});

test('posts count shouldn`t be decremented', () => {
    let action = deletePost(10000);
    
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2)
});