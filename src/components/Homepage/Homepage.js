import { NavLink } from 'react-router-dom';
import styles from './Homepage.module.css'

const Homepage = (props) => {
    return (
        <div className={styles.homePage}>
            <h1 className={styles.title}>Welcome to my fist big React project</h1>
            <p className={styles.text}>To test it please login with:</p>
            <p className={styles.data}>Email: free@samuraijs.com<br />
                Password: free</p>
            <NavLink className={styles.button} to={'/login'}>Login</NavLink>
        </div>
    )
}

export default Homepage;