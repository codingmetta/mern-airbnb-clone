'use client';
import { Link, NavLink } from "react-router-dom";
import { Button } from "flowbite-react";

export default function Subheader() {
    const activeStyles = {
         color: "black",
         borderColor: "black"

    }

    return (
        <>
            <div className="max-w-full mx-auto dark:bg-gray-700 pt-6">
                <div className="flex items-center">

                    <div className="flex flex-row gap-10 ">

                        <NavLink 
                            to="/"
                            style={({isActive}) => isActive? activeStyles : null}
                            end
                            className="subheader-btn ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6 scale-y-125">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                            </svg>
                            <div className="pb-3 ">
                                Angesagt
                            </div>
                        </NavLink>

                        {/*TODO: 
                         - Restliche Links ergänzen zB /wow oder /tiny-houses 
                         - gesamte NavBar als Route wrappen damit sie sichtbar bleibt
                         - Links in App.jsx hinzufügen
                        */}


                        <NavLink 
                            to="/wow"
                            style={({isActive}) => isActive? activeStyles : null}
                            className="subheader-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                            </svg>

                            <div className="pb-3">
                                Wow!
                            </div>
                        </NavLink>



                        <NavLink className="subheader-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                            </svg>

                            <div className="pb-3">
                                Tiny Houses
                            </div>
                        </NavLink>


                        <NavLink className="subheader-btn">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.225}
                                viewBox="0 0 24 24"
                                className="w-6 h-6 scale-[1.1]" >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M2 20a2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1M2 16a2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1M15 12V4.5a1.5 1.5 0 013 0M9 12V4.5a1.5 1.5 0 00-3 0M15 5H9M9 10h6" />
                            </svg>

                            <div className="pb-3">
                                Tolle Pools
                            </div>
                        </NavLink>

                        <NavLink className="subheader-btn">
                            <svg
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                className="w-6 h-6">
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={32}
                                    d="M384 240H96V136a40.12 40.12 0 0140-40h240a40.12 40.12 0 0140 40v104zM48 416V304a64.19 64.19 0 0164-64h288a64.19 64.19 0 0164 64v112"
                                />
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={32}
                                    d="M48 416v-8a24.07 24.07 0 0124-24h368a24.07 24.07 0 0124 24v8M112 240v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16M256 240v-16a32.09 32.09 0 0132-32h80a32.09 32.09 0 0132 32v16"
                                />
                            </svg>

                            <div className="pb-3">
                                Zimmer
                            </div>
                        </NavLink>

                        <NavLink className="subheader-btn">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                viewBox="0 0 24 24"
                                className="w-6 h-6" >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M17.553 16.75a7.5 7.5 0 00-10.606 0M18 3.804A6 6 0 009.804 6l10.392 6A6 6 0 0018 3.804z" />
                                <path d="M16.732 10C18.39 7.13 18.957 4.356 18 3.804 17.043 3.252 14.925 5.13 13.268 8M15 9l-3 5.196M3 19.25A2.4 2.4 0 014 19a2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 012 1 2.4 2.4 0 002 1 2.4 2.4 0 002-1 2.4 2.4 0 012-1 2.4 2.4 0 011 .25" />
                            </svg>

                            <div className="pb-3">
                                Direkt am Strand
                            </div>
                        </NavLink>

                        <NavLink className="subheader-btn">
                            <svg
                                viewBox="0 0 576 512"
                                fill="currentColor"
                                stroke="white"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={22}
                                className="w-6 h-6" >
                                <path d="M306.8 6.1c-11.2-8.1-26.4-8.1-37.6 0l-176 128c-11.2 8.2-15.9 22.6-11.6 35.8S98.1 192 112 192h16v73c1.7 1 3.3 2 4.9 3.1 18 12.4 40.1 20.3 59.2 20.3 21.1 0 42-8.5 59.2-20.3 22.1-15.5 51.6-15.5 73.7 0 18.4 12.7 39.6 20.3 59.2 20.3 19 0 41.2-7.9 59.2-20.3 1.5-1 3-2 4.5-2.9l-.3-73.2H464c13.9 0 26.1-8.9 30.4-22.1s-.4-27.6-11.6-35.8l-176-128zm-37.3 303.8C247 325.4 219.5 336 192 336c-26.9 0-55.3-10.8-77.4-26.1-11.9-8.5-28.1-7.8-39.2 1.7-14.4 11.9-32.5 21-50.6 25.2-17.2 4-27.9 21.2-23.9 38.4s21.2 27.9 38.4 23.9c24.5-5.7 44.9-16.5 58.2-25 29 15.6 61.5 25.9 94.5 25.9 31.9 0 60.6-9.9 80.4-18.9 5.8-2.7 11.1-5.3 15.6-7.7 4.5 2.4 9.7 5.1 15.6 7.7 19.8 9 48.6 18.9 80.4 18.9 33 0 65.5-10.3 94.5-25.8 13.4 8.4 33.7 19.3 58.2 25 17.2 4 34.4-6.7 38.4-23.9s-6.7-34.4-23.9-38.4c-18.1-4.2-36.2-13.3-50.6-25.2-11.1-9.5-27.3-10.1-39.2-1.7-22 15.2-50.5 26-77.4 26-27.5 0-55-10.6-77.5-26.1-11.1-7.9-25.9-7.9-37 0zM384 448c-27.5 0-55-10.6-77.5-26.1-11.1-7.9-25.9-7.9-37 0-22.5 15.5-50 26.1-77.5 26.1-26.9 0-55.3-10.8-77.4-26.1-11.9-8.5-28.1-7.8-39.2 1.7-14.4 11.9-32.5 21-50.6 25.2-17.2 4-27.9 21.2-23.9 38.4s21.2 27.9 38.4 23.9c24.5-5.7 44.9-16.5 58.2-25 29 15.6 61.5 25.9 94.5 25.9 31.9 0 60.6-9.9 80.4-18.9 5.8-2.7 11.1-5.3 15.6-7.7 4.5 2.4 9.7 5.1 15.6 7.7 19.8 9 48.6 18.9 80.4 18.9 33 0 65.5-10.3 94.5-25.8 13.4 8.4 33.7 19.3 58.2 25 17.2 4 34.4-6.7 38.4-23.9s-6.7-34.4-23.9-38.4c-18.1-4.2-36.2-13.3-50.6-25.2-11.1-9.4-27.3-10.1-39.2-1.7-22 15.2-50.5 26-77.4 26z" />
                            </svg>

                            <div className="pb-3 ">
                                Hausboote
                            </div>
                        </NavLink>
                        <NavLink className="subheader-btn">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                className="w-6 h-6" >
                                <path d="M.036 3.314a.5.5 0 01.65-.278l1.757.703a1.5 1.5 0 001.114 0l1.014-.406a2.5 2.5 0 011.857 0l1.015.406a1.5 1.5 0 001.114 0l1.014-.406a2.5 2.5 0 011.857 0l1.015.406a1.5 1.5 0 001.114 0l1.757-.703a.5.5 0 11.372.928l-1.758.703a2.5 2.5 0 01-1.857 0l-1.014-.406a1.5 1.5 0 00-1.114 0l-1.015.406a2.5 2.5 0 01-1.857 0l-1.014-.406a1.5 1.5 0 00-1.114 0l-1.015.406a2.5 2.5 0 01-1.857 0L.314 3.964a.5.5 0 01-.278-.65zm0 3a.5.5 0 01.65-.278l1.757.703a1.5 1.5 0 001.114 0l1.014-.406a2.5 2.5 0 011.857 0l1.015.406a1.5 1.5 0 001.114 0l1.014-.406a2.5 2.5 0 011.857 0l1.015.406a1.5 1.5 0 001.114 0l1.757-.703a.5.5 0 11.372.928l-1.758.703a2.5 2.5 0 01-1.857 0l-1.014-.406a1.5 1.5 0 00-1.114 0l-1.015.406a2.5 2.5 0 01-1.857 0l-1.014-.406a1.5 1.5 0 00-1.114 0l-1.015.406a2.5 2.5 0 01-1.857 0L.314 6.964a.5.5 0 01-.278-.65zm0 3a.5.5 0 01.65-.278l1.757.703a1.5 1.5 0 001.114 0l1.014-.406a2.5 2.5 0 011.857 0l1.015.406a1.5 1.5 0 001.114 0l1.014-.406a2.5 2.5 0 011.857 0l1.015.406a1.5 1.5 0 001.114 0l1.757-.703a.5.5 0 11.372.928l-1.758.703a2.5 2.5 0 01-1.857 0l-1.014-.406a1.5 1.5 0 00-1.114 0l-1.015.406a2.5 2.5 0 01-1.857 0l-1.014-.406a1.5 1.5 0 00-1.114 0l-1.015.406a2.5 2.5 0 01-1.857 0L.314 9.964a.5.5 0 01-.278-.65zm0 3a.5.5 0 01.65-.278l1.757.703a1.5 1.5 0 001.114 0l1.014-.406a2.5 2.5 0 011.857 0l1.015.406a1.5 1.5 0 001.114 0l1.014-.406a2.5 2.5 0 011.857 0l1.015.406a1.5 1.5 0 001.114 0l1.757-.703a.5.5 0 11.372.928l-1.758.703a2.5 2.5 0 01-1.857 0l-1.014-.406a1.5 1.5 0 00-1.114 0l-1.015.406a2.5 2.5 0 01-1.857 0l-1.014-.406a1.5 1.5 0 00-1.114 0l-1.015.406a2.5 2.5 0 01-1.857 0l-1.757-.703a.5.5 0 01-.278-.65z" />
                            </svg>

                            <div className="pb-3">
                                Direkt am See
                            </div>
                        </NavLink>
                        <NavLink className="subheader-btn">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6" >
                                <path d="M12 5a2 2 0 012 2c0 .24-.04.47-.12.69C17.95 8.5 21 11.91 21 16H3c0-4.09 3.05-7.5 7.12-8.31-.08-.22-.12-.45-.12-.69a2 2 0 012-2m10 14H2v-2h20v2M12 9.5c-3.11 0-5.75 1.89-6.66 4.5h13.32c-.91-2.61-3.55-4.5-6.66-4.5z" />
                            </svg>

                            <div className="pb-3">
                                Airbnb Luxe
                            </div>
                        </NavLink>

                        <NavLink className="subheader-btn">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6">
                                <path d="M3 20h18a1 1 0 00.864-1.504l-7-12c-.359-.615-1.369-.613-1.729 0L9.866 12.1l-1.02-1.632A.998.998 0 008 10h-.001a1 1 0 00-.847.47l-5 8A1 1 0 003 20zM14 8.985L19.259 18h-5.704l-2.486-3.987L14 8.985zm-5.999 3.9L11.197 18H4.805l3.196-5.115zM6 8c1.654 0 3-1.346 3-3S7.654 2 6 2 3 3.346 3 5s1.346 3 3 3zm0-4a1 1 0 110 2 1 1 0 010-2z" />
                            </svg>

                            <div className="pb-3">
                                Mit Aussicht
                            </div>
                        </NavLink>

                        <NavLink className="subheader-btn">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                className="w-6 h-6" >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M20 17.5 A2.5 2.5 0 0 1 17.5 20 A2.5 2.5 0 0 1 15 17.5 A2.5 2.5 0 0 1 20 17.5 z" />
                                <path d="M6 8v11a1 1 0 001.806.591L11.5 14.5v.055" />
                                <path d="M6 8h15l-3.5 7-7.1-.747a4 4 0 01-3.296-2.493L4.251 4.63A1 1 0 003.323 4H2" />
                            </svg>

                            <div className="pb-3">
                                Auf dem Land
                            </div>
                        </NavLink>

                        <NavLink className="subheader-btn">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6">
                                <path d="M12 3L3 8.2V21h6l2.9-3 3.1 3h6V8.2L12 3M7.9 20v-6l3 3-3 3m1-7h6l-3 3-3-3m7 7l-3-3 3-3v6m-.9-9H8.8V9H15v2z" />
                            </svg>

                            <div className="pb-3">
                                Bauernhöfe
                            </div>
                        </NavLink>

                        <NavLink className="subheader-btn">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                className="w-6 h-6" >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M18 5.5 A6 2.5 0 0 1 12 8 A6 2.5 0 0 1 6 5.5 A6 2.5 0 0 1 18 5.5 z" />
                                <path d="M18 5.5v4.626a1.415 1.415 0 011.683 2.18l-.097.108L18 14v4c0 1.61-2.54 2.925-5.725 2.997L12 21c-3.314 0-6-1.343-6-3v-2l-1.586-1.586A1.414 1.414 0 016 12.127V5.5M10 12.5V14M14 16v1" />
                            </svg>

                            <div className="pb-3">
                                Blockhütten
                            </div>
                        </NavLink>

                        <NavLink className="subheader-btn">

                            <svg
                                viewBox="0 0 640 512"
                                fill="currentColor"
                                className="w-6 h-6">
                                <path d="M288 48c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v144h40v-72c0-13.3 10.7-24 24-24s24 10.7 24 24v72h24c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48V48zm64 32v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16zm16 80c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32zm-16 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16zm176-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32zm-16 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16zM224 160c0 6-1 11-2 16 20 14 34 38 34 64 0 45-36 80-80 80h-16v160c0 18-15 32-32 32-18 0-32-14-32-32V320H80c-45 0-80-35-80-80 0-26 13-50 33-64-1-5-1-10-1-16 0-53 42-96 96-96 53 0 96 43 96 96z" />
                            </svg>
                            <div className="pb-3">
                                Design
                            </div>
                        </NavLink>

                        <NavLink className="subheader-btn">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                className="w-6 h-6" >
                                <path
                                    fillRule="evenodd"
                                    d="M14.763.075A.5.5 0 0115 .5v15a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V14h-1v1.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5V10a.5.5 0 01.342-.474L6 7.64V4.5a.5.5 0 01.276-.447l8-4a.5.5 0 01.487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V15h2V1.309l-7 3.5V15z"
                                />
                                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                            </svg>

                            <div className="pb-3">
                                Anwesen
                            </div>
                        </NavLink>

                        <NavLink className="subheader-btn">
                            <svg
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                className="w-6 h-6">
                                <path d="M414.56 94.92V80a16 16 0 00-16-16H113.44a16 16 0 00-16 16v14.92c-1.46 11.37-9.65 90.74 36.93 144.69 24.87 28.8 60.36 44.85 105.63 47.86V416h-80a16 16 0 000 32h192a16 16 0 000-32h-80V287.47c45.27-3 80.76-19.06 105.63-47.86 46.58-53.95 38.37-133.32 36.93-144.69zm-285.3 3.41a15.14 15.14 0 00.18-2.33h253.12a15.14 15.14 0 00.18 2.33 201.91 201.91 0 010 45.67H129.32a204.29 204.29 0 01-.06-45.67z" />
                            </svg>

                            <div className="pb-3">
                                Weinregionen
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}