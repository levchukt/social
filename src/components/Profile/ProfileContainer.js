import React from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile_reducer';
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";


class ProfileContainer extends React.Component  {
    componentDidMount() {
        this.props.getProfile(this.props.router.params.userId);
    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate to={'/login'} />
        } else {
            return (
                <Profile {...this.props} profile={this.props.profile} />
            )
        }
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
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer));