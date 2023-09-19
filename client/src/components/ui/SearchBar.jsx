'use client';


export default function SearchBar() {
    return (
        <>
            <form>
                <label htmlFor="default-search" className="sr-only">Suche</label>
                <div className="relative">
                    <input 
                    type="search" 
                    id="default-search" 
                    className="block w-full h-14 md:h-12 pt-[0.7rem] pb-[0.7rem] pl-6 text-sm truncate font-light text-gray-700 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.07)]  border border-gray-200 rounded-full  " placeholder="Irgendwo   |   Eine Woche   |   Gäste hinzufügen" required />
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