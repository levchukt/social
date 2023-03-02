
import React from 'react';
import Paginator from './UsersPagination';
import User from './User';

const Users = (props) => {
    return (<div>
            <Paginator totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}/>
            {
                props.users.map((user) => {
                    return (
                        <User followingProgress={props.followingProgress} follow={props.follow} unfollow={props.unfollow} user={user} />
                    )
                })
            }
        </div>
        )
    }
    


export default Users