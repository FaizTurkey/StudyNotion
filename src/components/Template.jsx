import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
    return (
        <div className='flex w-11/12 max-w-[1160px] py-12 max-auto gap-x-12 gap-y-0 '>
            <div>
                <h1 className='text-[#F1F2FF] font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
                <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                    <span className='text-[#2C333F]'>{desc1}</span> <br />
                    <span className='text-[#DBEAFE] italic'>{desc2}</span>
                </p>

                {formtype === "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}


                <div className='flex w-full items-center my-4 gap-x-2'>
                    <div className='h-[1px] bg-[#112D4E]'></div>
                    <p>OR</p>
                    <div className='h-[1px] bg-[#112D4E]'></div>
                </div>

                <button>
                    <p>Sign Up with Google</p>
                </button>
            </div>

            <div>
                <img src={image}
                    alt='loginImg'
                    width={500}
                    height={500}
                    loading='lazy' />
            </div>

        </div>
    )
}

export default Template