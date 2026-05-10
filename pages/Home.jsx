import { useState, useEffect } from 'react'
import { FaBook, FaHome, FaLock, FaMicroblog, FaStar, FaTwitter } from 'react-icons/fa'
import { PiButterflyFill } from 'react-icons/pi'
import { FaSpotify, FaXTwitter } from "react-icons/fa6";
import Header from '../components/Header.jsx'
import { Link } from 'react-router-dom';


export default function Home() {

  const headingImages = [
    '/assets/halo-bg.jpg',
    '/assets/eli-bg.jpg',
  ];

  const [currentHeading, setCurrentHeading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading((prev) => (prev + 1) % headingImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [headingImages.length]);

  return (
    <>
    <div className="max-w-[40rem] mx-auto align-center"> 
      <Header />  
      <main className="px-8 space-y-6">
        <div className=" heading">
          <div className="relative rounded-xl overflow-hidden border border-black h-[20rem]">
            {headingImages.map((src, index) => (
                  <img 
                    key={src}
                    src={src}
                    className={`heading-bg ${index === currentHeading ? 'active' : 'inactive'}`} 
                  />
                ))}
            <div className="overlay"> 
              <div className="absolute bottom-8 px-8">
                <h1 className="text-xl font-bold text-white">
                  Javier Eloise Maximme Consunji
                </h1>
                <p className="text-xs text-white">
                  Get to know Halo by navigating by exploring the site!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-between items-center characters">
            <p className="text-md font-bold">Characters</p>
            <p className='text-xs text-gray-500'> Click image to view character details.</p>
        </div>

        <div className="flex justify-between characters">
          <Link to="/Halo" className="character-1 aspect-[3/4] border border-black rounded-xl w-[48%]">
            <img src="/assets/halo-1.jpg" className="char-main" />
            <img src="/assets/halo-2.jpg" className="char-hover" />
            <div className="char-name">
                <p className="text-white font-bold absolute bottom-5 px-5">Halo</p>
            </div>
          </Link>

          <Link to="/Eli" className="character-2 aspect-[3/4] border border-black rounded-xl w-[48%]">
            <img src="/assets/eli-1.jpg" className="char-main" />
            <img src="/assets/eli-2.jpg" className="char-hover" />
            <div className="char-name">
              <p className="text-white font-bold absolute bottom-5 px-5">Eli</p>
            </div>
          </Link>
        </div>

        <div className="pt-4 flex justify-between items-center links">
            <p className="text-md font-bold">Links</p>
            <ul className="flex justify-end space-x-4">
              <li className="text-xs text-gray-500 hover:cursor-pointer transition hover:scale-105">
                <a href="https://x.com/tifohsi" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  <FaXTwitter className="w-3 h-3 inline-block mr-1" />
                  Main
                </a>
              </li>
              <li className="text-xs text-gray-500 hover:cursor-pointer transition hover:scale-105">
                <a href="https://x.com/reoksta" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  <FaLock className="w-3 h-3 inline-block mr-1" />
                  Side
                </a>
              </li>
              <li className="text-xs text-gray-500 hover:cursor-pointer transition hover:scale-105">
                <a href="https://open.spotify.com/user/31vn6cuvfhsun3n2qy7dbtpz4awe?si=8fce0bef8fdb457e" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  <FaSpotify className="w-3 h-3 inline-block mr-1" />
                  Spotify
                </a>
              </li>
            </ul>
        </div>
        
      </main>
    </div>
    
    <footer>
        <div className="px-8 py-8 text-center text-xs text-gray-500 ">
          &copy; Site by #BIA. For roleplaying purposes only.
        </div>
    </footer>
    </>
  )
}
