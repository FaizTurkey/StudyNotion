import React from 'react'
import { NavLink } from 'react-router-dom'
import {toast} from 'react-hot-toast';

const Navbar = (props) => {

  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;


  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 max-auto'>
      <NavLink to="/" className='flex items-center gap-0.9'>
         <span className='text-xl font-bold text-white'>StudyNotion </span>
      </NavLink>

      <nav>
        <ul className='flex gap-x-6 text-[#E6F6FF] '>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </nav>

      {/* Login - SignUp - LogOut - Dashboard */}

      <div className='flex items-center gap-x-4'>
        {!isLoggedIn &&
          <NavLink to="/login">
            <button className='bg-[#071A2D] text-white py-[8px] px-[12px] rounded-[8px] border border-[#112D4E]'>Log in </button>
          </NavLink>
        }
        {!isLoggedIn &&
          <NavLink to="/signup">
            <button className='bg-[#071A2D] text-white py-[8px] px-[12px] rounded-[8px] border border-[#112D4E]' 
            >Sign Up </button>
          </NavLink>
        }
        {isLoggedIn &&
          <NavLink to="/">
            <button className='bg-[#071A2D] text-white py-[8px] px-[12px] rounded-[8px] border border-[#112D4E]' onClick={() => {
              setIsLoggedIn(false);
              toast.success("Logged Out");
            }}>Log Out </button>
          </NavLink>
        }
        {isLoggedIn &&
          <NavLink to="/dashboard">
            <button className='bg-[#071A2D] text-white py-[8px] px-[12px] rounded-[8px] border border-[#112D4E]'>Dashboard </button>
          </NavLink>
        }

      </div>


    </div>
  )
}

export default Navbar