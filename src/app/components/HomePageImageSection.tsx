const HomePageImageSection = () => {
  return (
    <>
      <div className="flex justify-center py-5">
        <div className="min-w-[1300px] relative min-h-[600px]  rounded-2xl ">
          <div>
            <img
              src="/home.jpg"
              className="min-w-[1300px] w-[1300px] h-[600px]  rounded-2xl   object-cover object-center"
              alt=""
            />
          </div>

          <div className="w-full absolute   bottom-[0px] px-5  h-[150px]">
            <div className="bg-white h-[80%] rounded-2xl flex justify-center  shadow-xl">
              <div className="flex flex-col basis-[90%] pt-3">
                <div>
                  {" "}
                  <div className="flex  gap-4">
                    <div className="flex flex-col items-center">
                      <div>Buy</div>
                      <div className="w-[12px] h-[2px] rounded-2xl bg-black"></div>
                    </div>

                    <div>Rent</div>
                  </div>
                  <div className="flex justify-between my-2">
                    <div className="border-r-black border-l-0 border-t-0 border-b-0  border">
                      <div className=" flex items-center  justify-center">
                        <div className="relative group">
                          <button
                            id="dropdown-button"
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white   rounded-md   "
                          >
                            <span className="mr-2">Open Dropdown</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 ml-2 -mr-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <div
                            id="dropdown-menu"
                            className="hidden absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1"
                          >
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                            >
                              Uppercase
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                            >
                              Lowercase
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                            >
                              Camel Case
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                            >
                              Kebab Case
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-r-black border-l-0 border-t-0 border-b-0  border">
                      <div className=" flex items-center  justify-center">
                        <div className="relative group">
                          <button
                            id="dropdown-button"
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white   rounded-md   "
                          >
                            <span className="mr-2">Open Dropdown</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 ml-2 -mr-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <div
                            id="dropdown-menu"
                            className="hidden absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1"
                          >
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                            >
                              Uppercase
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                            >
                              Lowercase
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                            >
                              Camel Case
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                            >
                              Kebab Case
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-r-black border-l-0 border-t-0 border-b-0   border">
                      <div className=" flex items-center  justify-center">
                        <div className="relative group">
                          <button
                            id="dropdown-button"
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white   rounded-md   "
                          >
                            <span className="mr-2">Open Dropdown</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 ml-2 -mr-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <div
                            id="dropdown-menu"
                            className="hidden absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1"
                          >
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                            >
                              Uppercase
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                            >
                              Lowercase
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                            >
                              Camel Case
                            </a>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                            >
                              Kebab Case
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex- ">
                      <main className="grid  w-full place-items-center ">
                        <button className="group relative h-12 w-fit px-8 overflow-hidden rounded-lg border-black border-2 bg-white text-lg shadow">
                          <div className="absolute inset-0 w-0 bg-black transition-all duration-[250ms]  ease-out group-hover:w-full"></div>
                          <span className="relative text-black group-hover:text-white">
                            Search
                          </span>
                        </button>
                      </main>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePageImageSection;
