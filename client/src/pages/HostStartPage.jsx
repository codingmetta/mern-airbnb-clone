'use client';
import { NavLink } from "react-router-dom";


export default function HostStartPage() {
    return (
        <>

            {/*Navigation Bar*/}
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


            {/* Main Section*/}
            <main className="flex flex-col items-center pt-40 gap-40  pl-80 pr-80">

                {/* First Section*/}
                <div className="flex flex-row justify-around gap-4">
                    {/* Left Side*/}
                    <section className="bg-white self-end pb-8 dark:bg-gray-900">

                        <div className="flex flex-col content-center items-center text-center gap-8">

                            <div className="flex flex-col items-center">
                                <h1 className="mb-2 text-4xl font-normal leading-none text-primary">Lege als Gastgeber:in los.</h1>
                                <p className="mb-6 text-4xl font-normal text-gray-900 pr-20 pl-20 leading-10">Das könntest du dir dazuverdienen:</p>
                                <p className="mb-6 text-7xl font-medium text-gray-900 dark:text-gray-400">1.030 €</p>

                                <div className="flex flex-row gap-1 ">
                                    <p className="underline font-normal">7 Nächte
                                    </p>

                                    <p className="font-extralight ">
                                        zum Preis von ca. 147 € pro Nacht
                                    </p>
                                </div>
                            </div>

                            {/* Slider and Label*/}
                            <div className="flex flex-col w-96 gap-6">

                                {/* TODO: onChange handler hinzufügen zu Input */}
                                <div className="slidecontainer">
                                    <input id="not-disabled-range" type="range" min="1" max="100" value="20" className="slider appearance-none cursor-pointer" readOnly />
                                </div>

                                <NavLink>
                                    <label htmlFor="not-disabled-range" className="block font-light mb-2 text-sm text-gray-500 dark:text-white underline">Erfahre, wie wir deine Einkünfte einschätzen.</label>
                                </NavLink>
                            </div>

                            {/* Suchelement*/}
                            <div className="flex flex-row content-center items-center border border-gray-200 rounded-full h-16 pr-16 pl-6 pt-8 pb-8 gap-4 ">
                                <div className="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth={2.5} className="relative scale-[1.3] stroke-primary w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col text-md text-left">
                                    <p className="font-semibold ">Köln</p>
                                    <p className="font-thin text-gray-500">Gesamte Unterkunft • 2 Schlafzimmer</p>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Right Side*/}
                    <section className="rounded-xl w-3/5">
                        <img className="w-full object-cover rounded-xl" src="/images/dummy-card.png" alt="Google Standort Karte" />
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

                <div className="flex flex-col items-center text-center ">
                    <img className="w-48 h-auto object-cover" src="/images/aircover.png" alt="Abbildung von Aircover Logo" />
                    <p className="text-5xl">
                        Lege mit dem Rundum-Schutz als Gastgeber:in los
                    </p>
                </div>


            </main>

            <footer className="p-6 bg-gray-200 items-center flex flex-col pl-80 pr-80 w-full">

                <div className="upper-footer border flex flex-col">
                    <div className="flex flex-row border border-gray-800">

                        <div className="border border-gray-800 text-4xl w-1/2">
                            Antworten auf deine Fragen
                        </div>

                        {/*Accordion*/}
                        <div className="border border-gray-800 w-1/2 text-2xl">

                            <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                                <h2 id="accordion-flush-heading-1">
                                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="true" aria-controls="accordion-flush-body-1">
                                        <span className="font-light">
                                            Eignet sich meine Unterkunft für Airbnb?
                                        </span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>

                                <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                                    <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                                        </p>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                                    </div>
                                </div>

                                <h2 id="accordion-flush-heading-2">
                                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                                    <span className="font-light">
                                            Muss ich ständig Gäste aufnehmen?
                                        </span>
                                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>

                                <div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
                                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                                        <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                                    </div>
                                </div>

                                <h2 id="accordion-flush-heading-3">
                                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                                    <span className="font-light">
                                            Wie intensiv soll ich mit Gästen interagieren?
                                        </span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                        <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                            <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                            <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <h2 id="accordion-flush-heading-4">
                                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-4" aria-expanded="false" aria-controls="accordion-flush-body-4">
                                    <span className="font-light">
                                            Welche Tipps gibt es dafür, ein:e großartige:r Gastgeber:in auf Airbnb zu sein?
                                        </span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-flush-body-4" className="hidden" aria-labelledby="accordion-flush-heading-4">
                                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                        <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                            <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                            <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <h2 id="accordion-flush-heading-5">
                                    <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-5" aria-expanded="false" aria-controls="accordion-flush-body-4">
                                    <span className="font-light">
                                            Welche Gebühren berechnet Airbnb?
                                        </span>
                                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                <div id="accordion-flush-body-5" className="hidden" aria-labelledby="accordion-flush-heading-5">
                                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                        <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                                            <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                            <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="border border-gray-800">Banner</div>

                </div>
                <div className="lower-footer">

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

                </div>

            </footer>
        </>
    );
}