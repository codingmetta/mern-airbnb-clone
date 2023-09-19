import { NavLink } from "react-router-dom";

export default function ProfitExampler() {
    return (
        <section className="profitexampler-layout">
            <section className="bg-white self-end pb-8 dark:bg-gray-900">

                <div className="flex flex-col content-center items-center text-center gap-8">

                    <div className="flex flex-col items-center">
                        <h1 className="mb-2 text-4xl font-normal leading-none text-primary">Lege als Gastgeber:in los.</h1>
                        <p className="mb-6 text-4xl font-normal text-gray-900 pr-20 pl-20 leading-10">Das könntest du dir dazuverdienen:</p>
                        <p className="mb-6 text-7xl font-medium text-gray-900 dark:text-gray-400">1.030 €</p>

                        <div className="flex flex-row gap-1 ">
                            <p className="underline font-normal">
                                7 Nächte
                            </p>

                            <p className="font-extralight ">
                                zum Preis von ca. 147 € pro Nacht
                            </p>
                        </div>
                    </div>


                    <div className="flex flex-col w-96 gap-6">

                        {/* TODO: onChange handler hinzufügen zu Input */}
                        <div className="slidecontainer">
                            <input id="not-disabled-range" type="range" min="1" max="100" value="20" className="slider appearance-none cursor-pointer" readOnly />
                        </div>

                        <NavLink>
                            <label htmlFor="not-disabled-range" className="slider-info">Erfahre, wie wir deine Einkünfte einschätzen.</label>
                        </NavLink>
                    </div>

                    <div className="container-profit-search">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 28 28"
                            strokeWidth={2.5}
                            className="relative scale-[1.3] stroke-primary w-4 h-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>

                        <div className="flex flex-col text-md text-left">
                            <p className="font-semibold ">Köln</p>
                            <p className="font-thin text-gray-500">Gesamte Unterkunft • 2 Schlafzimmer</p>
                        </div>

                    </div>
                </div>
            </section>
            <img
                className="profitexampler-img"
                src="/images/dummy-card.png"
                alt="Dummy Google Standort Karte"
            />
        </section>
    );
}