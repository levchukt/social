import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

export const DialogItem = (props) => {
    let path = `/messages/${props.id}`;

    return (
        <NavLink to={path} className={s.dialogs__chat}>
            <div className={s.avatar}></div>
            <p className={s.name}>{props.name}</p>
        </NavLink>
    )
}