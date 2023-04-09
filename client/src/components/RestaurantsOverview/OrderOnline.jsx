import React from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const OrderOnline = () => {
  return (
    <div>
      {/* https://github.com/tailwindtoolbox/Multi-Section-Form/blob/master/index.html */}

      <section className=" w-full">
        <div className="flex flex-row p-3 w-full mx-auto ">
          <div className="w-1/5 leading-normal relative ">
            <div className="w-full top-64 sticky overflow-x-hidden indent-0 h-fit overflow-y-auto z-20">
              {/* <ul className='list-reset py-3 md:py-0 text-2xl'>
          <li className=' relative  cursor-pointer'>
    <a href='#section-1' id='first' className='py-1 p-5 no-underline focus:border-r-4 border-zomato-300  focus:text-zomato-300 text-gray-700'>todays</a>
          </li>
          <li className='py-1 p-5 relative focus:border-r-4 border-zomato-300 cursor-pointer'>
    <a href='#section-2' className='no-underline  focus:text-zomato-300 text-gray-700'>todays</a>
          </li> 
          <li className='py-1 p-5 relative focus:border-r-4 border-zomato-300 cursor-pointer'>
    <a href='#section-3' className='no-underline  focus:text-zomato-300 text-gray-700'>todays</a>
          </li>
          <li className='py-1 p-5 relative focus:border-r-4 border-zomato-300 cursor-pointer'>
    <a href='#section-4' className='no-underline  focus:text-zomato-300 text-gray-700'>todays</a>
          </li>
          <li className='py-1 p-5 relative focus:border-r-4 border-zomato-300 cursor-pointer'>
    <a href='#section-5' className='no-underline  focus:text-zomato-300 text-gray-700'>todays</a>
          </li>
          <li className='py-1 p-5 relative focus:border-r-4 border-zomato-300 cursor-pointer'>
    <a href='#section-6' className='no-underline  focus:text-zomato-300 text-gray-700'>todays</a>
          </li>

        </ul> */}
              <div className="flex flex-col py-3 md:py-0 text-2xl">
                <Link
                  activeClass="text-zomato-500"
                  to="section-1"
                  className=""
                  spy={true}
                  smooth={true}
                  duration={250}
                  containerId="containerElement"
                  style={{ display: "inline-block", margin: "20px" }}
                >
                  Section 1
                </Link>
                <Link
                  activeClass="active"
                  to="section-2"
                  className="text-gray-200"
                  spy={true}
                  smooth={true}
                  duration={250}
                  containerId="containerElement"
                  style={{ display: "inline-block", margin: "20px" }}
                >
                  Section 1
                </Link>{" "}
                <Link
                  activeClass="active"
                  to="section-3"
                  className="text-gray-200"
                  spy={true}
                  smooth={true}
                  duration={250}
                  containerId="containerElement"
                  style={{ display: "inline-block", margin: "20px" }}
                >
                  Section 1
                </Link>{" "}
                <Link
                  activeClass="active"
                  to="section-4"
                  className="text-gray-200"
                  spy={true}
                  smooth={true}
                  duration={250}
                  containerId="containerElement"
                  style={{ display: "inline-block", margin: "20px" }}
                >
                  Section 1
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 w-4/5 min-w-min">
            <div>
              <div className="fixed top-0 left-0 w-full h-full bg-black opacity-0 z-10"></div>
            </div>
           
            <Element
              name="test7"
              className="element"
              id="containerElement"
              style={{
                position: "relative",
                height: "200px",
                overflow: "scroll",
                marginBottom: "100px",
              }}
            >
              <Element name="section-1" className="relative pb-64">
                section 1
              </Element>
              <Element name="section-2" className="relative pb-96">
                section 2
              </Element>
              <Element name="section-3" className="relative pb-96">
                section 3
              </Element>
              <Element name="section-4" className="relative pb-96">
                section 4
              </Element>
            </Element>
          </div>
        </div>
      </section>
      {/* <Tab.Group vertical>
      <Tab.List>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group> */}
      {/* <div className='flex flex-wrap leading-normal '>
      <div  className='sticky top-64 z-20'>
      <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
  <li><a href="#section-1" >section 1</a></li>
  <li><a href="#section-2" >section 2</a></li>
  <li><a href="#section-3" >section 3</a></li>
</Scrollspy>
</div>

<div>
  <section id="section-1" className='pb-96'>section 1</section>
  <section id="section-2" className='pb-96'>section 2</section>
  <section id="section-3" className='pb-96'>section 3</section>
</div>
</div> */}
    </div>
  );
};

export default OrderOnline;
