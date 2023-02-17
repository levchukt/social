import './App.css';
import { Header } from './components/Header/Header';
import { Menu } from './components/Navbar/Menu';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import store from './redux/redux_store';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



function App(props) {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className='app__wrapper'>
          <div className='menu_block'>
            <Menu sections={store.getState().navbar.sections} />
          </div>
          <div className='app__content'>
            <Routes>
              <Route path="/profile/*" element={<ProfileContainer />} />
              <Route path="/messages/*" element={<DialogsContainer  /> } />
              <Route path="/users/*" element={<UsersContainer  /> } />
            </Routes>
          </div>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
