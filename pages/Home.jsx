import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function Home() {

  return (
    <>
      <header className="px-8 py-8 flex items-center justify-between">
        <FaStar className="w-4 h-4 text-black" />
        <div className="ml-2 text-black text-sm">
          <ul className="flex space-x-4">
            <li className="hover:cursor-pointer transition hover:scale-105">Home</li>
            <li className="hover:cursor-pointer transition hover:scale-105">About</li>
            <li className="hover:cursor-pointer transition hover:scale-105">Contact</li>
          </ul>
        </div>
      </header>

      <main className="w-screen">
        
      </main>
    </>
  )
}
