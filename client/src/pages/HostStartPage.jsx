'use client';
import { NavLink } from "react-router-dom";
import ProfitExampler from "../components/ProfitExampler";
import JumboCard from "../components/JumboCard";
import AirCover from "../components/airCover";
import FAQSection from "../components/FAQSection";


export default function HostStartPage() {
    return (
        <>
            <header className="bg-white fixed top-0 pb-4 pt-4 pl-80 pr-80 w-full">
                <nav className="flex flex-row items-center justify-between container mx-auto ">
                    <NavLink
                        to="/"
                        className="">
                        <svg xmlns="http://www.w3.org/2000/svg" className="pl-px h-4 mr-4 stroke-primary -rotate-90   translate-x-1.5 translate-y-0.5 scale-[2.4]" fill="none" viewBox="0 0 24 24" strokeWidth={1.13} >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </NavLink>

                    <div className="flex flex-row items-center gap-6">
                        <p className="font-medium">Bist du bereit, als Gastgeber:in loszulegen?</p>
                        <button className="flex tracking-wide h-12 items-center gap-2 bg-[#e41d57] font-light text-white text-lg rounded-lg pt-2 pb-2 pl-6 pr-6" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 scale-[1.2]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
                            </svg>
                            Airbnb-Starthilfe
                        </button>
                    </div>
                </nav>
            </header>


            <main className="hostpage-main-layout">

                <ProfitExampler />

                <JumboCard />

                <AirCover />

            </main>

            <footer className="hostpage-footer-layout">

                <FAQSection />

                <section className="lower-footer">

                    <div className="upper-lower-footer content-center text-sm font-thin leading-6 flex gap-10 border border-gray-400">

                        <div className="unterstützen">
                            <ul>
                                <li className="font-medium">Unterstützung</li>
                                <li>Hilfe-Center </li>
                                <li>AirCover</li>
                                <li>Gegen Diskriminierung</li>
                                <li>Unterstützung von Menschen mit Behinderung</li>
                                <li>Stornierungsmöglichkeiten</li>
                                <li>Nachbarschaft: Problem melden</li>
                            </ul>

                        </div>

                        <div className="gastgeben">
                            <ul>
                                <li className="font-medium">Gastgeben</li>
                                <li>Als Gastgeber:in loslegen</li>
                                <li>AirCover für Gastgeber:innen</li>
                                <li>Infos für Gastgeber:innen</li>
                                <li>Community-Forum</li>
                                <li>Verantwortungsvolles Gastgeben</li>

                            </ul>
                        </div>

                        <div className="airbnb">
                            <ul>
                                <li className="font-medium">Airbnb</li>
                                <li>Pressebereich</li>
                                <li>Neue Funktionen</li>
                                <li>Karriere</li>
                                <li>Investoren</li>
                                <li>Geschenkkarten</li>
                                <li>Airbnb.org: Katastrophenhilfe</li>
                            </ul>
                        </div>
                    </div>

                    <div className="low-lower-footer flex justify-between">

                        <div>
                            © 2023 Airbnb, Inc.· Datenschutz · Nutzungsbedingungen · Sitemap · Angaben zum Unternehmen
                        </div>

                        <div>
                            <p>Deutsch(DE)</p>
                        </div>


                    </div>

                </section>

            </footer>
        </>
    );
}