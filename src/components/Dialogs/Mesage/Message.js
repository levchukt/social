
import s from './Message.module.css';

export const Message = (props) => {
    return (
        <p className={s.message}>{props.text}</p>
    )
}