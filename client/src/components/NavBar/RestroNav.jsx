import React, { useState } from "react";
// import { RiRestaurant2Fill } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
// import {FaUserAlt} from "react-icons/fa"
// import { Link } from "react-router-dom";
import Login from "../Auth/Login";
import { useSelector } from "react-redux";
import Signin from "../Auth/Signin";
const LgNav = ({user,logIn,signIn}) => {
const Login =()=>{
logIn();
}
const Signin = ()=>{
signIn();
}
  return (
    <>
      <div className="lg:flex hidden h-full">
        <header className="w-full h-20 flex justify-center text-gray-700">
          <nav className=" flex w-full max-w-6xl">
            <div className="p-6  flex">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="zomato" className="w-36"
              />
            </div>
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
          <nav className=" flex w-full max-w-6xl">
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
          <nav className=" flex flex-col max-w-6xl">
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

  const openSignInModal = () => setOpenSignIn(true);
  const openLogInModal = () => setOpenLogIn(true);

  const user = useSelector((globalState) => globalState.user);
  return (
    <>
      <Signin isOpen={openSignIn} setIsOpen={setOpenSignIn} />
      <Login isOpen={openLogIn} setIsOpen={setOpenLogIn} />
      <LgNav user={user} signIn={openSignInModal} logIn={openLogInModal}/>

      <MdNav user={user} signIn={openSignInModal} logIn={openLogInModal}/>

      <SmNav user={user} signIn={openSignInModal} logIn={openLogInModal}/>
    </>
  );
};

export default RestroNav;
