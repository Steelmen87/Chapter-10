import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom"
import {Home, About, Events, Products, Contacts, Whoops404} from "./Router/pages"

function App() {
    return (
        <div className="App">
            <Routes>
                <Route  path="/" element={<Home/>} />
                <Route  path="/about" element={<About/>} />
                <Route  path="/events" element={<Events/>} />
                <Route  path="/products" element={<Products/>} />
                <Route  path="/contacts" element={<Contacts/>} />
                <Route  path="*" element={<Whoops404/>} />
            </Routes>
        </div>
    );
}

export default App;
