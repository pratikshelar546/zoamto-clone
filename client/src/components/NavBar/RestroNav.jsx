import React, { useState } from "react";
// import { RiRestaurant2Fill } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiChevronDown, BiSearch } from "react-icons/bi";
// import {FaUserAlt} from "react-icons/fa"
// import { Link } from "react-router-dom";
import Login from "../Auth/Login";
import { useDispatch, useSelector } from "react-redux";
import Signin from "../Auth/Signin";
import { signout } from "../../redux/reducers/Auth/authAction";
import { clearUser } from "../../redux/reducers/User/UserAction";
import { Link } from "react-router-dom";

const LgNav = ({ user, signIn,SignOut, logIn,isDropdown,setIsDropdown }) => {

  const dispatch =useDispatch();

  const Signin = () => {
    signIn();
  };
  const Login = () => {
    logIn();
  };
  const signOut =()=>{
  
    dispatch(signout());
    dispatch(clearUser());
  window.location.reload(false);
    
  }
  return (
    <>
      <div className="lg:flex hidden h-full">
        <header className="w-full h-20 flex justify-center text-gray-700">
          <nav className=" flex w-full max-w-7xl">
            <Link className="p-6  flex" to="/delivery" >
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="zomato" className="w-36"
              />
            </Link>
            <div className="flex p-2 w-3/4 h-3/4 mt-3 rounded-lg border-gray-200 border-2 shadow-lg">
              <FiMapPin  size={"2.5em"} />
              <input
                type="text"
                placeholder="Mumbai"
                className=" outline-none text-lg"
              />
              <RiArrowDropDownLine size={"2.5em"} />
              <div className=" border-gray-300 rounded-lg border-solid border-2 h-5 justify-center flex m-3"></div>
              <BiSearch size={"2.5em"} />
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className=" w-full outline-none text-lg"
              />
            </div>
                <div className="flex w-1/4 text-gray-500 p-6 gap-6 text-2xl font-medium justify-center">
                 {user?.fullName?(
              <>
                <div className="relative cursor-pointer top-1" onClick={()=>setIsDropdown((prev)=>!prev)}> 
                <div className="w-max">
                  <div className="flex items-center justify-end max-w-xs">
                    <span>{user.fullName}</span><BiChevronDown size={"1.2em"} className=" transform rotate-0"/>
                  </div>
                  {isDropdown &&(
                        <div className="absolute top-12 right-0 z-10 w-36 bg-gray-100  border-gray-500 shadow-sm rounded-lg overflow-hidden">
                        <div className="flex text-gray-700 p-3 text-lg items-center justify-center" onClick={signOut}>Signout</div>
                        <div className="flex text-gray-700 p-3 text-lg items-center justify-center">Bookmark</div>
                        <div className="flex text-gray-700 p-3 text-lg items-center justify-center">Notification</div>
                        <div className="flex text-gray-700 p-3 text-lg items-center justify-center">Network</div>
                        <div className="flex text-gray-700 p-3 text-lg items-center justify-center">Profile</div>
                        <div className="flex text-gray-700 p-3 text-lg items-center justify-center">Settings</div>
                      </div>
                  )}
                
                </div>
                </div>
              </>
              
            ) : (
              <>
                <button onClick={Login} >Login</button>
                <button onClick={Signin}>Signup</button>
              </>
            )}
                </div>
                
          </nav>
        </header>
      </div>
    </>
  );
};

const MdNav =({user,logIn,signIn})=>{
  const Login =()=>{
    logIn();
    }
    const Signin = ()=>{
    signIn();
    }
  return (
    <>
      <div className="flex max-sm:hidden lg:hidden h-full">
        <header className="w-full h-20 flex justify-center text-gray-700">
          <nav className=" flex w-full max-w-7xl">
            <div className="p-6  flex">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="zomato" className="w-32"
              />
            </div>
            <div className="flex p-2 w-2/4 h-3/4 mt-3 rounded-lg border-gray-200 border-2 shadow-lg">
              <FiMapPin  size={"2.5em"} />
              <input
                type="text"
                placeholder="Mumbai"
                className=" outline-none w-1/4 text-lg"
              />
              <RiArrowDropDownLine size={"2.5em"} />
              <div className=" border-gray-300 rounded-lg border-solid border-2 h-5 justify-center flex m-3"></div>
              <BiSearch size={"2.5em"} />
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className=" w-full outline-none text-lg"
              />
            </div>
                <div className="flex w-1/4 text-gray-500 mt-2 p-4 gap-4 text-xl font-medium justify-center">
                {user?.fullName ? (
              <>
                <a href="/">Logout</a>
              </>
            ) : (
              <>
                <button onClick={Login} >Login</button>
                <button onClick={Signin}>Signup</button>
              </>
            )}
                </div>
                
          </nav>
        </header>
      </div>
    </>
  );
}

const SmNav =({user,logIn,signIn})=>{
  const Login =()=>{
    logIn();
    }
    const Signin = ()=>{
    signIn();
    }
  return (
    <>
      <div className="flex sm:hidden w-full h-full">
        <header className=" h-20 flex text-yellow-700">
          <nav className=" flex flex-col max-w-7xl">
            <div className="flex mx-10 w-full justify-between">
            <div className="p-4 flex">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="zomato" className="w-24 h-8"
              />
            </div>
          
                 <div className="flex w-2/4 text-gray-500 mt-2 p-4 gap-4 text-xl font-medium justify-center">
                 {user?.fullName ? (
              <>
                <a href="/">Logout</a>
              </>
            ) : (
              <>
                <button onClick={Login} >Login</button>
                <button onClick={Signin}>Signup</button>
              </>
            )}
                </div>
                </div>
                <div className="mx-5 justify-center">
                <div className="flex p-1 w-full mt-3 h-3/4 rounded-lg  border-gray-200 border-2 shadow-lg">
              <FiMapPin  size={"2.5em"} />
              <input
                type="text"
                placeholder="Mumbai"
                className=" outline-none w-1/4 text-lg"
              />
              <RiArrowDropDownLine size={"2.5em"} />
              <div className=" border-gray-300 rounded-lg border-solid border-2 h-5 justify-center flex m-3"></div>
              <BiSearch size={"2.5em"} />
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className=" w-full outline-none text-lg"
              />
            </div>
            </div>   
          </nav>
        </header>
      </div>
    </>
  );
}
const RestroNav = () => {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openLogIn, setOpenLogIn] = useState(false);
  const [isDropdown , setIsDropdown] = useState(false);
  const openSignInModal = () => setOpenSignIn(true);
  const openLogInModal = () => setOpenLogIn(true);
const user = JSON.parse(localStorage.getItem('newUser'));
  // const user = useSelector((globalState) => globalState.user);
  return (
    <>
      <Signin isOpen={openSignIn} setIsOpen={setOpenSignIn} />
      <Login isOpen={openLogIn} setIsOpen={setOpenLogIn} />
      <LgNav user={user} isDropdown={isDropdown} setIsDropdown={setIsDropdown} signIn={openSignInModal} logIn={openLogInModal}/>

      <MdNav user={user} signIn={openSignInModal} logIn={openLogInModal}/>

      <SmNav user={user} signIn={openSignInModal} logIn={openLogInModal}/>
    </>
  );
};

export default RestroNav;
