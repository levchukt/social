import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleLoading, unfollow } from "../../redux/users_reducer";
import axios from 'axios'
import React from 'react'
import Users from './Users';
import Loader from "../Common/Loader";

class UsersContainer extends React.Component{
    
    componentDidMount() {
        this.props.toggleLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(responce => {
                    this.props.toggleLoading(false)
                    this.props.setUsers(responce.data.items);
                    this.props.setTotalUsersCount(responce.data.totalCount);
                })
    };

    setCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(responce => {
                    this.props.toggleLoading(false)
                    this.props.setUsers(responce.data.items);
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
        isLoading: state.usersPage.isLoading
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
    toggleLoading

})(UsersContainer);