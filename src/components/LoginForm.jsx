import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData , setFormData] = useState({
        email : "" , password : ""
    })

    const [showpassword , setShowPassword] = useState(false);

    function changeHandler(e){
        setFormData((prevData) => (
            {
                ...prevData,
                [e.target.name]:e.target.value
            }
        ))
    }

    function submitHandler(e){
            e.preventDefault();
            setIsLoggedIn(true);
            toast.success("Logged In Successfully!");
            navigate("/dashboard");
    }
  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>
                Email Address <sup>*</sup>
            </p>
            <input 
            required
            type="email"
            value= {formData.email}
            onChange={changeHandler}
            placeholder='Enter email Id'
            name="email"/>
        </label>

        <label>
            <p>
                Password <sup>*</sup>
            </p>
            <input 
            required
            type={showpassword ? ("text"):("password")}
            value= {formData.password}
            onChange={changeHandler}
            placeholder=' password'
            name='password'/>

            <span onClick={() => setShowPassword((prev) => !prev)}>
                {showpassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>

            <NavLink to="#">
                <p>Forgot Password</p>
            </NavLink>
        </label>

        <button>
            Sign In
        </button>
    </form>
  )
}

export default LoginForm