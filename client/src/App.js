
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//Pages
import MainPage from './pages/main/index';
import Details from './pages/details/Details';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

//Containers
import Header from './containers/header/Header';
import Footer from './containers/footer/Footer'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//Components
import Sidebar from './components/sidebar/Sidebar';

const App = () => {

    return (<div className='main-container'>
            <Router>
                <Sidebar />
                <Header />
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route exact path="/details/:cardID" element={<Details />} />
                    <Route exact path="/profile" element={<Profile />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                </Routes>
                <Footer />
            </Router>
            <ToastContainer />
            </div>
    );
}

export default App;
