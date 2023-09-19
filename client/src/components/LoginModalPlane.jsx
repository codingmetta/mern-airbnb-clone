'use client';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import React from 'react';
import axios from 'axios';

export default function LoginModalPlane() {

const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
//const [redirect, setRedirect] = React.useState(false);


async function loginUser(ev) {
    ev.preventDefault();

    try {
        await axios.post('/login', {
            email,
            password
            }
        );    
        alert('Du wurdest erfolgreich eingeloggt.');
        //setRedirect(true);  
    } catch (e) {
        alert ('Ups! Falsche E-Mail/Passwort.')
    }
}

    return (
        <>
            <div id="defaultModalLogin" tabIndex="-1" aria-hidden="true" className="fixed hidden top-0 left-0 right-0 z-50  bg-gray-400/50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-lg max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/*Modal Header Section*/}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl p-2 font-semibold text-gray-900 dark:text-white">
                                Login
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModalLogin">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        {/*Modal Main Section*/}
                        <form className="flex flex-col max-w-lg w-full  p-1 gap-2" onSubmit={loginUser}>
                            <div className="p-4 pb-8 space-y-6 border-b ">
                                <div>
                                    <div className="hidden mb-2 block">
                                        <Label
                                            htmlFor="email1"
                                            value="Email-Adresse"
                                        />
                                    </div>
                                    <TextInput
                                        value={email}
                                        onChange={ev =>setEmail(ev.target.value)}
                                        rightIcon={HiMail}
                                        id="email1"
                                        placeholder="@gmx.de"
                                        required
                                        type="email"
                                    />
                                </div>
                                <div>
                                    <div className="hidden mb-2 block">
                                        <Label
                                            htmlFor="password1"
                                            value="Passwort"
                                        />
                                    </div>
                                    <TextInput
                                        value={password}
                                        onChange={ev =>setPassword(ev.target.value)}
                                        id="password1"
                                        placeholder="*******"
                                        required
                                        type="password"
                                    />
                                </div>
                                <div className="flex text-sm  items-center justify-between ">
                                    <div className="hidden flex gap-2 pr-2 items-center ">
                                        <Checkbox id="remember" />
                                        <Label htmlFor="remember" className="text-gray-400 font-medium">
                                            Eingeloggt bleiben
                                        </Label>
                                    </div>
                                    <div className="pr-2">
                                        <div className=" text-primary underline">Registrieren</div>
                                    </div>

                                </div>
                                
                            </div>

                            {/*Modal Submit Section*/}
                            <div className="flex p-4 rounded-b dark:border-gray-600">
                                <Button type="submit" className="bg-primary w-full shadow-sm shadow-primary/50 text-white focus:ring-2 focus:ring-primary/50 focus:outline-none " data-modal-hide="defaultModalLogin">
                                    Einloggen
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}