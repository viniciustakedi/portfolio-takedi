import React from "react";
import Menu from "../../components/menu";
import './home-style.css'

export default function Home() {
    return (
        <div className="home">
            <header>
                <Menu/>
            </header>
            <main>
                <h1>Main</h1>
            </main>
            <footer>
                <h1>footer</h1>
            </footer>
        </div>
    )
}