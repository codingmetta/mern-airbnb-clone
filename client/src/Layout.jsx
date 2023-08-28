import Header from "./components/Header";
import Subheader from "./components/Subheader";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="w-full">
            <Header />
            <Outlet />
        </div>
    );
}