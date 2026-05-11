import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx';

export default function Eli() {
    return (
    <div className="flex flex-col min-h-screen"> 
        <div className="max-w-[40rem] mx-auto w-full flex-grow">
            <Header />
            {/* Content for Eli goes here */}
        </div>
        <Footer />
    </div>
    )
}