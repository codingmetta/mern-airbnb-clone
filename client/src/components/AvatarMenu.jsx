'use client';
import { Avatar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

export default function AvatarMenu() {
    return (

        <div id="costumDropdown">
            <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                data-dropdown-offset-distance="10"
                data-dropdown-offset-skidding="-75"
                className="avatar-menu-btn">
                <div className="avatar-menu-btn-layout">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 fill-none stroke-black scale-125"
                        strokeWidth={2}
                        viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    <Avatar
                        rounded
                        size="md"
                        className="scale-75"
                    />

                </div>
            </button>

            {/*Dropdown Menu*/}
            <div id="dropdownNavbar" 
                    className="hidden avatar-dropdown ">
                    <ul className="menu-upper-layout" aria-labelledby="dropdownLargeButton">

                    {/* Element toggles modal registration */}
                    <li>
                        <label data-modal-target="defaultModalRegister" 
                        data-modal-toggle="defaultModalRegister" 
                        className="avatar-menu-item significant" type="button">
                            Registrieren
                        </label>
                    </li>

                    {/* Element toggles modal Login */}
                    <li>
                        <label data-modal-target="defaultModalLogin"
                         data-modal-toggle="defaultModalLogin"
                         className="avatar-menu-item significant" type="button">
                         Einloggen
                        </label>
                    </li>
                </ul>

                <div className="py-1">
                    <ul className="avatar-items-layout" >
                        <li>
                            <NavLink
                            to="/host/homes">
                                <label className="avatar-menu-item">Als Gastgeber:in loslegen</label>
                            </NavLink>
                        </li>
                        <li>
                            {/*TODO: Link ergänzen */}
                            <NavLink>
                                <label className="avatar-menu-item">Hilfe-Center</label>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}