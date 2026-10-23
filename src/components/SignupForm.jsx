import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    function changeHandler(e) {
        setFormData((prevData) => (
            {
                ...prevData,
                [e.target.name]: e.target.value
            }
        ))
    }

    function submitHandler(e){
            e.preventDefault();
            if(formData.password != formData.confirmPassword){
                toast.error("Password do not match");
                return ;
            }

            setIsLoggedIn(true);
            toast.success("Account Created Succesfully!.");

            const acc = {
                ...formData
            };
            console.log(acc)

            navigate("/dashboard");
    }

    const [showpassword, setShowPassword] = useState(false);
    return (
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        <p>First Name <sup>*</sup></p>
                        <input
                            required
                            name='firstName'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            type="text"
                            value={formData.firstName} />
                    </label>
                    <label>
                        <p>Last Name <sup>*</sup></p>
                        <input
                            required
                            name='lastName'
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            type="text"
                            value={formData.lastName} />
                    </label>
                </div>


                <label>
                    <p>Email Address <sup>*</sup></p>
                    <input
                        required
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                        type="email"
                        value={formData.email} />
                </label>

                <div>
                    <label>
                        <p>Create Password <sup>*</sup></p>
                        <input
                            required
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            type={showpassword ? ("text") : ("password")}
                            value={formData.password} />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showpassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                    <label>
                        <p>Confirm Password <sup>*</sup></p>
                        <input
                            required
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            type={showpassword ? ("text") : ("password")}
                            value={formData.confirmPassword} />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showpassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                </div>

                <button>Create Account</button>

            </form>
        </div>
    )
}

export default SignupForm