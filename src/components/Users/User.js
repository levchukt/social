import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
import userAvatar from '../../img/avatar.jpg'

const User = ({ followingProgress, unfollow, follow, user }) => {
    
    
        return (
            <div key={user.id} className={s.wrapper}>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small != null ? user.photos.small : userAvatar} className={s.avatar} alt='Avatar' />
                    </NavLink>
                    {user.followed
                        ? <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                                        
                        }}>Unfollow</button>
                        : <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>}
                            
                </div>
                <div>
                    <div>
                        <p>{user.name}</p>
                        <p>{user.status}</p>
                    </div>
                    <div>
                        <p>user.location.city, user.location.country</p>
                    </div>
                </div>
            </div>
        )
    }


export default User;