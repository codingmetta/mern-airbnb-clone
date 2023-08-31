import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import LoginModalPlane from "./components/subcomponents/LoginModalPlane";
import RegisterModalPlane from "./components/subcomponents/RegisterModalPlane";

export default function Layout() {
    return (
        <div className="site-wrapper">
            <LoginModalPlane />
            <RegisterModalPlane />
            <Header />
            <main>
            <Outlet />
            </main>
        </div>
    );
}