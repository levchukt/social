import s from './Dialogs.module.css';
import React from 'react';

const Dialogs = (props) => {
    let onaddMessage = () => {
        props.addMessage()

    }

    const onupdateNewMessage = (e) => {
        let text = e.target.value;
        props.updateNewMessage(text)
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
                    <input type="text" onChange={onupdateNewMessage} value={props.dialogsPage.newMessage} className={s.input} />
                    <button className={s.button} onClick={onaddMessage} type="button">Send</button>
                </div>
                
            </div>
        </div>
    )
}

export default Dialogs;