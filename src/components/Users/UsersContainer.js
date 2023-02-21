import { connect } from "react-redux";
import { follow, unfollow, getUsers } from "../../redux/users_reducer";

import React from 'react'
import Users from './Users';
import Loader from "../Common/Loader";
import { withAuthRedirect } from "../hoc/authRedirect";

class UsersContainer extends React.Component{
    
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    };

    setCurrentPage = (page) => {

        this.props.getUsers(page, this.props.pageSize);
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
    
export default withAuthRedirect(connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers
})(UsersContainer));