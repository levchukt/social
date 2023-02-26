import Dialogs from './Dialogs';
import { addMessageActionCreator } from '../../redux/dialogs_reducer';
import { connect } from 'react-redux';
import { DialogItem } from './DialogItem/DialogItem';
import { Message } from './Mesage/Message';
import { withAuthRedirect } from '../hoc/authRedirect';
import { compose } from 'redux';


// Sends to <Dialogs/> data from state in props
const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        chats: state.dialogsPage.chats.map((chat) => <DialogItem name={chat.name} id={chat.id} />),
        messages: state.dialogsPage.messages.map((message) => <Message text={message.text} id={message.id} />),
        isAuth: state.auth.isAuth
    }
};
// sends functions that uses dispatch()
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {
            dispatch(addMessageActionCreator(text))
        }
    }
};



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

