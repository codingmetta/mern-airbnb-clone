'use client';
import { NavLink } from "react-router-dom";


export default function HostStartPage() {
    return (
        <div className="site-wrapper pl-80 pr-80">


            {/*Navigation Bar*/}
            <nav className="host-navbar sticky">
                <NavLink
                    to="/"
                    className="">
                    <svg xmlns="http://www.w3.org/2000/svg" className="pl-px h-4 mr-4 stroke-primary -rotate-90   translate-x-1.5 translate-y-0.5 scale-[2.4]" fill="none" viewBox="0 0 24 24" strokeWidth={1.13} >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </NavLink>

                <div className="flex items-center gap-6 ">
                    <p className="font-medium">Bist du bereit, als Gastgeber:in loszulegen?</p>
                    <button className="flex tracking-wide h-12 items-center gap-2 bg-[#e41d57] font-light text-white text-lg  rounded-lg pt-2 pb-2 pl-6 pr-6" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 scale-[1.2]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
                        </svg>
                        Airbnb-Starthilfe
                    </button>
                </div>
            </nav>


            {/* Main Section*/}
            <div className="-host-main-section flex flex-col items-center pt-28 gap-32">

                {/* First Section*/}
                <div className="-first-section h-1/3 flex">
                    {/* Left Side*/}
                    <section className="-left-section bg-white dark:bg-gray-900 w-1/2">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-primary">Lege als Gastgeber:in los.</h1>
                            <p className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900">Das könntest du dir dazu verdienen:</p>
                            <p className="mb-8 text-6xl font-extrabold text-gray-900 dark:text-gray-400">1.030 €</p>
                            <div className="font-normal text-l">
                                <div className="underline font-medium">7 Nächte</div>
                                zum Preis von ca. 147 € pro Nacht
                            </div>

                            <div className="flex flex-col space-y-4">


                                <input id="disabled-range" type="range" value="20" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" disabled />
                                <NavLink>
                                    <label htmlFor="disabled-range" className="block mb-2 text-xs text-gray-400 dark:text-white underline">Erfahre, wie wir deine Einkünfte einschätzen.</label>
                                </NavLink>
                            </div>

                            <div className="w-full flex flex-row border border-gray-200 rounded-full gap-3 p-3 h-16">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" strokeWidth={2.5} className="relative scale-[0.95] stroke-primary w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col text-md">
                                    <p className="font-semibold">Köln</p>
                                    <p className="text-gray-500">Gesamte Unterkunft • 2 Schlafzimmer</p>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Right Side*/}
                    <section className="w-1/2 h-auto rounded-xl">
                        <img className="w-auto object-cove rounded-xl" src="/images/dummy-card.png" alt="Google Standort Karte" />
                    </section>

                </div>

                {/* Second Section*/}
                <div className="flex flex-col">

                    <img className="w-full h-auto object-cover rounded-xl" src="/images/banner-second-section.png" alt="Lege als Gastgeber:in los – mit der Airbnb-Starthilfe" />

                    <div className="flex flex-row gap-8 pt-10 pl-8 pr-8">

                        <div className="-text-box">
                            <h3 className="tracking-tight text-xl">Individuelle Beratung durch Superhosts</h3>
                            <p className="font-extralight text-gray-500">
                                Wir weisen neuen Gastgeber:innen wie dir einen Superhost in deiner Gegend zu. Diese Person begleitet dich von deiner ersten Frage bis zu deinem ersten Gast – per Telefon, Videoanruf oder Chat.
                            </p>
                        </div>
                        <div className="-text-box">
                            <h3 className="tracking-tight text-xl">Ein erfahrener Gast für deine erste Buchung
                            </h3>
                            <p className="font-extralight text-gray-500">
                                Bei deiner ersten Buchung hast du die Möglichkeit, einen erfahrenen Gast aufzunehmen. Solche Gäste müssen mindestens drei Aufenthalte mit positiven Bewertungen abgeschlossen haben.</p>

                        </div>
                        <div className="-text-box">
                            <h3 className="tracking-tight text-xl">Spezielle Unterstützung von Airbnb
                            </h3>
                            <p className="font-extralight text-gray-500">
                                Neue Gastgeber:innen erhalten mit nur einem Fingertipp Kontakt zu speziell geschulten Mitarbeiter:innen des Community-Supports. Diese können bei allen Fragen helfen – von Problemen mit dem Airbnb-Konto bis hin zur Unterstützung beim Thema Gebühren.</p>

                        </div>
                    </div>

                </div>

                {/* Third Section*/}

                <div>
                    <img className="w-12 h-auto object-cover" src="/images/aircover.png" alt="Abbildung von Aircover Logo" />
                    <p className="text-6xl">
                        Lege mit dem Rundum-Schutz als Gastgeber:in los
                    </p>
                </div>


            </div>
        </div>
    );
}