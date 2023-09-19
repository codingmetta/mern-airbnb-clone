'use client';

import Logo from './headerSubcomponents/Logo';
import SearchBar from './headerSubcomponents/SearchBar';
import HeaderModRight from './headerSubcomponents/HeaderModRight';
import Subheader from './headerSubcomponents/Subheader';

export default function Header() {
    return (
        <header className="header-layout">

            <div className="upper-navbar-layout">
                <Logo  />
                <SearchBar  />
                <HeaderModRight   />
            </div>

            <div className="lower-navbar-layout"> 
                <Subheader />
            </div>
            
        </header>
    );
}

