import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import {FiMapPin} from "react-icons/fi"
import {RiArrowDropDownLine} from "react-icons/ri";
import {BiSearch} from "react-icons/bi";
import Signin from "../Auth/Signin";


const LgNav = ({user}) => {
  const SignIn=()=>{
    Signin();
  
  }
  return (
    <div className="h-full hidden lg:flex">
      <section className="w-full min-h-1/4 bg-section-bg bg-white bg-cover bg-center px-24">
        <header className="flex text-white items-center justify-between h-18 px-4 py-6">
          <a
            href="/"
            className="text-2xl font-light decoration-none "
          >
            get the app
          </a>
          <div className="gap-10 text-2xl font-light decoration-none flex">
            <a href="/"  >
              Inventor relation
            </a>
            <a href="/"  >
              Add restaurant
            </a>
          {user?.fullName? (<>
            <a href="/"  >
              Logout
            </a>
            </>): (<><a href="/"  >
              Login
            </a>
            <button  onClick={SignIn}  >
              Signin
            </button></>)}
            <a href="/" className="w-5 h-10 justify-center lg:hidden">
              <FaUserCircle size={'1.5em'} />
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


        {/* <div className="bg-white rounded-xl h-10 flex border-red-800 ml-36 ">
            <FiMapPin size={'2.5em'} className=" mx-3"/>
            <input type="text" className="text-black h-full w-54 text-xl  outline-none rounded-sm justify-center" value="Mumbai"  />
            <RiArrowDropDownLine size={'2.5em'}  />
            <div className="justify-center pt-2">|</div>
            <BiSearch size={'2.5em'} className="ml-3"/>
            <input type="text" placeholder="Search for restaurant, cuisine or a dish" className="ml-5 w-full outline-none "/> */}
           
        {/* </div> */}

        <div className="flex p-3 m-auto bg-white w-8/12 gap-3 rounded-xl" >
          <FiMapPin  size={'2.5em'}/>
          <input type="text" value='mumbai' className="p-1 outline-none text-lg" />
           <RiArrowDropDownLine size={'2.5em'}/>
           <div className=" border-gray-400 border-solid border-2"></div>
           <BiSearch  size={'2.5em'}/>
          <input type="text" placeholder="Search for restaurant, cuisine or a dish" className="p-2 w-full outline-none" />
        </div> 
      </section>
    </div>
  );
};

const MdNav=({user,Signin})=>{
  const SignIn=()=>{
    Signin();
  
  }
  return(
    <>
    <div className="h-full max-sm:hidden lg:hidden">
      <section className="w-full min-h-1/4 bg-section-bg bg-white bg-cover bg-center px-2">
        <header>
        <nav className="flex text-xl text-white justify-between font-light p-2">
         <a href="/" > get the app</a>
          <div className="gap-5 font-light flex">
            <a href="/"  >
              Inventor relation
            </a>
            <a href="/"  >
              Add restaurant
            </a>
            {user?.fullName? (<>
            <a href="/"  >
              Logout
            </a>
            </>): (<><a href="/"  >
              Login
            </a>
            <a href="/" onClick={SignIn}  >
              Signin
            </a></>)}
            <a href="/" className="w-5 h-10 lg:hidden">
              <FaUserCircle className="sm:hidden"/>
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


        {/* <div className="bg-white rounded-xl h-10 flex border-red-800 ml-36 ">
            <FiMapPin size={'2.5em'} className=" mx-3"/>
            <input type="text" className="text-black h-full w-54 text-xl  outline-none rounded-sm justify-center" value="Mumbai"  />
            <RiArrowDropDownLine size={'2.5em'}  />
            <div className="justify-center pt-2">|</div>
            <BiSearch size={'2.5em'} className="ml-3"/>
            <input type="text" placeholder="Search for restaurant, cuisine or a dish" className="ml-5 w-full outline-none "/> */}
           
        {/* </div> */}

        <div className="flex p-2 m-auto bg-white w-8/12 gap-1 rounded-xl" >
          <FiMapPin  size={'2.5em'}/>
          <input type="text" value='mumbai' className="p-1 w-2/4 outline-none text-lg" />
           <RiArrowDropDownLine size={'2.5em'}/>
           <div className=" border-gray-400 border-solid border-2"></div>
           <BiSearch  size={'2.5em'}/>
          <input type="text" placeholder="Search for restaurant, cuisine or a dish" className="p-2 w-full outline-none" />
        </div> 
      </section>
    </div>
    </>
  );
}
const SmNav=({user,Signin})=>{
  const SignIn=()=>{
    Signin();
  
  }
  return(
    <>
    <div className="h-full flex sm:hidden">
      <section className="w-full min-h-2/4 bg-section-bg bg-white bg-cover bg-center px-5">
        <header className="flex text-lg text-white justify-between p-2  font-light">
         <a href="/" > get the app</a>
          <div className="gap-5 flex">
            <a href="/" className="max-sm:hidden" >
              Inventor relation
            </a>
            <a href="/" className="max-sm:hidden" >
              Add restaurant
            </a>
            {user?.fullName? (<>
            <a href="/"  >
              Logout
            </a>
            </>): (<><a href="/"  >
              Login
            </a>
            <a href="/" onClick={SignIn}  >
              Signin
            </a></>)}
            <a href="/" className="w-5 h-10 flex flex-wrap">
              <FaUserCircle size={'lg'}/>
            </a>
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
        

        {/* <div className="bg-white rounded-xl h-10 flex border-red-800 ml-36 ">
            <FiMapPin size={'2.5em'} className=" mx-3"/>
            <input type="text" className="text-black h-full w-54 text-xl  outline-none rounded-sm justify-center" value="Mumbai"  />
            <RiArrowDropDownLine size={'2.5em'}  />
            <div className="justify-center pt-2">|</div>
            <BiSearch size={'2.5em'} className="ml-3"/>
            <input type="text" placeholder="Search for restaurant, cuisine or a dish" className="ml-5 w-full outline-none "/> */}
           
        {/* </div> */}

        <div className="flex flex-col p-2 bg-transparent w-8/12 m-auto  gap-8 " >
         <div className="flex flex-row bg-white p-3 rounded-lg"> <FiMapPin  size={'2em'}/>
          <input type="text" value='mumbai' className=" outline-none ml-2 text-lg w-full" />
           <RiArrowDropDownLine size={'2em'}/>
           </div>
           <div className=" border-gray-400 border-solid border-2 hidden"></div>
           <div className="flex flex-row bg-white p-3 rounded-lg" >
           <BiSearch  size={'2em'}/>
          <input type="text" placeholder="Search for restaurant, cuisine or a dish" className="p-2 w-full outline-none" />
          </div>
        </div> 
      </section>
    </div>
    </>
  );
}


const HomeNav = () => {
  return (
    <>
      <LgNav />
      
      <MdNav/>
      
      <SmNav/>
      
    </>
  );
};

export default HomeNav;
