import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../features/counter';

// Component that uses the global state (from the Redux store)
const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.counter);
    const myList = useSelector(state =>state.mytest.list);
    const increase = () => dispatch(actions.increase());
    const decrease = () => dispatch(actions.decrease());
    return (
        <div className="border">
            Value: {value} (React with Redux, state in store)<br/>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <h2>show list here!{myList}</h2>
        
        </div>
    )
}

export default Counter;