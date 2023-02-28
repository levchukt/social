import React from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus } from '../../redux/profile_reducer';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { withAuthRedirect } from '../hoc/authRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component  {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.loggedUserId;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        


        return (
            <Profile {...this.props} />
        )
        
    }
} 

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loggedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})


export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

