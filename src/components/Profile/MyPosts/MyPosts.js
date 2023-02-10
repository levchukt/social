import React from 'react';
import s from './MyPosts.module.css';

export const MyPosts = (props) => {
    let onPostMessage = () => {
        props.postMessage();
    }

    let onChangeText = (e) => {
        let text = e.target.value;
        props.changeText(text);
    }

    return (
        <div className={s.my_posts}>
            <h1 className={s.title}>My posts</h1>
            <input className={s.input} onChange={onChangeText} value={props.profilePage.newMessage} type="text" placeholder='Write your message'/>
            <button type="submit" className={s.button} onClick={onPostMessage}>Send</button>
            <div className={s.posts}>
                {props.posts}
            </div>
        </div>
    )
}