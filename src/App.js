import React from 'react';
import './App.css';

import Counter from './components/Counter';
import Profile from './components/Profile';
import Mytest from './components/Mytest';
import { useSelector } from 'react-redux';

function App() {
    const alias = useSelector(state => state.profile.alias);
    const myName = useSelector(state => state.mytest.myName);
    const myLastname = useSelector(state =>state.mytest.myLastname);
    const myCount = useSelector(state=> state.counter);
    return (
        <div className="App">
        <header className="App-header">
            <h1> React Redux demo </h1>
        </header>
        <main>
            <h3>Welcome, {myName} {myLastname}:)</h3>
            <h2>Welcome, {alias}!</h2>
            <Profile />
            <br/>
           <h3>Counter is here:</h3>
            <Counter />
            <h3>Mytest is here:</h3>
            <Mytest />
            {myCount}
           
        </main>
        </div>
    );
}

export default App;
