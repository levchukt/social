import Dialogs from './Dialogs';
import { Message } from './Mesage/Message';
import { DialogItem } from './DialogItem/DialogItem';
import React from 'react';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogs_reducer';

const DialogsContainer = (props) => {
    let state = props.store.getState();
    
    let chats = state.dialogsPage.chats.map((chat)=> <DialogItem name={chat.name} id={chat.id}/>)

    let messages = state.dialogsPage.messages.map((message) => <Message text={message.text} id={message.id} />);

     

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    const updateNewMessage = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text));
    }

    return (
        <Dialogs messages={messages} chats={chats} addMessage={addMessage} updateNewMessage={updateNewMessage} newMessage={state.dialogsPage.newMessage} />
    )
}

export default DialogsContainer;