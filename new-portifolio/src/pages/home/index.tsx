import React from "react";
import Footer from "../../components/footer";
import Menu from "../../components/menu";
import './home-style.css'

export default function Home() {
    return (
        <div className="home">
            <header>
                <Menu/>
            </header>
            <main>
                <section className="content-home">
                    <span>Vinicius Takedi</span>
                    <h1>Desenvolvedor full-stack Jr.</h1>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}