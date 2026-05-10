import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function Home() {

  return (
    <>

    <body className="max-w-[40rem] mx-auto align-center"> 
      <header className="px-8 py-8 flex items-center justify-between">
        <FaStar className="w-4 h-4 text-black" />
        <div className="ml-2 text-black text-sm">
          <ul className="flex space-x-4">
            <li className="hover:cursor-pointer transition hover:scale-105">Home</li>
            <li className='hover:cursor-pointer transition hover:scale-105'>Backstory</li>
            <li className="hover:cursor-pointer transition hover:scale-105 text-bold">문.</li>
          </ul>
        </div>
      </header>

      <main className="px-8 space-y-6">

        <div className=" heading">
          <div className="relative rounded-xl overflow-hidden border border-black">
            <img 
              src="/assets/halo-bg.jpg" 
              className="h-[20rem] w-full object-cover heading-bg" 
            />
            <div className="overlay"> 
              <div className="absolute bottom-8 px-8">
                <h1 className="text-xl font-bold text-white">
                  Meet Haechan
                </h1>
                <p className="text-xs text-white">
                  Get to know Haechan by navigating though the navigation bar or scrolling down!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 py-3 song-player border border-black rounded-3xl flex justify-between items-center">
            <p className="text-xs">Now Playing . . .</p>
            <p className='text-xs text-bold'> Nightclub Love - Matt Maltese</p>
        </div>

        <div className="flex justify-between characters">
          <div className="character-1 aspect-[3/4] border border-black rounded-xl w-[48%]">
            <img src="/assets/halo-1.jpg" className="char-main" />
            <img src="/assets/halo-2.jpg" className="char-hover" />
            <div className="char-name">
              <p className="text-white font-bold absolute bottom-5 px-5">Haechan</p>
            </div>
          </div>
          <div className="character-2 aspect-[3/4] border border-black rounded-xl w-[48%]">
            <img src="/assets/eli-1.jpg" className="char-main" />
            <img src="/assets/eli-2.jpg" className="char-hover" />
            <div className="char-name">
              <p className="text-white font-bold absolute bottom-5 px-5">Giselle</p>
            </div>
          </div>
        </div>
        
      </main>
    </body>
    
    <footer>
        <div className="px-8 py-8 text-center text-xs text-gray-500 ">
          &copy; Site by #BIA. For roleplaying purposes only.
        </div>
    </footer>
    </>
  )
}
