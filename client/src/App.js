import React from 'react';
import './App.css';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';

function App() {
    return (
        <div className="App">
            <h1>Mi Aplicación</h1>
            <AddItem />
            <ItemList />
        </div>
    );
}

export default App;
