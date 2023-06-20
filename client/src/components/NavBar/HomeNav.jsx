import React, {  useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSearch,BiChevronDown } from "react-icons/bi";
import Signin from "../Auth/Signin";

import Login from "../Auth/Login";
import { signout } from "../../redux/reducers/Auth/authAction";
import { useDispatch } from "react-redux";
import { clearUser } from "../../redux/reducers/User/UserAction";

// import { getMySelf } from "../../redux/reducers/User/UserAction";


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
    <div className="h-full hidden lg:flex">
      <section className="w-full min-h-1/4 bg-section-bg bg-white bg-cover bg-center px-24">
        <header className="flex text-white items-center justify-between h-16 px-4 py-6">
          <Link href="/" className="text-2xl font-light decoration-none ">
            get the app
          </Link>
          <div className="gap-10 text-2xl font-light  flex">
            <a href="/">Inventor relation</a>
            <a href="/">Add restaurant</a>
            <div className="flex  items-center gap-3 relative">
            {user?.fullName?(
              <>
                <div className="relative cursor-pointer top-1" onClick={()=>setIsDropdown((prev)=>!prev)}> 
                <div className="w-max">
                  <div className="flex items-center justify-end max-w-xs">
                    <span>{user.fullName}</span><BiChevronDown size={"1.2em"} className=" transform rotate-0"/>
                  </div>
                  {isDropdown &&(
                        <div className="absolute top-12 right-0 z-10 w-36 bg-white rounded-lg overflow-hidden">
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
            <a href="/" className="w-5 h-10 justify-center lg:hidden">
              <FaUserCircle size={"1.5em"} />
            </a>
          </div>
        </header>

        <div className="items-center justify-center text-white flex flex-col py-9 gap-8 h-[calc(60vh,60px)]">
          <img
            className="w-72"
            src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
            alt="zomato"
          />
          <h1 className="font-normal text-3xl">
            Discover the best food & drinks in Mumbai
          </h1>
        </div>

        <div className="flex p-3 m-auto bg-white w-8/12 gap-3 rounded-xl">
          <FiMapPin size={"2.5em"} />
          <input
            type="text"
            placeholder="Mumbai" 
            className="p-1 outline-none text-lg"
          />
          <RiArrowDropDownLine size={"2.5em"} />
          <div className=" border-gray-400 border-solid border-2"></div>
          <BiSearch size={"2.5em"} />
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
            className="p-2 w-full outline-none"
          />
        </div>
      </section>
    </div>
  );
};

const MdNav = ({user, signIn,SignOut, logIn,isDropdown,setIsDropdown}) => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
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
      <div className="h-full max-sm:hidden lg:hidden">
        <section className="w-full min-h-1/4 bg-section-bg bg-white bg-cover bg-center px-2">
          <header>
            <nav className="flex text-xl text-white justify-between font-light p-2">
              <a href="/"> get the app</a>
              <div className="gap-5 font-light decoration-none flex" >
              <a href="/">Inventor relation</a>
            <a href="/">Add restaurant</a>
            <div className="flex  items-center gap-3 relative">
            {user?.fullName?(
              <>
                <div className="relative cursor-pointer top-1" onClick={()=>setIsDropdown((prev)=>!prev)}> 
                <div className="w-max">
                  <div className="flex items-center justify-end max-w-xs">
                    <span>{user.fullName}</span><BiChevronDown size={"1.2em"} className=" transform rotate-0"/>
                  </div>
                  {isDropdown &&(
                        <div className="absolute top-12 right-0 z-10 w-36 bg-white rounded-lg overflow-hidden">
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
                <Link onClick={Login} >Login</Link>
                <Link onClick={Signin}>Signup</Link>
                  </>
                )}
                </div>
                <a href="/" className="w-5 h-10 lg:hidden">
                  <FaUserCircle className="sm:hidden" />
                </a>
              </div>
            </nav>
          </header>

          <div className="items-center justify-center text-white flex flex-col py-9 gap-8 h-[calc(70vh,60px)]">
            <img
              className="w-60"
              src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
              alt="zomato"
            />
            <h1 className="font-normal text-2xl">
              Discover the best food & drinks in Mumbai
            </h1>
          </div>

          <div className="flex p-2 m-auto bg-white w-8/12 gap-1 rounded-xl">
            <FiMapPin size={"2.5em"} />
            <input
              type="text"
              placeholder="Mumbai"
              className="p-1 w-2/4 outline-none text-lg"
            />
            <RiArrowDropDownLine size={"2.5em"} />
            <div className=" border-gray-400 border-solid border-2"></div>
            <BiSearch size={"2.5em"} />
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="p-2 w-full outline-none"
            />
          </div>
        </section>
      </div>
    </>
  );
};
const SmNav = ({ user, signIn, logIn,isSideNav,setIsSideNav}) => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
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
      <div className="h-full flex sm:hidden">
        <section className="w-full min-h-2/4 bg-section-bg bg-white bg-cover bg-center px-5">
          <header className="flex text-lg text-white justify-between p-2  font-light">
            <a href="/"> get the app</a>
            <div className="gap-5 flex">
              <a href="/" className="max-sm:hidden">
                Inventor relation
              </a>
              <a href="/" className="max-sm:hidden">
                Add restaurant
              </a>
              {user?.fullName ? (
                <>
                  <div className="w-5 h-10 flex flex-wrap" onClick={()=>setIsSideNav((prev)=>!prev)}>
                <FaUserCircle size={"lg"} />
              </div>
             { isSideNav && (
              <div className="relative justify-start left-0  w-64 h-screen  overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800">
                <div className="flex text-white p-3 text-lg items-center justify-center">{user.fullName}</div>
                <div className="flex text-white p-3 text-lg items-center justify-center" onClick={signOut}>Signout</div>
                
              </div>
             )}
                </>
              ) : (
                <>
                  <button onClick={Login}>Login</button>
                  <button onClick={Signin}>Signin</button>
                </>
              )}
             
            </div>
          </header>

          <div className="items-center justify-center text-white flex flex-col py-16 gap-8 h-[calc(70vh,60px)]">
            <img
              className="w-56"
              src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
              alt="zomato"
            />
            <h1 className="font-light text-2xl text-center">
              Discover the best food & drinks in Mumbai
            </h1>
          </div>

          <div className="flex flex-col p-2 bg-transparent w-8/12 m-auto  gap-8 ">
            <div className="flex flex-row bg-white p-3 rounded-lg">
              {" "}
              <FiMapPin size={"2em"} />
              <input
                type="text"
                placeholder="Mumbai"
                className=" outline-none ml-2 text-lg w-full"
              />
              <RiArrowDropDownLine size={"2em"} />
            </div>
            <div className=" border-gray-400 border-solid border-2 hidden"></div>
            <div className="flex flex-row bg-white p-3 rounded-lg">
              <BiSearch size={"2em"} />
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className="p-2 w-full outline-none"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const HomeNav = (props) => {

    const [openSignIn, setOpenSignIn] = useState(false);
    const [openLogIn, setOpenLogIn] = useState(false);
    const[isDropdown, setIsDropdown] = useState(false);
    const [isSideNav,setIsSideNav] = useState(false);
    // console.log(isDropdown);
    const openSignInModal = () => setOpenSignIn(true);
    const openLogInModal = () => setOpenLogIn(true);
  const logOut =()=>{
    
  }
  // const user = useSelector((globalState) => globalState.user);
  // // console.log(user);

  // if(user){
  //   localStorage.setItem('userData' ,JSON.stringify(user) )
  // }
const user =JSON.parse(localStorage.getItem('newUser'));

// console.log(user);
  return (
    <>
      <Signin isOpen={openSignIn} setIsOpen={setOpenSignIn} />
      <Login isOpen={openLogIn}  setIsOpen={setOpenLogIn}  />



      <LgNav user={user}  signIn={openSignInModal} setIsDropdown={setIsDropdown} isDropdown={isDropdown} signOut={logOut} logIn={openLogInModal}/>

      <MdNav user={user} signIn={openSignInModal} setIsDropdown={setIsDropdown} isDropdown={isDropdown} logIn={openLogInModal}/>

      <SmNav user={user} signIn={openSignInModal} isSideNav={isSideNav} setIsSideNav={setIsSideNav} logIn={openLogInModal}/>
    </>
  );
};

export default HomeNav;
