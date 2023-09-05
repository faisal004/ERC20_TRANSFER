import React from "react";

const Middle = () => {
  return (
    <section className="text-white bg-gradient-to-r from-black to-blue-900 font-mono h-screen">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="sm:text-4xl text-xl font-medium title-font text-center text-white mb-20">
          Welcome To Transakt
        </h1>
        <h1 className="sm:text-3xl text-xl font-medium title-font text-center text-white mb-20">
          Features we offer
        </h1>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 w-full flex">
            <div className="flex-grow pl-6">
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Transfer Ether{" "}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  
                </p>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="flex-grow pl-6">
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Transfer Custom made ERC20 Tokens
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                 
                </p>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="flex-grow pl-6">
              <a
                href="#"
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Get all transaction details
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Middle;
