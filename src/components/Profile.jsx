import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { actions } from '../features/profile';

const Profile = () => {
    const dispatch = useDispatch();
    const [alias, setAlias] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const count = useSelector(state => state.counter);

    // const saveAlias = () => dispatch(actions.changeAlias(alias));

    const handleSave = () => {
        dispatch(actions.changeAlias(alias))
        dispatch(actions.changeName(name))
        dispatch(actions.changeEmail(email))
    }

    return (
        
        <div className="border">
            <h3>User profile</h3>
            <div>
                Alias:
                <input type="text" value={alias}
                    onChange={e => setAlias(e.target.value)} />
                    
            </div>
            <div>
                Real name:
                <input type="text" value={name}
                    onChange={e => setName(e.target.value)} />
            </div>
            <div>
                Email address:
                <input type="email" value={email}
                    onChange={e => setEmail(e.target.value)} />
            </div>
            <button onClick={handleSave}>Save</button>
            <button>Reset</button>
             {count}

        </div>
    )
}

export default Profile;