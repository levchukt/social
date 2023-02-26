import React from 'react';
import s from './MyPosts.module.css';
import PostsForm from './PostsForm';

export const MyPosts = (props) => {

    let test = (text) => {
        props.postMessage(text)
    }

    return (
        <div className={s.my_posts}>
            <h1 className={s.title}>My posts</h1>
            <PostsForm onSubmit={test}  />
            <div className={s.posts}>
                {props.posts}
            </div>
        </div>
    )
}