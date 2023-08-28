'use client';
import { Button, Label, TextInput } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import { useState } from 'react';
import axios from 'axios';


export default function RegisterModalPlane() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('@gmx.de');
    const [password, setPassword] = useState('');


    async function registerUser(ev){
        ev.preventDefault();

        try {
            await axios.post('/register', {
                firstname,
                lastname,
                email,
                password
            });
            alert ('Du hast dich erfolgreich registriert. Du kannst dich nun einloggen!')
        } catch (e) {
            alert ('Oops! Diese E-Mailadresse existiert bereits.')
        }
    };
    return (
        <>
            <div id="defaultModalRegister" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 bg-gray-400/50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-lg max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        
                        {/*Modal Header Section*/}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl p-2 font-semibold text-gray-900 dark:text-white">
                                Registrieren
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModalRegister">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        {/*Modal Main Section*/}
                        <form className="flex flex-col max-w-lg w-full p-1 gap-2" onSubmit={registerUser}>
                            <div className="p-4 pb-4 space-y-6 ">
                                <div>
                                    <div className="hidden mb-2 block">
                                        <Label
                                            htmlFor="lastname"
                                            value="Nachname"
                                        />
                                    </div>
                                    <TextInput
                                        value={lastname}
                                        onChange={ev =>setLastname(ev.target.value)}
                                        id="lastname"
                                        placeholder="Nachname"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <div className="hidden mb-2 block">
                                        <Label
                                            htmlFor="firstname"
                                            value="Vorname"
                                        />
                                    </div>
                                    <TextInput
                                        value={firstname}
                                        onChange={ev =>setFirstname(ev.target.value)}
                                        id="firstname"
                                        placeholder="Vorname"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div className="pb-6">
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
                                        placeholder="name@gmx.de"
                                        required
                                        type="email"
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="password-register"
                                            value="Passwort eingeben"
                                        />
                                    </div>
                                    <TextInput
                                        value={password}
                                        onChange={ev =>setPassword(ev.target.value)}
                                        id="password-register"
                                        placeholder="*******"
                                        required
                                        type="password"
                                    />
                                </div>
                                
                            </div>

                            {/*Modal Submit Section*/}
                            <div className="flex flex-col items-center pb-6 pt-2">
                                <div className="flex p-4 w-full rounded-b dark:border-gray-600">
                                    <Button type="submit" className="bg-primary w-full shadow-sm shadow-primary/50 text-white focus:ring-2 focus:ring-primary/50 focus:outline-none " data-modal-hide="defaultModalRegister">
                                        Registrieren
                                    </Button>
                                </div>

                                <div className="flex text-sm  items-center justify-between ">
                                    <div className="pr-2">
                                      <div className=" text-primary underline"> Du bist bereits registriert? Hier Einloggen.</div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
