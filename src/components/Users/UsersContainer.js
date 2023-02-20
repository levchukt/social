import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleLoading, unfollow, toggleFollowing } from "../../redux/users_reducer";

import React from 'react'
import Users from './Users';
import Loader from "../Common/Loader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component{
    
    componentDidMount() {
        this.props.toggleLoading(true)
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                    this.props.toggleLoading(false)
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                })
    };

    setCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleLoading(true)
            usersAPI.getUsers(page, this.props.pageSize).then(data => {
                    this.props.toggleLoading(false)
                    this.props.setUsers(data.items);
                })
    }

    render() {
        
        return <>
            {this.props.isLoading ? <Loader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                setCurrentPage={this.setCurrentPage}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingProgress={this.props.followingProgress}
                toggleFollowing={this.props.toggleFollowing}
            />
        </>
    }
    
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingProgress: state.usersPage.followingProgress
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         followUser: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollowUser: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (page) =>{
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalUsersCount: (count) => {
//             dispatch(setTotalUsersCountAC(count))
//         },
//         toggleLoading: (isLoading) => {
//             dispatch(toggleLoadingAC(isLoading))
//         }
//     }
// }

 
    
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleLoading,
    toggleFollowing
})(UsersContainer);