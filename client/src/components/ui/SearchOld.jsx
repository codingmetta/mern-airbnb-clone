export default function SearchOld() {
    return (
        <div className="searchbar-layout">
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
        </div>
    );
}