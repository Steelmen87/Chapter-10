import React from 'react';
import './App.css';

type Props = {
    item: string
}

function App({item}: Props) {
    return (
        <div className="App">
            <h1>{item}</h1>
        </div>
    );
}

export default App;
