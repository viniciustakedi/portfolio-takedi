import React from "react";
import Footer from "../../components/footer";
import Menu from "../../components/menu";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import './home-style.css';
import FotoTakedi from '../../assets/images/foto-takedi.png';

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
                            <p>Entre em contato comigo!</p>
                            <img src={FotoTakedi} alt="foto_takedi" />
                            <div className="buttons-home">
                                <a href="https://www.linkedin.com/in/vinicius-takedi/" target="_blank" rel="noopener noreferrer"><SiLinkedin id="icon-contact-home" color="#f3f3f3" size="2.5rem"/></a>
                                <a href="https://github.com/viniciustakedi/" target="_blank" rel="noopener noreferrer"><SiGithub id="icon-contact-home" color="#f3f3f3" size="2.5rem"/></a>
                                <a href="mailto:viniciustakedi7@gmail.com"><SiGmail id="icon-contact-home" color="#f3f3f3" size="2.5rem"/></a>
                            </div>
                            <span>Acesse minhas redes sociais ou email para comunicação.</span>
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