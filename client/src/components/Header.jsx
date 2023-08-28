'use client';

import Logo from './Logo';
import SearchBar from './SearchBar';
import HeaderModRight from './HeaderModRight';
import Subheader from './Subheader';

export default function Header() {
    return (
            <header className="fixed w-full pl-[5rem] pr-[6rem]  bg-white items-center content-center border border-zinc-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="flex flex-wrap items-center justify-between mx-auto pt-[15.5px] pb-[15.5px]">
                    <Logo />
                    <SearchBar />
                    <HeaderModRight />
                </div>
            </header>
    );
}

