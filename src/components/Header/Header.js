
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


export const Header = (props) => {
    return (
        <header className={s.header}>
            <div>
                {props.isAuth ? props.userLogin : <NavLink to={'/login/'}>Login</NavLink>}
            </div>
            <div className={s.header__container}>
                <a className={s.logo} href='http://localhost:3000'>Social</a>
            </div>
        </header>
    )
}