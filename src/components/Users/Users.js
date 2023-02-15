
import axios from 'axios'
import s from './Users.module.css'
import userAvatar from '../../img/avatar.jpg'
import React from 'react'

class Users extends React.Component{
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(responce => {
                    this.props.setUsers(responce.data.items);
                    this.props.setTotalUsersCount(responce.data.totalCount);
                })
    };

    setCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
                .then(responce => {
                    this.props.setUsers(responce.data.items);
                })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
        let curPL = curP + 5;
        let slicedPages = pages.slice(curPF, curPL);

        return (<div>
            <div className={s.usersPages}>
                {slicedPages.map(page => {

                    return <span onClick={() =>{this.setCurrentPage(page)}} className={this.props.currentPage === page ? s.selectedPage : s.pageNumber}>{page}</span>
                })}
            </div>
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