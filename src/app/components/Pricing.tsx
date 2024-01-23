import React from "react";

function Pricing() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen p-10 text-gray-700 0 md:p-20">
        <h2 className="text-4xl font-medium  leading-normal mb-2  text-black">
          {" "}
          Membership
        </h2>

        <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mt-8">
          <div className="flex flex-col flex-grow mt-8 overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="flex flex-col items-center p-10 bg-gray-200">
              <span className="font-semibold">Padawan</span>
              <div className="flex items-center">
                <span className="text-3xl">$</span>
                <span className="text-5xl font-bold">20</span>
                <span className="text-2xl text-gray-500">/mo</span>
              </div>
            </div>
            <div className="p-10">
              <ul>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Lightsaber</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Robe</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Insurance</span>
                </li>
              </ul>
            </div>
            <div className="flex px-10 pb-10 justfy-center">
              <button className="group relative h-12 w-fit px-8 overflow-hidden rounded-lg border-black border-2 bg-white text-lg shadow">
                <div className="absolute inset-0 w-0 bg-black transition-all duration-[250ms]  ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Join Now
                </span>
              </button>
            </div>
          </div>

          <div className="z-10 flex flex-col flex-grow mt-8 overflow-hidden transform bg-white rounded-lg shadow-lg md:scale-110">
            <div className="flex flex-col items-center p-10 bg-gray-200">
              <span className="font-semibold">Jedi Knight</span>
              <div className="flex items-center">
                <span className="text-3xl">$</span>
                <span className="text-6xl font-bold">50</span>
                <span className="text-2xl text-gray-500">/mo</span>
              </div>
            </div>
            <div className="p-10">
              <ul>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 italic">Padawan +</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Solo missions</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Utility belt</span>
                </li>
              </ul>
            </div>
            <div className="flex px-10 pb-10 justfy-center">
              <button className="group relative h-12 w-fit px-8 overflow-hidden rounded-lg border-black border-2 bg-white text-lg shadow">
                <div className="absolute inset-0 w-0 bg-black transition-all duration-[250ms]  ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Join Now
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col flex-grow overflow-hidden bg-white rounded-lg shadow-lg mt-19">
            <div className="flex flex-col items-center p-10 bg-gray-200">
              <span className="font-semibold">Jedi Master</span>
              <div className="flex items-center">
                <span className="text-3xl">$</span>
                <span className="text-5xl font-bold">99</span>
                <span className="text-2xl text-gray-500">/mo</span>
              </div>
            </div>
            <div className="p-10">
              <ul>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 italic">Jedi Knight +</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Sit on council</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-600 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Stock options</span>
                </li>
              </ul>
            </div>
            <div className="flex px-10 pb-10 justfy-center">
              <button className="group relative h-12 w-fit px-8 overflow-hidden rounded-lg border-black border-2 bg-white text-lg shadow">
                <div className="absolute inset-0 w-0 bg-black transition-all duration-[250ms]  ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Join Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
