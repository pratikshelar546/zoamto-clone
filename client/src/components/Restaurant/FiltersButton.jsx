import { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { Popover, Transition, Dialog,Tab } from "@headlessui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Fragment } from "react";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const FiltersButton = () => {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {/* <hr className="border-2 border-gray-500 max-w-full  w-full"/> */}
      <section>
        <div className="flex sticky w-full justify-center font-zomato">
          <div className="max-w-6xl flex p-4 w-full text-gray-400 font-thin">
            <div className="gap-3 flex">
              {/* <button className="outline-none border-2 border-gray-300 px-3 py-1 flex h-full justify-center rounded-lg hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <GiSettingsKnobs
                  className="rotate-90 justify-centermt mt-1"
                  size={"1em"}
                />
                Filters
              </button> */}

              <div className="flex items-center justify-center">
                <button
                  type="button"
                  onClick={openModal}
                  className="outline-none border-2 border-gray-300 px-3 py-1 flex h-full justify-center rounded-lg hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                  <GiSettingsKnobs
                    className="rotate-90 justify-centermt mt-1"
                    size={"1em"}
                  />
                  Filters
                </button>
              </div>

              <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10 " onClose={closeModal}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                          <div className="flex flex-row justify-between p-7">
                            <Dialog.Title
                              as="div"
                              className="text-2xl font-medium leading-6"
                            >
                              Filters
                            </Dialog.Title>
                            <RxCross2
                              size={"1.5em"}
                              onClick={async () => closeModal()}
                            />
                          </div>
                          <div className="w-full flex">
                            <div className=" ">
                              <div className="flex flex-row  gap-5">
                            <Tab.Group vertical>
                              {({close})=>(
                            <>
                              <Tab.List >
                                <div className="flex flex-col gap-6 text-xl align-top float-left focus:bg-white font-zomato font-light pt-4 pr-3 bg-gray-100 text-gray-700">
                                  <div className="h-16 outline-none focus:border-l-2 border-zomato-400 justify-center cursor-pointer pl-5">
                                <Tab as="div" className=' outline-none flex'>Sort by</Tab>
                                <lable className="text-zomato-400 text-sm font-extralight">Popularity</lable>
                                </div>
                                <Tab as="div" className='h-16 outline-none focus:border-l-2 border-zomato-400  cursor-pointer pl-5'>Cuisines</Tab>
                                <Tab as="div" className='h-16 outline-none cursor-pointer pl-5 flex focus:border-l-2 border-zomato-400'>Rating</Tab>
                                <Tab as="div" className='h-16 outline-none cursor-pointer pl-5 flex focus:border-l-2 border-zomato-400'>Cost per person</Tab>
                                <Tab as="div" className='h-16 outline-none cursor-pointer pl-5 flex focus:border-l-2 border-zomato-400'>More Filters</Tab>
                                </div>
                              </Tab.List>
                              <Tab.Panels>
                                <Tab.Panel> <div className="flex basis-1/2 p-2 gap-2 text-gray-500 text-lg outline-none">
                                    <input type="radio" value="" />
                                    <label>Popularity</label>
                                  </div>
                                  <div className="flex basis-1/2 p-2 gap-2 text-lg text-gray-500 outline-none">
                                    <input type="radio" value="" />
                                    <label>Rating: High to Low</label>
                                  </div>
                                  <div className="flex basis-1/2 p-2 gap-2 text-gray-500 text-lg outline-none">
                                    <input type="radio" value="" />
                                    <label>Delivery Time</label>
                                  </div>
                                  <div className="flex basis-1/2 p-2 gap-2 text-gray-500 text-lg outline-none">
                                    <input type="radio" value="" />
                                    <label>Cost: Low to High</label>
                                  </div>
                                  <div className="flex basis-1/2 p-2 gap-2 text-gray-500 text-lg outline-none">
                                    <input type="radio" value="" />
                                    <label>Cost: High to Low</label>
                                  </div></Tab.Panel>
                                <Tab.Panel>
                                <div className="overflow-hidden  p-3 mr-5">
                              <div className="relative  bg-white ">
                                <div className="w-full flex p-2 border-2 rounded-lg">
                                  <BsSearch size={"1.5em"} />
                                  <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full outline-none mx-3 text-gray-500 font-light "
                                  />
                                  <RxCross2 size={"1.5em"} />
                                </div>
                                <div className="flex overflow-y-auto flex-wrap">
                                  <div className="flex basis-1/2 p-2 gap-2 text-lg outline-none">
                                    <input type="checkbox" value="" />
                                    <label>Afghan</label>
                                  </div>
                                  <div className="flex basis-1/2 p-2 gap-2 text-lg outline-none">
                                    <input type="checkbox" value="" />
                                    <label>African</label>
                                  </div>
                                  <div className="flex basis-1/2 p-2 gap-2 text-lg outline-none">
                                    <input type="checkbox" value="" />
                                    <label>Andhra</label>
                                  </div>
                                  <div className="flex basis-1/2 p-2 gap-2 text-lg outline-none">
                                    <input type="checkbox" value="" />
                                    <label>American</label>
                                  </div>
                                  <div className="flex basis-1/2 p-2 gap-2 text-lg outline-none">
                                    <input type="checkbox" value="" />
                                    <label>Arabian</label>
                                  </div>
                                  <div className="flex basis-1/2 p-2 gap-2 text-lg outline-none">
                                    <input type="checkbox" value="" />
                                    <label>Asian</label>
                                  </div>
                                </div>
                              </div>
                            
                            </div>
                                </Tab.Panel>
                                <Tab.Panel>Content 3 rating</Tab.Panel>
                                <Tab.Panel>Content 3 cpp</Tab.Panel>
                                <Tab.Panel> <div className="overflow-hidden bg-white ">
                             
                              <div className="relative gap-8 bg-white">
                                <div className="w-full flex p-2 border-2 rounded-lg">
                                  <BsSearch size={"1.5em"} />
                                  <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full outline-none mx-3 text-gray-500 font-light "
                                  />
                                  <RxCross2 size={"1.5em"} />
                                </div>
                                <div className="flex overflow-y-auto flex-wrap">
                                  <div className="flex basis-1/2 p-2 gap-2 text-lg outline-none">
                                    <input type="checkbox" value="" />
                                    <label>Great Offer</label>
                                  </div>
                                </div>
                              </div>
                             
                            </div></Tab.Panel>
                              </Tab.Panels>
                                   
                              </>
                               )}
                           </Tab.Group>
                            
                            </div>
                            </div>
                          </div>

                          <div className="p-4">
                                <div className="flex justify-end gap-4 border-t pt-5">
                                  <button
                                    className="px-4 py-2  bg-gray-50 font-medium text-lg outline-none  rounded-lg "
                                    onClick={async () => {
                                      closeModal()
                                    }}
                                  >
                                    Clear All
                                  </button>
                                  <button className="px-4 py-2  bg-zomato-400 font-medium text-lg outline-none text-white rounded-lg ">
                                    Apply
                                  </button>
                                </div>
                              </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>

              <button className="outline-none border-2 border-gray-300 px-3 py-1 flex h-full justify-center rounded-lg hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Ration: 4.0+
              </button>

              <button className="outline-none border-2 border-gray-300 px-3 py-1 flex h-full justify-center rounded-lg">
                Pure veg
              </button>

              <div className="border-2 border-gray-300 rounded-lg">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-lg  px-3 py-1 text-base font-thin  hover:text-opacity-100 focus:outline-none `}
                      >
                        <span>Cuisines</span>
                        <IoMdArrowDropdown
                          className={`${open ? "" : "text-opacity-70"}
                   h-5 w-5 text-gray-500 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-3/4 z-10 mt-3 w-screen max-w-sm lg:max-w-3xl">
                          {({ close }) => (
                            <div className="overflow-hidden rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                              <h1 className=" relative font-medium text-2xl p-6 text-gray-700">
                                Cuisines
                              </h1>
                              <div className="relative gap-8 bg-white p-7 ">
                                <div className="w-full flex p-2 border-2 rounded-lg">
                                  <BsSearch size={"1.5em"} />
                                  <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full outline-none mx-3 text-gray-500 font-light "
                                  />
                                  <RxCross2 size={"1.5em"} />
                                </div>
                                <div className="flex overflow-y-auto flex-wrap">
                                  <div className="flex basis-1/2 p-2 gap-2 text-lg outline-none">
                                    <input type="checkbox" value="" />
                                    <label>Afghan</label>
                                  </div>
                                  <div className="flex basis-1/2 p-2 gap-2 text-lg outline-none">
                                    <input type="checkbox" value="" />
                                    <label>African</label>
                                  </div>
                                  <div className="flex basis-1/2 p-2 gap-2 text-lg outline-none">
                                    <input type="checkbox" value="" />
                                    <label>Andhra</label>
                                  </div>
                                  <div className="flex basis-1/2 p-2 gap-2 text-lg outline-none">
                                    <input type="checkbox" value="" />
                                    <label>American</label>
                                  </div>
                                  <div className="flex basis-1/2 p-2 gap-2 text-lg outline-none">
                                    <input type="checkbox" value="" />
                                    <label>Arabian</label>
                                  </div>
                                  <div className="flex basis-1/2 p-2 gap-2 text-lg outline-none">
                                    <input type="checkbox" value="" />
                                    <label>Asian</label>
                                  </div>
                                </div>
                              </div>
                              <div className="p-4">
                                <div className="flex justify-end gap-4 border-t pt-5">
                                  <button
                                    className="px-4 py-2  bg-gray-50 font-medium text-lg outline-none  rounded-lg "
                                    onClick={async () => {
                                      close();
                                    }}
                                  >
                                    Clear All
                                  </button>
                                  <button className="px-4 py-2  bg-zomato-400 font-medium text-lg outline-none text-white rounded-lg ">
                                    Apply
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>

              <div className="border-2 border-gray-300 rounded-lg">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-lg  px-3 py-1 text-base font-thin  hover:text-opacity-100 focus:outline-none `}
                      >
                        <span>More Filters</span>
                        <IoMdArrowDropdown
                          className={`${open ? "" : "text-opacity-70"}
                   h-5 w-5 text-gray-500 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-3/4 z-10 mt-3 w-screen max-w-sm lg:max-w-lg">
                          {({ close }) => (
                            <div className="overflow-hidden rounded-2xl shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                              <h1 className=" relative font-medium text-2xl p-6 text-gray-700">
                                More Filters
                              </h1>
                              <div className="relative gap-8 bg-white p-7 ">
                                <div className="w-full flex p-2 border-2 rounded-lg">
                                  <BsSearch size={"1.5em"} />
                                  <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full outline-none mx-3 text-gray-500 font-light "
                                  />
                                  <RxCross2 size={"1.5em"} />
                                </div>
                                <div className="flex overflow-y-auto flex-wrap">
                                  <div className="flex basis-1/2 p-2 gap-2 text-lg outline-none">
                                    <input type="checkbox" value="" />
                                    <label>Great Offer</label>
                                  </div>
                                </div>
                              </div>
                              <div className="p-4">
                                <div className="flex justify-end gap-4 border-t pt-5">
                                  <button
                                    className="px-4 py-2  bg-gray-50 font-medium text-lg outline-none  rounded-lg "
                                    onClick={async () => close()}
                                  >
                                    Clear All
                                  </button>
                                  <button className="px-4 py-2  bg-zomato-400 font-medium text-lg outline-none text-white rounded-lg ">
                                    Apply
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FiltersButton;
