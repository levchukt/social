import React from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile_reducer';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { withAuthRedirect } from '../hoc/authRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component  {
    componentDidMount() {
        this.props.getProfile(this.props.router.params.userId);
    }

    render() {
        


        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
        
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

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
})


export default connect(mapStateToProps, { getProfile })(withRouter(AuthRedirectComponent));

compose(
    connect(mapStateToProps, { getProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)