import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserData } from '../../redux/auth_reducer';
import { Header } from './Header';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(responce => {
                const { id, login, email } = responce.data.data;
                this.props.setUserData(id, login, email)
            })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {setUserData})(HeaderContainer)
