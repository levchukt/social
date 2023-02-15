
import axios from 'axios'
import s from './Users.module.css'
import userAvatar from '../../img/avatar.jpg'
import React from 'react'

class Users extends React.Component{
    
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(responce => {
                    this.props.setUsers(responce.data.items)
                })
    }

    render() {
        return (<div>
            {
                this.props.users.map((user) => {
                    return (
                        <div key={user.id} className={s.wrapper}>
                            <div>
                                <img src={user.photos.small != null ? user.photos.small : userAvatar} className={s.avatar} alt='Avatar' />
                                {user.followed ? <button onClick={() => this.props.unfollowUser(user.id)}>Unfollow</button> : <button onClick={() => this.props.followUser(user.id)}>Follow</button>}
                            
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
                })
            }
        </div>
        )
    }
    
}

export default Users