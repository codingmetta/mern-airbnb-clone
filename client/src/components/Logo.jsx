'use client';

export default function Logo() {
    return (
        <>
            <div className="flex basis-1/6">
                <a href="#" className="nav-site-logo">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="pl-px h-4 mr-4 stroke-primary -rotate-90 translate-x-1.5 scale-[2.4]" fill="none" viewBox="0 0 24 24" strokeWidth={1.13} >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                        <h1 className="pb-px pl-px text-[1.4rem] font-logo text-primary  tracking-[-0.07em] antialiased font-semibold whitespace-nowrap ">airbnb</h1>
                    </div>
                </a>
            </div>
        </>
    );
}