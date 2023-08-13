'use client';
import { Avatar } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function AvatarMenu() {
    return (
        <>
            {/*Dropdown Button*/}
            <div id="costumDropdown">
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" data-dropdown-offset-distance="10" data-dropdown-offset-skidding="-75" className="flex items-center justify-between rounded-full border md:border shadow-none hover:shadow-md focus:shadow-md md:mr-0 md:hover:bg-transparent md:p-0 md:w-auto dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent  dark:hover:ring-gray-600  dark:hover:shadow-md">
                    <div className="flex items-center flex-wrap pl-3 pr-0 pt-0 pb-0 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-none stroke-black scale-125" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <Avatar 
                            rounded 
                            size="md" 
                            className="scale-75" 
                        />
                    </div>
                </button>

                {/*Dropdown Menu*/}
                <div id="dropdownNavbar" className="z-10  tracking-wide text-sm font-extralight hidden bg-white divide-y divide-gray-100 rounded-xl shadow-[0px_0px_14px_0px_rgba(0,0,0,0.1)] w-56 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400 space-y-1" aria-labelledby="dropdownLargeButton">
                        <li>
                            
                                <label data-modal-target="defaultModalRegister" data-modal-toggle="defaultModalRegister" className="text-sm font-medium text-gray-700 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" type="button">
                                    Registrieren
                                </label>
                            
                        </li>

                        {/*Element toggles modal Login*/}
                        <li>
                        <Link>
                            <label data-modal-target="defaultModalLogin" data-modal-toggle="defaultModalLogin" className="text-sm text-gray-700 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" type="button">
                                Einloggen
                            </label>
                         </Link>
                        </li>
                    </ul>

                    <div className="py-1">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-400 space-y-1" >
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Als Gastgeber:in loslegen</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Hilfe-Center</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </>
    );
}