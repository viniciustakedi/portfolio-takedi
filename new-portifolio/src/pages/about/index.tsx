import React from "react";
import Footer from "../../components/footer";
import Menu from "../../components/menu";
import './about-style.css';


export default function About() {
    return(
        <div className="about">
            <header>
                <Menu/>
            </header>
            <main>
                <section className="sobre-mim">
                    
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}