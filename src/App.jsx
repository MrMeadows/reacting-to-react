import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import funkyBg from './img/funkybg.jpg';
import Greeter from './components/Greeter.jsx';

const App = () => {

    const [username, setUsername] = useState("");

    const [loaded, setLoaded] = useState(false)

    const handleUsernameInput = (event) => {
        setUsername(event.target.value)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        },3000);
    }, [loaded]);

    if (loaded == false) {
        return (
            <div className="ps-3 pt-2">
                <p>Website is loading . . .</p>
                <button className="btn btn-primary" onClick={e => setLoaded(true)}>Load Page</button>
            </div>
        )
    };

    return (
        <div className="container align-center my-3 py-4 rounded w-50 border border-2 border-secondary" style={{ backgroundImage: `url(${funkyBg})`, backgroundSize: 'cover' }}>
            <div className="card w-75 m-auto bg-dark">
                <div className="card-body text-center">
                    <h5 className="card-title text-light">Groove Simulator 2.8</h5>
                    <h6 className="card-subtitle text-light my-2">Get on down to party town</h6>
                    <button className="m-auto btn btn-danger">
                        <a className="text-light" href="https://www.youtube.com/watch?v=-38yJGUvBD8" style={{textDecoration: "none"}} target="_blank">
                            Click to enter the <strong><i>boogie experience</i></strong>
                        </a>
                    </button>
                </div>
            </div>

            <Greeter phrase="Are you ready for the boogie" name=" visitor?" />
            <Greeter phrase="This will be the single greatest boogie of your life" name=" friend." />
            <Greeter phrase="Seriously, I worry for your hips. You should stretch" name=" muchacho."/>

            <div className="text-center">
                <input type="text" value={username} onChange={handleUsernameInput}></input>
                <p className="my-1 py-1 bg-warning-subtle rounded fw-bold">You are logging in as: {username}</p>
            </div>
        </div>
    );
}

export default App;