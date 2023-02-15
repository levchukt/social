import './App.css';
import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { Menu } from './components/Navbar/Menu';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import store from './redux/redux_store';
import UsersContainer from './components/Users/UsersContainer';



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
              <Route path="/profile" element={<Profile store={store} />} />
              <Route path="/messages/*" element={<DialogsContainer store={store} /> } />
              <Route path="/users/*" element={<UsersContainer store={store} /> } />
            </Routes>
          </div>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
