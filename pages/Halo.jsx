import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';    

export default function Halo() {
    return (
        <div className="flex flex-col min-h-screen"> 
            <div className="max-w-[40rem] mx-auto w-full flex-grow">
                <Header />
                
                {/* Profile Header Section */}
                <section id="Profile" className="w-full">
                    <div className="relative w-full aspect-[3/1] overflow-visible rounded-lg mb-18">
                        <img src="assets/halo-header.jpg" alt="Profile Background" className="w-full h-full object-cover rounded-lg" />
                        
                        <div className="absolute inset-0 flex flex-col justify-end p-6 text-black">
                            <img src="assets/halo-icon.jpg" alt="Halo" className="absolute -bottom-16 w-32 h-32 object-cover rounded-full border-4 border-white/85" />
                            <h2 className="absolute -bottom-[6rem] font-bold text-xl">halo</h2>
                            <p className="absolute -bottom-[7rem] text-base">@tifohsi</p>
                        </div>
                    </div>
                </section>

                
                <div id="Content" className="w-full my-2 flex flex-col gap-4 mt-32">
                    <div className="mx-6 p-4 rounded-xl border border-black bg-gray-200">
                            <p className="text-xs">
                                <strong>Full Name:</strong> Harvey Ellois Knoa Consunji <br/>
                                <strong>Nicknames:</strong> Halo, Eli, Knoa <br/>
                                <br/>
                                <strong>Date of Birth:</strong> October 30, 2001 <br/>
                                <strong>Place of Birth:</strong> Melbourne, Australia  <br/>
                                <strong>Current Residency:</strong> Manila, Philippines <br/>
                                <strong>Nationality:</strong> Filipino <br/>
                                <br/>
                                <strong>Civil Status:</strong> Single <br/>
                                <strong>Pronouns:</strong> He/Him/Any <br/>
                                <strong>Sexual Orientation:</strong> Bisexual <br/>
                                <br/>
                                <strong>Occupation:</strong> IT Student, Freelance Graphic Designer & Web Developer <br/>
                                <br/>
                                <strong>Faceclaim:</strong> NCT Haechan or <Link to="/Eli" className="text-blue-500 hover:underline "> aespa Giselle</Link><br/>
                                <strong>Scent:</strong> Jo Malone Wood Sage & Sea Salt <br/>
                                <strong>Personality Traits:</strong> <br/>
                                &ensp; (+) Genuine, Empathetic, Creative <br/>
                                &ensp; (=) Independent, Doubtful, Straightforward, Selfless <br/>
                                &ensp; (-) Stubborn, Reckless, Indecisive <br/>
                            </p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}