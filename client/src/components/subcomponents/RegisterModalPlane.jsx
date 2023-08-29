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


    async function registerUser(ev) {
        ev.preventDefault();

        try {
            await axios.post('/register', {
                firstname,
                lastname,
                email,
                password
            });
            alert('Du hast dich erfolgreich registriert. Du kannst dich nun einloggen!')
        } catch (e) {
            alert('Oops! Diese E-Mailadresse existiert bereits.')
        }
    };
    return (
        <>
            <div id="defaultModalRegister" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 bg-gray-400/50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-lg max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        {/*Modal Header Section*/}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl p-2  font-semibold text-gray-900 dark:text-white">
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
                                        onChange={ev => setLastname(ev.target.value)}
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
                                        onChange={ev => setFirstname(ev.target.value)}
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
                                        onChange={ev => setEmail(ev.target.value)}
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
                                        onChange={ev => setPassword(ev.target.value)}
                                        id="password-register"
                                        placeholder="*******"
                                        required
                                        type="password"
                                    />
                                </div>

                            </div>

                            {/*Modal Submit Section*/}
                            <div className="flex flex-col items-center pb-6 ">
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

                            <div className="flex flex-col items-start justify-between  border-t rounded-t dark:border-gray-600">
                                <div className="pl-4 pr-4 pt-6 pb-2 w-full rounded-b  dark:border-gray-600">
                                    <Button type="button" className=" bg-white border-black w-full text-gray-900 focus:ring-2 focus:ring-primary/50 focus:outline-none " data-modal-hide="defaultModalRegister">
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            x="0px" 
                                            y="0px" 
                                            className="w-6 h-6 mr-32 -ml-32" 
                                            viewBox="0 0 48 48">
                                            <path fill="#1877f2" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
                                        </svg>
                                        Mit Facebook fortfahren
                                    </Button>
                                </div>
                                <div className=" pl-4 pr-4 pt-1 pb-2 w-full rounded-b  dark:border-gray-600">
                                    <Button type="button" className="bg-white border-black w-full text-gray-900 focus:ring-2 focus:ring-primary/50 focus:outline-none " data-modal-hide="defaultModalRegister">
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            x="0px" 
                                            y="0px" 
                                            className="w-6 h-6 mr-32 -ml-36" 
                                            viewBox="0 0 56 56">
                                            <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                        </svg>
                                        Mit Google fortfahren
                                    </Button>
                                </div>
                                <div className="pl-4 pr-4 pt-1 pb-4 w-full rounded-b  dark:border-gray-600">
                                    <Button type="submit" className="bg-white border-black w-full text-gray-900 focus:ring-2 focus:ring-primary/50 focus:outline-none " data-modal-hide="defaultModalRegister">
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px" 
                                            y="0px" 
                                            className="w-6 h-6 mr-32 -ml-40" 
                                            viewBox="0 0 32 32">
                                            <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
                                        </svg>
                                        Mit Apple fortfahren
                                    </Button>
                                </div>


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
