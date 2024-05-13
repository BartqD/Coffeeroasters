import Footer from "@/components/ui/footer";
import NavBar from "@/components/ui/nav-bar";
import { Fragment } from "react";

export default function NotFoundPage() {
    return (
        <Fragment>
        <NavBar></NavBar>
        <main className="not-found">
            <h1>Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </main>
        <Footer></Footer></Fragment>
    )
}