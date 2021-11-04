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
                        <h2>Sobre o projeto</h2>
                        <div className="about-details-project">
                            <p id="padding-details-project">
                                A empresa M2S Cars é uma empresa de intermediação de veículos blindados,
                                eles me contrataram como freelancer para fazer um website completo e
                                responsivo. O projeto consiste em doze páginas, além de conter funções
                                como login e cadastro de veículos. Esta foi a minha primeira experiência
                                real no mercado de trabalho.
                            </p>
                            <p id="padding-details-project">
                                O site conta com um front-end desenvolvido com ReactJs e back-end construído no framework LUMEN.
                            </p>
                            <p id="padding-details-project">
                                A principal funcionalidade solicitada pela empresa foi o cadastro de veículos por completo, desde marca,
                                cor, final da placa, até a descrição do veículo com imagens detalhadas.
                            </p>

                            <h3>As principais funcionalidades solicitadas pela M2S Cars:</h3>
                            <ul>
                                <li>Sistema de login</li>
                                <li>Cadastro de veículos</li>
                                <li>Cadastro de marcas de veículos</li>
                                <li>Cadastro de tipos de carrocerias</li>
                                <li id="last-child-padding">Cadastro de administradores</li>
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
                <section className="sec-part">
                    <div className="content-front-end">
                        <div className="about-project-content">
                            <h2 id="title-padding-top">Front-End</h2>
                        </div>
                        <div className="about-details-project">
                            <div className="grid-text-project">
                                <p>
                                    O front-end deste website foi construído em cima da biblioteca ReactJs
                                    com TypeScript. A escolha do TypeScript foi para dar tipagem ao JavaScript,
                                    além de melhorar a qualidade e o entendimento do código.
                                </p>
                                <p>
                                    Além da construção e projeção do front-end, foram utilizados metodologias ágeis,
                                    como SCRUM, metodologias de organização como Trello e organização de código com
                                    versionadores como Git e GitHub.
                                </p>
                                <p >
                                    Para essa etapa do front-end foi utilizada uma semana para a modelagem do website,
                                    contando com o wireframe e  protótipo de alta fidelidade, ambos foram feitos no
                                    figma. E para a construção do website no React foram utilizados vinte e cinco dias
                                    (três semanas e meia).
                                </p>
                            </div>
                            <h3 id="padding-h3-project">Tecnologias utilizadas nessa etapa:</h3>
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
                    <div className="content-back-end">
                        <div className="about-project-content">
                            <h2 id="title-padding-top">Back-End e Data-base</h2>
                        </div>
                        <div className="about-details-project">
                            <div className="grid-text-project">
                                <p>
                                    1. Para realizar o pedido do cliente, eu achei viável realizar um back-end,
                                    com a tecnologia ASP.NET Core com Entity Framework e autenticação com JWT, além,
                                    do banco de dados feito em Sql Server e diagramas e modelagem feitas no draw.io.
                                    Toda a API foi feita, que são tecnologias que tenho conhecimento, porém,
                                    houve um problema na hora da implantação da API no servidor (Tipo da API é a REST).
                                </p>
                                <p>
                                    2. Infelizmente o cliente contratou um serviço de hospedagem o qual o servidor rodava
                                    o Apache Linux, tornando inviável rodar uma API feita em ASP.NET, visto que, o C# e o
                                    Sql Server é da Microsoft e “não roda” no Linux. Então tive que estudar e aprender em duas
                                    semanas como fazer uma API REST em PHP a usar um novo banco de dados, e na escolha surgiu a
                                    oportunidade de utilizar o MySql, para poder rodar no servidor contratado.
                                </p>
                                <p>
                                    3. Em duas semanas eu aprendi a fazer uma API REST em PHP com o framework Lumen, que seria
                                    uma vertente do Laravel, além, de aprender a utilizar um novo banco de dados, como todos os
                                    bancos de dados utilizam o sql como linguagem é bem mais fácil e prático aprender.
                                    Depois de estudar e aprender, tudo foi realizado com sucesso podendo ser implantado no servidor.
                                </p>

                                <p>
                                    4. No geral o propósito foi cumprido, as duas APIs funcionam e excutam as mesmas
                                    requisições, além da autenticação JWT para administradores que funciona igual nas
                                    duas APIs. Com o data-base MySql,
                                </p>
                            </div>
                            <h3 id="padding-h3-project">Tecnologias utilizadas (Back-end):</h3>
                            <ul>
                                <li>Lumen Framework</li>
                                <li>PHP</li>
                                <li>Entity Framework</li>
                                <li>ASP.NET</li>
                                <li>C#</li>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Trello</li>
                            </ul>

                            <h3 id="padding-h3-project">Tecnologias utilizadas (Data-base):</h3>
                            <ul>
                                <li>MySql</li>
                                <li>SQL Server</li>
                                <li>Sql</li>
                                <li>Draw.io</li>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Trello</li>
                            </ul>
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