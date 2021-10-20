import React from "react";
import Footer from "../../components/footer";
import Menu from "../../components/menu";
import './home-style.css';
import japanese from '../../assets/images/home-image.jpg';

export default function Home() {
    return (
        <div className="home">
            <header>
                <Menu />
            </header>
            <main>
                <section className="content-home">
                    <div className="title-first-home">
                        <div className="title-home">
                            <span>Vinicius Takedi</span>
                            <h1>Desenvolvedor full-stack Jr.</h1>
                            <p>Olá! Seja bem-vindo(a) ao meu portifólio. Sou o Vinicius e neste portifólio você irá
                                conhecer um pouco sobre mim. Navegue sobre o menu e sinta-se avontade de me mandar
                                uma mensagem, seja por e-mail ou telefone.
                            </p>
                        </div>
                    </div>
                    <div className="image-first-home">
                        <div className="opacity-background">

                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}