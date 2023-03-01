import './App.css';
import { Menu } from './components/Navbar/Menu';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import {
  Route,
  Routes
} from "react-router-dom";
import store from './redux/redux_store';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { initializeApp } from './redux/app_reducer';
import Loader from './components/Common/Loader';



class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  
  render() {
    if (!this.props.initialized) {
      return <Loader />
    }

    return (
        <div className="app">
          <HeaderContainer />
          <div className='app__wrapper'>
            <div className='menu_block'>
              <Menu sections={store.getState().navbar.sections} />
            </div>
            <div className='app__content'>
            <Routes>
                <Route path='/' element={<div>login</div>} />
                <Route path="/profile/:userId?" element={<ProfileContainer />} />
                <Route path="/messages/*" element={<DialogsContainer />} />
                <Route path="/users/*" element={<UsersContainer />} />
                <Route path="/login/*" element={<LoginPage />} />
              </Routes>
            </div>
          
          </div>
        </div>
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
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);
