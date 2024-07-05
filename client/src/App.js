import React from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import './components/axiosConfig';

function App() {
    return (
        <div className="App">
            <h1>Mi Aplicación</h1>
            <Register />
            <Login />
        </div>
    );
}

export default App;
