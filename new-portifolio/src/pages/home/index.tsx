import React from "react";
import Footer from "../../components/footer";
import Menu from "../../components/menu";
import './home-style.css';
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import FotoTakedi from '../../assets/images/foto-takedi.png';
import { Link } from "react-router-dom";

export default function Home() {

    const ScrollTop = () => {
        window.scrollTo(0, 0);
    }

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
                            <p id="padding-four-rem">Olá! Seja bem-vindo(a) ao meu portifólio. Sou o Vinicius e neste portifólio você irá
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
                                <a href="https://www.linkedin.com/in/vinicius-takedi/" target="_blank" rel="noopener noreferrer"><SiLinkedin id="icon-contact-home" color="#f3f3f3" size="2.5rem" /></a>
                                <a href="https://github.com/viniciustakedi/" target="_blank" rel="noopener noreferrer"><SiGithub id="icon-contact-home" color="#f3f3f3" size="2.5rem" /></a>
                                <a href="mailto:viniciustakedi7@gmail.com"><SiGmail id="icon-contact-home" color="#f3f3f3" size="2.5rem" /></a>
                            </div>
                            <span>Acesse minhas redes sociais ou email para comunicação.</span>
                        </div>
                    </div>
                </section>
                <section className="projects-home">
                    <div className="title-first-home">
                        <div className="title-home">
                            <span>Freelance</span>
                            <h1>Projetos e trabalhos</h1>
                        </div>
                    </div>
                    <div className="projects">
                        <div className="project">
                            <div className="opacity-background-projects">
                                <span>AGO 2021 - ... 2021</span>
                                <h1>DW Blindagens</h1>
                                <h2>Website completo e responsivo</h2>
                                <Link to="/" onClick={ScrollTop}>Conhecer o projeto!</Link>
                            </div>
                        </div>
                        <div className="project">
                            <div className="opacity-background-projects">
                                <span>MAI 2021 - JUL 2021</span>
                                <h1>D+S Seguros</h1>
                                <h2>Website completo e responsivo</h2>
                                <Link to="/" onClick={ScrollTop}>Conhecer o projeto!</Link>
                            </div>
                        </div>
                        <div className="project">
                            <div className="opacity-background-projects">
                                <span>JAN 2021 - ABR 2021</span>
                                <h1>M2S Cars</h1>
                                <h2>Website completo e responsivo</h2>
                                <Link to="/project-m2s" onClick={ScrollTop}>Conhecer o projeto!</Link>
                            </div>
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