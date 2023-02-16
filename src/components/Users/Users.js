
import s from './Users.module.css'
import userAvatar from '../../img/avatar.jpg'
import React from 'react'

const Users = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        let curP = props.currentPage;
        let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
        let curPL = curP + 5;
        let slicedPages = pages.slice(curPF, curPL);
        
        return (<div>
            <div className={s.usersPages}>
                {slicedPages.map(page => {

                    return <span onClick={() =>{props.setCurrentPage(page)}} className={props.currentPage === page ? s.selectedPage : s.pageNumber}>{page}</span>
                })}
            </div>
            {
                props.users.map((user) => {
                    return (
                        <div key={user.id} className={s.wrapper}>
                            <div>
                                <img src={user.photos.small != null ? user.photos.small : userAvatar} className={s.avatar} alt='Avatar' />
                                {user.followed ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button> : <button onClick={() => props.follow(user.id)}>Follow</button>}
                            
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
    


export default Users