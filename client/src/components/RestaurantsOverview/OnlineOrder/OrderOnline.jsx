import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BsClock, BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { CiCompass1 } from "react-icons/ci";
import { Link } from "react-scroll";
import { getMenuList } from "../../../redux/reducers/menu/MenuAction";
// import { getSpecificRestaurant } from "../../../redux/reducers/Restraurants/RestaurantAction"
import MenuList from "./MenuList";
import { getFoodByCategory } from "../../../redux/reducers/food/FoodAction";

const OrderOnline = (props) => {
  //   const [restaurant, setRestaurant] = useState({menu:[]});
  //   const { id } = useParams();
  //   const dispatch = useDispatch();
  //   // console.log(id);\
  //   useEffect(() => {
  //    dispatch(getSpecificRestaurant(id)).then((data)=>{
  //     // console.log("data ", data.payload);
  //     setRestaurant(data.payload)
  //      })
  //   },[dispatch, id]);
  // console.log(restaurant.menu[0]);
  const menuId = props.menu;

  const [menuList, setMenuList] = useState({ menu: [] });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenuList(menuId)).then((data) => {
      // console.log(data.payload?.menu?.menu);
      setMenuList(data.payload?.menu?.menu);
      
    });
  }, [dispatch, menuId]);
  const [checked ,setChecked] = useState(false);
  const [filterMenu , setFilterMenu] = useState([])
  // console.log(checked);
  if(checked){
    const category = "veg";
   dispatch(getFoodByCategory(category)).then((newData)=>{
    // console.log(newData.payload);
    // setFilterMenu(newData?.payload);
  })
  console.log(filterMenu);

  }else{
    // console.log("notFound");
  }
  // console.log(menuList);

  // const changeHandler = ()=>{
  //   console.log("true");
  // }
  // console.log(menuList);
  // if (menuList?.menu?.menu?.length > 1) {

  // console.log(menuList?.menu?.menu[0]?.name);
  // }
  return (
    <div>
      {/* https://github.com/tailwindtoolbox/Multi-Section-Form/blob/master/index.html */}

      <section className=" w-full">
        <div className="flex flex-row p-3 w-full mx-auto ">
          <div className="w-1/5 leading-normal relative ">
            <div className="w-full top-64 sticky overflow-x-hidden indent-0 h-fit overflow-y-auto z-20">
              {/* <div className="flex flex-col py-3 md:py-0 text-2xl">
                <Link
                  activeClass="text-zomato-500"
                  to="section-1"
                  className="text-gray-700"
                  spy={true}
                  smooth={true}
                  duration={250}
                  offset={-275}
                  style={{ display: "inline-block", margin: "20px" }}
                >
                  Section 1
                </Link>
                <Link
                  activeClass="text-zomato-500"
                  to="section-2"
                  className="text-gray-700"
                  spy={true}
                  smooth={true}
                  duration={250}
                  offset={-275}
                  
                  style={{ display: "inline-block", margin: "20px" }}
                >
                  Section 1
                </Link>{" "}
                <Link
                  activeClass="text-zomato-500"
                  to="section-3"
                  className="text-gray-700"
                  spy={true}
                  smooth={true}
                  duration={250}
                  offset={-275}
                  style={{ display: "inline-block", margin: "20px" }}
                >
                  Section 3
                </Link>{" "}
                <Link
                  activeClass="text-zomato-500" 
                  to="section-4"
                  className="text-gray-700"
                  spy={true}
                  smooth={true}
                  duration={250}
                  offset={-275}
                  style={{ display: "inline-block", margin: "20px" }}
                >
                  Section 4
                </Link>
              </div> */}
              <div className="flex flex-col py-3 md:py-0 text-2xl">
                {menuList?.length > 1
                  ? menuList?.map((data, index) => {
                    
                      return (
                        <div className="flex flex-col py-3 md:py-0 text-2xl border-r border-gray-400 mr-3" key={index} >
                
                          <Link
                            activeClass="text-zomato-500 border-r-4 border-zomato-300 "
                            to={data.name}
                            className="text-gray-700 p-5"
                            spy={true}
                            smooth={true}
                            duration={250}
                            offset={-275}
                            style={{ display: "inline-block" }}
                          >
                            {data.name}({data.items.length})
                          </Link>
                    
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
          <div className="flex-1 w-4/5 min-w-min">
            <div className="relative">
              <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-medium text-gray-800">
                  Order Online
                </h1>
                <div className="flex flex-row w-72 h-12 rounded-lg border border-gray-400 p-3 text-gray-400">
                  <BsSearch size={"1.4rem"} />
                  <input
                    type="text"
                    className=" outline-none ml-2 text-lg"
                    placeholder="search within menu"
                    name=""
                    id=""
                  />
                  <RxCross2 size={"1.5rem"} />
                </div>
              </div>
              <div className="flex flex-row text-gray-500 text-lg">
                <CiCompass1 size={"1.5rem"} />
                <p className="mr-3">Live track your order</p> |
                <BsClock className="ml-3 mr-2" size={"1.5rem"} /> <p>40 min </p>
              </div>
              <div className="flex flex-row gap-4 my-5">
                <div className="h-12 w-fit p-2 bg-blue-700 text-white justify-center  cursor-pointer flex flex-col">
                  <p className="text-sm">40% OFF up to ₹80</p>
                  <span className="text-xs">use code TASTY</span>
                </div>
                <div className="w-fit h-12 p-2 bg-blue-700 text-white justify-center  cursor-pointer flex flex-col">
                  <p className="text-sm">Flat ₹100 OFF</p>
                  <span className="text-xs">use code FLATOFF</span>
                </div>
                <div className="w-fit h-12 p-2 bg-blue-700 text-white justify-center  cursor-pointer flex flex-col">
                  <p className="text-sm">Flat ₹80 OFF</p>
                  <span className="text-xs">use code PAYTMFEAST </span>
                </div>
                <div className="w-fit h-12 p-2 bg-blue-700 text-white justify-center  cursor-pointer flex flex-col">
                  <p className="text-sm">Flat ₹75 OFF</p>
                  <span className="text-xs">use code KOTAKWEE...</span>
                </div>
              </div>
              <div className="text-lg justify-center my-3">
                <input type="checkbox" name="veg" id="veg" aria-checked color="#3AB757" checked={checked} onChange={e=> setChecked(e.target.checked)} className="w-5 h-5 p-1 cursor-pointer border-2 border-gray-500 rounded-md"/><span > Veg only</span>
              </div>
            </div>
            <div className="element">
              {menuList?.length > 1
                ? menuList?.map((items, index) => {
                  // console.log(items); 
                    return (
                      <MenuList {...items} checked={checked} key={index} />
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderOnline;
