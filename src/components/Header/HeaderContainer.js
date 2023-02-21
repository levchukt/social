import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/auth_reducer';
import { Header } from './Header';

class HeaderContainer extends React.Component {
    
    componentDidMount() {
        this.props.login()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
        userLogin: state.auth.login
    })
}


export default connect(mapStateToProps, {login})(HeaderContainer)
