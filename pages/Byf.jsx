import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx';

export default function Byf() {
    return (
    <div className="flex flex-col min-h-screen"> 
        <div className="max-w-[40rem] mx-auto w-full flex-grow">
            <Header />

            <main className="px-8 space-y-4">
                <div className="pt-4 items-center about">
                    <p className="text-2xl font-bold">Before you follow</p>
                    <p className="text-xs text-gray-500">Stuff you should know before you follow.</p>
                </div>

                <div className="pt-4 flex justify-between items-center about">
                    <p className="text-sm sm:text-lg font-bold">Disclaimer</p>
                </div>

                <div className="border border-black rounded-xl p-3  bg-gray-200 flex justify-center about-box-1">
                    <p className="text-[10px] sm:text-xs justify text-justify">
                        The writer does not have any sort of connection to Lee Donghyuck, Uchinaga Aeri, or any of the other entities mentioned here. This account is strictly for entertainment and roleplaying purposes.
                    </p>
                </div>

                <div className="pt-4 flex justify-between items-center about">
                    <p className="text-sm sm:text-lg font-bold">Before you follow</p>
                </div>

                <div className="border border-black rounded-xl p-3  bg-gray-200 flex justify-center about-box-1">
                    <p className="text-[10px] sm:text-xs justify text-justify">
                        Halo interacts with random tweets and often disappears to touch grass, hence his timeline and DM inactivity. If he ever does something that made you feel uncomfortable, slide into his DMs. He'd be happy to make up for it right away.                    </p>
                </div>

                <div className="pt-4 flex justify-between items-center about">
                    <p className="text-sm sm:text-lg font-bold">From the operator</p>
                </div>

                <div className="border border-black rounded-xl p-3  bg-gray-200 flex justify-center about-box-1">
                    <p className="text-[10px] sm:text-xs justify text-justify">
                        Uses the writer's tag #CLOVE when tweeting out of character. They are of age (20+) and currently in college. All edits posted on this account are made by them unless stated otherwise.                
                    </p>
                </div>
                
            </main>
        </div>
        <Footer />
    </div>
    )
}