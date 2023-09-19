'use client';


export default function SearchBar() {
    return (

        <>
{/*            <div className="searchbar-layout">
                <span className="md:visible md:pl-2 lg:pl-4 md:pr-2 lg:pr-4 ">Irgendwo</span>
                <span className=" font-thin text-gray-400 whitespace-nowrap md:pl-2 lg:pl-4 md:pr-2 lg:pr-4 ">Eine Woche</span>
                <div className="pl-0 lg:pl-4  flex items-center font-thin text-gray-400">
                    <span className="whitespace-nowrap collapse lg:visible md:pr-5">Gäste hinzufügen</span>
                    <button className="rounded-full md:w-6 md:h-6 bg-primary md:scale-[1.125] lg:scale-[1.3]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" strokeWidth={3.5} className="relative scale-[0.95] stroke-white translate-y-1.5 translate-x-1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
            </div>*/}



            <form className=" basis-full md:basis-4/12 lg:basis-3/12">
                <label htmlFor="default-search" className="sr-only">Suche</label>
                <div className="relative">
                    <input type="search" id="default-search" className="block w-full pt-[0.7rem] pb-[0.7rem] pl-6 text-sm truncate font-light text-gray-700 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.07)]  border border-gray-200 rounded-full  " placeholder="Irgendwo   |   Eine Woche   |   Gäste hinzufügen" required />
                    <button className="absolute right-3 bottom-2.5 rounded-full w-6 h-6 bg-primary md:scale-[1.125] lg:scale-[1.3]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" strokeWidth={3.5} className="relative scale-[0.95] stroke-white translate-y-1.5 translate-x-1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
            </form>
        </>

    );
}