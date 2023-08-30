'use client';

import Logo from './Logo';
import SearchBar from './SearchBar';
import HeaderModRight from './HeaderModRight';
import Subheader from './Subheader';

export default function Header() {
    return (
        <header className=" flex flex-col w-full bg-white items-center content-center dark:bg-gray-900 dark:border-gray-700">

            <div className="pl-[5rem] pr-[6rem] w-full border border-zinc-200 flex flex-wrap items-center justify-between mx-auto pt-[15.5px] pb-[15.5px]">
                <Logo />
                <SearchBar />
                <HeaderModRight />
            </div>

            <div className="pl-[5rem] pr-[6rem] w-full">
                <Subheader />
            </div>
            
        </header>
    );
}

