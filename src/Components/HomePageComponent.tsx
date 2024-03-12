import React from 'react'

const HomePageComponent = () => {
  return (
    <div className="bg-main bg-no-repeat bg-cover bg-center bg-fixed">
    <h1 className="my-12 text-center text-6xl lg:text-8xl text-white textShadow">PokéDex1</h1>

    <div className="flex justify-center w-full text-xl">
      <input id="pkmnInput" className="w-4/12 border-black border-4 text-center hidden lg:block" type="text" placeholder="Pokemon name/number" />

      <button id="searchBtn" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-4 lg:px-16 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mx-3 text-sm lg:text-lg">Search</button>

      <button id="randomBtn" type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg  px-4 lg:px-16 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 mx-3 text-sm lg:text-lg">Random</button>

      <button id="favBtn" type="button" className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg  px-4 lg:px-16 py-2.5 text-center text-sm lg:text-lg" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">Favorites</button>

      {/* drawer component */}
      <div id="drawer-right-example" className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white opacity-80 w-screen lg:w-[25vw] dark:bg-gray-800" tabIndex={-1} aria-labelledby="drawer-right-label">
        <h5 id="drawer-right-label" className="inline-flex items-center mb-4 font-semibold text-4xl  text-black dark:text-gray-400">
          <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Favorites
        </h5>
        <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div id="favList">
          {/* Favorite items go here */}
        </div>
      </div>
    </div>

    <div className="flex justify-center lg:hidden">
      <input id="pkmnInput2" className="w-8/12 my-8 border-black border-4 text-center" type="text" placeholder="Pokemon name/number" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 lg:mt-20">
      {/* Left column */}
      <div>
        <div className="flex justify-center items-center">
          <p id="monName" className="text-white text-4xl lg:text-5xl textShadow"></p>
          <button id="shinyBtn" type="button" className="text-white bg-gradient-to-r from-yellow-200 via-orange-400 to-yellow-300 hover:bg-gradient-to-bl focus:ring-4 rounded-lg  px-4 lg:px-16 py-2.5 mx-3 text-sm lg:text-lg">Shiny</button>
          <img id="favStar" className="" src="/assets/Star_Vector.png" alt="outline of a star" />
        </div>

        <div className="flex justify-center items-center">
          <img className="" id="monImg" src="" alt="" />
        </div>

        <p className="text-white text-4xl lg:text-5xl textShadow text-center">Evolutions</p>

        <div id="evoDiv" className="overflow-y-scroll max-h-96">
          {/* Evolution items go here */}
        </div>
      </div>

      {/* Right column */}
      <div>
        <div className="flex w-full textShadow">
          <p className="w-[25%] text-2xl lg:text-3xl ">Type:</p>
          <p id="monType" className="w-[75%] text-2xl lg:text-3xl "> Place Holder</p>
        </div>
        <div className="flex w-full textShadow my-10 ">
          <p className="w-[25%] text-2xl lg:text-3xl break-words">Description: </p>
          <p id="monDesc" className="w-[75%] text-2xl lg:text-3xl"></p>
        </div>
        <div className="flex w-full textShadow my-10">
          <p className="w-[25%] text-2xl lg:text-3xl break-words">Location:</p>
          <p id="monLocation" className="w-[75%] text-2xl lg:text-3xl "></p>
        </div>
        <div className="flex w-full textShadow my-10">
          <p className="w-[25%] text-2xl lg:text-3xl break-words">Abilities:</p>
          <p id="monAbilities" className="w-[75%] text-2xl lg:text-3xl "></p>
        </div>
        <div className="flex w-full textShadow my-10">
          <p className="w-[25%] text-2xl lg:text-3xl break-words">Moves:</p>
          <p id="monMoves" className="w-[75%] text-2xl lg:text-3xl overflow-y-scroll max-h-80"></p>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default HomePageComponent