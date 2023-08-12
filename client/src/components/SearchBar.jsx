'use client';


export default function SearchBar() {
    return (
        <>
            <div className="divide-x min-h-6 flex items-center tracking-[0.0125em] text-[14px] text-zinc-800 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.07)] border border-zinc-200 rounded-full pt-[0.7rem] pb-[0.7rem] pr-2.5 pl-2 ">
                    <div className="pl-4 pr-4 ">Irgendwo</div>
                    <div className=" pl-4 pr-4 ">Eine Woche</div>
                    <div className="pl-4  flex items-center font-thin text-zinc-400">
                        <span className="pr-5">Gäste hinzufügen</span>
                        <button className="rounded-full w-6 h-6 bg-[#FF385C] scale-[1.3]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" strokeWidth={3.5} className="relative scale-[0.95] stroke-white translate-y-1.5 translate-x-1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                        </button>
                    </div>

            </div>
        </>
    );
}