import React from 'react';
import { Profile } from './Profile';
import axios from 'axios'
import { connect } from 'react-redux';
import { setProfile } from '../../redux/profile_reducer';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";


class ProfileContainer extends React.Component  {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(responce => {
                    this.props.setProfile(responce.data);
                })
    }

    render() {
        return (
            
            <Profile {...this.props} profile={this.props.profile} />
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
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setProfile})(withRouter(ProfileContainer));