'use client';

import Logo from '../../components/ui/Logo';
import SearchBar from '../../components/ui/SearchBar';
import LanguageBtn from '../../components/ui/LanguageBtn';
import { NavLink } from 'react-router-dom';
import AvatarMenu from '../../components/AvatarMenu';
import Subheader from '../../components/Subheader';

export default function Header() {
    return (
        <header className="header-layout">

            <div className="upper-navbar-layout">

                <div className="flex-none  collapse md:flex md:visible md:basis-2/12 ">
                    <Logo />
                </div>

                <div className="w-9/12 md:basis-4/12 lg:basis-3/12">
                    <SearchBar />
                </div>

                <div className="w-3/12 flex items-center lg:basis-2/12  gap-1 lg:gap-[1.15rem]">

                    <div className="collapse md:visible md:basis-3/6" >
                        <NavLink
                            to='/host/homes'
                            className="whitespace-nowrap pl-4 text-xs md:text-[0.85rem] tracking-wide font-medium"
                        >
                            Als Gastgeber:in loslegen
                        </NavLink>
                    </div>


                    <div className="collapse md:visible md:basis-3/6">
                        <LanguageBtn />
                    </div>

                    <div className="w-full md:basis-3/6">
                        <AvatarMenu />
                    </div>
                </div>
            </div>

            <div className="lower-navbar-layout">
                <Subheader />
            </div>

        </header>
    );
}

