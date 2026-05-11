import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx';

export default function Backstory() {
    return (
    <div className="flex flex-col min-h-screen"> 
        <div className="max-w-[40rem] mx-auto w-full flex-grow">
            <Header />

            <main className="px-8 space-y-4">
                <div className="pt-4 items-center about">
                    <p className="text-2xl font-bold">Backstory</p>
                    <p className="text-xs text-gray-500"> What makes Halo who he is.</p>
                </div>

                <div className="pt-4 flex justify-between items-center about">
                    <p className="text-sm sm:text-lg font-bold">Halo, as he is.</p>
                </div>

                <div className="border border-black rounded-xl p-3  bg-gray-200 flex justify-center about-box-1">
                    <p className="text-[10px] sm:text-xs justify text-justify">
                        Born in Manila, Halo was raised in a loving household under his grandparents' care in Pampanga. Due to his parents' career nature, he was entrustted
                        under the care of his grandparents, who provided him with a loving and supportive environment. Growing up, Halo developed a strong bond with both of his
                        grandparents, so when his parents gave him the opportunity to move with them to Australia,he chose to stay with his grandparents in the Philippines. 
                        <br />
                        <br />
                        Currently, Halo resides in Manila, visiting his grandparents in Pampanga during weekends without fail. Despite the distance, Halo also maintains a strong bond
                        with his parents, who he visits in Australia during holidays.
                    </p>
                </div>

                <div className="pt-4 flex justify-between items-center about">
                    <p className="text-sm sm:text-lg font-bold">Education and Career.</p>
                </div>

                <div className="border border-black rounded-xl p-3  bg-gray-200 flex justify-center about-box-1">
                    <p className="text-[10px] sm:text-xs justify text-justify">
                        Halo is a 4th year Information Technology student. His interest in technology and arts led him to pursue a degree in IT, wishing to become a web developer or a
                        UX/UI designer someday. Occasionally, he takes graphic design commissions which allows him to explore his creativity, and works for his grandparents' cafe business, which has been a family legacy for years.
                    </p>
                </div>

                <div className="pt-4 flex justify-between items-center about">
                    <p className="text-sm sm:text-lg font-bold">The things he loves.</p>
                </div>

                <div className="border border-black rounded-xl p-3  bg-gray-200 flex justify-center about-box-1">
                    <p className="text-[10px] sm:text-xs justify text-justify">
                       Outside of studying, and working, Halo spends his time either watching F1, gaming, or spending time with Nui and Noya, his cats.
                    </p>
                </div>
                
            </main>
        </div>
        <Footer />
    </div>
    )
}