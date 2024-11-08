import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import { Provider } from 'react-redux';
import store from './store/store';
import './styles/globals.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
