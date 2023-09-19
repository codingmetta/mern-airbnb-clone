import { Avatar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

export default function AvatarMenuLoggedIn() {
    return (
        <>
            <div id="costumDropdown">
                 {/*Dropdown Button*/}
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
                            strokeWidth={2} viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        <Avatar
                            rounded
                            size="md"
                            className="scale-75"
                            img="images/profile-katja.jpg"
                        />
                    </div>
                </button>

                {/*Dropdown Menu*/}
                <div
                    id="dropdownNavbar"
                    className="hidden avatar-dropdown">
                    <ul className="menu-upper-layout" aria-labelledby="dropdownLargeButton">
                        <li>
                            <NavLink
                                to="">
                                <label 
                                className="avatar-menu-item">
                                    Mein Inserate
                                </label>
                            </NavLink>
                        </li>


                        <li>
                            <NavLink
                                to="">
                                <label className="avatar-menu-item">
                                    Meine Buchungen
                                </label>
                            </NavLink>
                        </li>
                    </ul>

                    <div className="py-1">
                        <ul className="menu-lower-layout" >
                            <li>
                            <NavLink
                                to="">
                                <label className="avatar-menu-item">
                                   Ausloggen
                                </label>
                            </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to="">
                                <label className="avatar-menu-item">
                                    Hilfe-Center
                                </label>
                            </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}