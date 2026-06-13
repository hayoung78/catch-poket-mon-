import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex flex-col">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
export default RootLayout;
