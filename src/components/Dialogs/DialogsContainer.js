import Dialogs from './Dialogs';
import { addMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogs_reducer';
import { connect } from 'react-redux';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Mesage/Message';


// Sends to <Dialogs/> data from state in props
const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        chats: state.dialogsPage.chats.map((chat) => <DialogItem name={chat.name} id={chat.id} />),
        messages: state.dialogsPage.messages.map((message) => <Message text={message.text} id={message.id} />)
    }
};
// sends functions that uses dispatch()
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => {
            dispatch(updateMessageTextActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;