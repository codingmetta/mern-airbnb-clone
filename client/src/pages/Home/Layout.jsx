import LoginModalPlane from "../../components/LoginModalPlane";
import RegisterModalPlane from "../../components/RegisterModalPlane";
import Header from "./Header";
import { Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <>
            <LoginModalPlane />
            <RegisterModalPlane />
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}