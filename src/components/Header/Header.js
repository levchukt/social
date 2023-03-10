
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


export const Header = (props) => {
    return (
        <header className={s.header}>
            <div>
                {props.isAuth ? <div className={s.login}>{props.userLogin} <button className={s.button} onClick={props.logout}>Logout</button></div> : <NavLink to={'/login/'}>Login</NavLink>}
            </div>
            <div className={s.header__container}>
                <a className={s.logo} href='http://localhost:3000'>Social</a>
            </div>
        </header>
    )
}