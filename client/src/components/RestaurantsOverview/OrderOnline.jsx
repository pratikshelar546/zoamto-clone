import React from 'react'
import { Tab } from '@headlessui/react'
import Scrollspy from 'react-scrollspy'

const OrderOnline = () => {

  return (
    <div>
      {/* https://github.com/tailwindtoolbox/Multi-Section-Form/blob/master/index.html */}

    <section className=' w-full'>
    <div className='flex flex-row p-3 w-full mx-auto '>
      <div className='w-1/5 leading-normal relative '>
      <div className='w-full top-64 sticky overflow-x-hidden indent-0 h-fit overflow-y-auto z-20'>
        <ul className='list-reset py-3 md:py-0 text-2xl'>
        <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
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
</Scrollspy>
        </ul>
      </div>
      </div>
      <div className='flex-1 w-4/5 min-w-min'>
        <div>
          <div className='fixed top-0 left-0 w-full h-full bg-black opacity-0 z-10'></div>
        </div>
        <div>djvndvbdjjjjjjjjj</div>
  <section id="section-1" className='relative'>section 1</section>
  <section id="section-2" className='relative'>section 2</section>
  <section id="section-3" className='p-5'>section 3</section>
  <section id="section-4" className='p-5 '>section 2</section>
  <section id="section-5" className='p-5'>section 2</section>
  <section id="section-6" className='p-5'>section 2</section>
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

  )
}

export default OrderOnline