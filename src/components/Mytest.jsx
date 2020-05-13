import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../features/mytest';
const Mytest = () =>{
    let list = ['neda','nima','lili','lia'];
    const dispatch = useDispatch();
    const [myName,setMyName] = useState('');
    const [myLastname,setMyLastname] = useState('');
    const handleName = () => {
        dispatch(actions.changeMyname(myName))
        dispatch(actions.changeMyLastname(myLastname))
        
    }
    const handleFilter = () => dispatch(actions.filterList(list));

    
    
    return (
        <div>
            <input type="text" value={myName} onChange = {e => setMyName(e.target.value)} />
            <input type="text" value={myLastname} onChange = {e => setMyLastname(e.target.value)} />
            
            <button onClick={handleName}>Name me!</button>
            <button onClick={handleFilter}>Filter list!</button>
            
        </div>

    )
}


export default Mytest;
