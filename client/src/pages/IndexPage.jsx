'use client';
import Header from "../components/Header";
import Main from "../components/Main";



export default function IndexPage() {
    return(
        <>
            <div id="page" className="w-full">
                <Header />
                {/*NavBar*/}
                <Main />
                {/*Footer*/}
            </div>
        </>
    );
}