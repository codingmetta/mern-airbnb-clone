import Header from "./components/Header";
import Main from "./components/Main";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="w-full">
            <Header />
            <Main />
            <Outlet />
        </div>
    );
}