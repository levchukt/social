import React from 'react';
import { Post } from './Post/Post';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile_reducer';
import { MyPosts } from './MyPosts';

export const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let postMessage = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let changeText = (text) => {
        let action = updatePostTextActionCreator(text);
        props.store.dispatch(action);
    }

    let posts = state.profilePage.posts.map((post) => <Post id={post.id} text={post.text} likesCount={post.likes} />);

    return (
        <MyPosts changeText={changeText} postMessage={postMessage} posts={posts} newMessage={state.profilePage.newMessage} />
    )
}