import{useState} from 'react';
import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

const Home = () => {
    const [openLoginModal, setLoginModal] = useState(false);
    const [openregModal, setregModal] = useState(false);

    return(
    <>
    <div className='container'>
        <div className="banner-text">
            <h1>Welcome to clyde childrens hospital</h1>
            <p>Login or register to enter the hospital </p>
        </div>
        <div className="btns">
            <button className='btn login-btn' onClick={() => {setLoginModal(true);}}>login</button>
            <button className='btn signup-btn' onClick={() =>{setregModal(true);}}>register</button>
        </div>
        {/* signup container */}
        {/* register/> */}
        {/* login container */}
        {openLoginModal && <Login/>}
        {openregModal && <Register/>}
    </div>
    </>
    );
}

export default Home;