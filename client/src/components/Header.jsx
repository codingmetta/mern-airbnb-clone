'use client';

import Logo from './headerSubcomponents/Logo';
import SearchBar from './headerSubcomponents/SearchBar';
import HeaderModRight from './headerSubcomponents/HeaderModRight';
import Subheader from './headerSubcomponents/Subheader';

export default function Header() {
    return (
        <header className="flex flex-col w-full bg-white items-center content-center dark:bg-gray-900 dark:border-gray-700">

            <div className="  w-full pl-[5rem] pr-[6rem] border border-zinc-200 flex flex-wrap items-center justify-between mx-auto pt-[15.5px] pb-[15px]">
                <Logo />
                <SearchBar />
                <HeaderModRight />
            </div>

            <div className=" pb-4 pl-[5rem] pr-[6rem] w-full"> 
                <Subheader />
            </div>
            
        </header>
    );
}

