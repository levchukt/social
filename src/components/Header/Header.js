
import s from './Header.module.css';


export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__container}>
                <a className={s.logo} href='http://localhost:3000'>Social</a>
            </div>
        </header>
    )
}