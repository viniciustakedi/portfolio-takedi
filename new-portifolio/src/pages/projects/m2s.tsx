import React from "react";
import Footer from "../../components/footer";
import Menu from "../../components/menu";
import './projects-style.css';
import SiteM2s from '../../assets/images/projects/m2s.png';
import SiteM2s2 from '../../assets/images/projects/m2s2.png';

export default function M2S() {
    return (
        <div className="content-project">
            <header>
                <Menu />
            </header>
            <main>
                <section className="about-project">
                    <div className="about-project-content">
                        <h1>M2S Cars</h1>
                        <h2>Front-End</h2>
                        <div className="front-end-project">
                            <p>
                                O front-end deste website foi construído em cima da biblioteca ReactJs
                                com TypeScript. A escolha do TypeScript foi para dar tipagem ao JavaScript,
                                além de melhorar a qualidade e o entendimento do código.
                            </p>
                            <p>
                                Para essa etapa do front-end foi utilizada uma semana para a modelagem do website,
                                contando com o wireframe e  protótipo de alta fidelidade, ambos foram feitos no
                                figma. E para a construção do website no React foram utilizados vinte e cinco dias
                                (três semanas e meia).
                            </p>
                            <p>
                                Além da construção e projeção do front-end, foram utilizados metodologias ágeis,
                                como SCRUM  e metodologias de organização como Git, GitHub e Trello.
                            </p>
                            <h3>Tecnologias utilizadas nessa etapa:</h3>
                            <ul>
                                <li>ReactJs</li>
                                <li>Yarn</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>TypeScript</li>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Trello</li>
                                <li>Figma</li>
                            </ul>
                        </div>
                    </div>
                    <div className="image-website">
                        <div className="padding-images-project">
                            <img src={SiteM2s} alt="web-site-m2s" />
                        </div>
                        <div className="padding-images-project">
                            <img src={SiteM2s2} alt="web-site-m2s" />
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}