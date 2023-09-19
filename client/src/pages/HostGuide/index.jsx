'use client';
import NavBar from "./NavBar";
import SuperHostCard from "./SuperHostCard";
import AirCover from "./AirCover";
import FAQSection from "./FAQSection";
import FooterNav from "./FooterNav";
import Footer from "../../components/Footer.jsx";
import ProfitExampler from "./ProfitExampler";




export default function index() {
    return (
        <>
            <header className="hostguide-header">
                <NavBar />
            </header>


            <main className="hostguide-body">

                <ProfitExampler />

                <SuperHostCard />

                <AirCover />

            </main>

            <footer className="hostguide-footer">

                <section>
                    <FAQSection />
                </section>

                <section>
                    <FooterNav />
                    <Footer />
                </section>

            </footer>
        </>
    );
}