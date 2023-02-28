import { connect } from "react-redux";
import { follow, unfollow, requestUsers } from "../../redux/users_reducer";

import React from 'react'
import Users from './Users';
import Loader from "../Common/Loader";
import { compose } from "redux";
import { getUsers, getCurrentPage, getFollowingProgress, getIsLoading, getPageSize, getTotalUsersCount } from "../../redux/users_selectors";

class UsersContainer extends React.Component{
    
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    };

    setCurrentPage = (page) => {

        this.props.requestUsers(page, this.props.pageSize)
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingProgress: getFollowingProgress(state)
    }
}
    
export default compose(
    connect(mapStateToProps, {
    follow,
    unfollow,
    requestUsers
    }),
)(UsersContainer)

