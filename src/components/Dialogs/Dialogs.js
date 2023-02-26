import s from './Dialogs.module.css';
import React from 'react';
import { Navigate } from 'react-router-dom';
import AddMessageForm from './AddMessageForm';

const Dialogs = (props) => {
    let onSubmit = (text) => {
        props.addMessage(text)

    }

    if (!props.isAuth) {
        return <Navigate to={'/login'} />
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__chats}>
                <h3 className={s.title}>Your chats</h3>
                {props.chats}
            </div>
            <div className={s.messages}>
                {props.messages}
                <div className={s.textarea}>
                    {/* <input type="text" onChange={onupdateNewMessage} value={props.dialogsPage.newMessage} className={s.input} />
                    <button className={s.button} onClick={onaddMessage} type="button">Send</button> */}
                    <AddMessageForm onSubmit={onSubmit} />
                </div>
                
            </div>
        </div>
    )
    


    
}

export default Dialogs;