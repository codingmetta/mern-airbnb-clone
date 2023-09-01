import LoginModalPlane from "./components/LoginModalPlane";
import RegisterModalPlane from "./components/RegisterModalPlane";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";


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