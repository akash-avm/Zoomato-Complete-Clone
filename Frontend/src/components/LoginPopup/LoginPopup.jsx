import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
    const { url, setToken } = useContext(StoreContext);

    const [currState, setCurrState] = useState("Sign Up");
    const [isChecked, setIsChecked] = useState(false);

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prev => ({ ...prev, [name]: value }));
    };

    const onCheckboxChange = () => {
        setIsChecked(prev => !prev);
    };

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;

        if (currState === "Login") {
            newUrl += "/api/user/login";
        } else {
            newUrl += "/api/user/register";
        }

        try {
            const response = await axios.post(newUrl, data);

            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                setShowLogin(false);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Login/Register error:", error);
            alert("Something went wrong! Please try again.");
        }
    };

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img 
                        onClick={() => setShowLogin(false)} 
                        src={assets.cross_icon} 
                        alt="Close"
                        className="close-icon"
                    />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? null : (
                        <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />
                    )}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
                </div>
                <div className="login-popup-condition">
                    <input type="checkbox" checked={isChecked} onChange={onCheckboxChange} required />
                    <p>By continuing, I agree to all T&C</p>
                </div>
                <button type='submit' disabled={!isChecked}>
                    {currState === "Sign Up" ? "Create Account" : "Login"}
                </button>
                {currState === "Login"
                    ? <p>Create a New Account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
                    : <p>Already have an Account? <span onClick={() => setCurrState("Login")}>Login Here</span></p>
                }
            </form>
        </div>
    );
};

export default LoginPopup;
