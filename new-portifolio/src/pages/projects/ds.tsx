import React from "react";
import Footer from "../../components/footer";
import Menu from "../../components/menu";
import './projects-style.css';
import SiteDs from '../../assets/images/projects/ds.png';
import SiteDs2 from '../../assets/images/projects/ds2.png';

export default function Ds() {
    return (
        <div className="content-project">
            <header>
                <Menu />
            </header>
            <main>
                <section className="about-project">
                    <div className="about-project-content">
                        <h1>Detúlio + Silverio Seguros</h1>
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
                            <img src={SiteDs} alt="web-site-m2s" />
                        </div>
                        <div className="padding-images-project">
                            <img src={SiteDs2} alt="web-site-m2s" />
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
                                    com as tecnologias ASP.NET Core com Entity Framework e autenticação com o JWT, além,
                                    do banco de dados feito no SQLServer, fiz também diagramas e modelagens do banco feitas no draw.io.
                                    Toda a API foi feita em tecnologias que tenho conhecimento, porém,
                                    houve um problema na hora da implantação da API no servidor (Tipo da API é a REST).
                                </p>
                                <p>
                                    2. Infelizmente o cliente contratou um serviço de hospedagem o qual o servidor rodava
                                    o Apache Linux, tornando inviável rodar uma API feita em ASP.NET, visto que, o C# e o
                                    Sql Server é da Microsoft e “não roda” no Linux. Então tive que estudar e aprender em duas
                                    semanas como fazer uma API REST em PHP e usar um novo banco de dados. Na escolha surgiu a
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
                            <div className="grid-tecnologies">
                                <div className="flex-tecnologies">
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
                                </div>
                                <div className="flex-tecnologies">
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
                        </div>
                    </div>
                    <div className="content-back-end">
                        <div className="about-project-content">
                            <h2 id="title-padding-top">Server</h2>
                        </div>
                        <div className="about-details-project">
                            <div className="grid-text-project">
                                <p>
                                    Para a implantação do front-end, back-end e do banco de dados no servidor, foi uma nova missão,
                                    visto que, eu nunca tive contato com essa parte de servidores. Para aprender, tive
                                    que buscar informações de como compilar apps React para produção, sistema de rotas, e como
                                    implementar uma API no servidor juntamente com o banco de dados entre outras coisas.
                                </p>
                                <p>
                                    Depois de aprender todos os tópicos, foi a hora de produzir. Baixei o FileZilla para subir os
                                    arquivos no servidor por FTP, arquivos do front-end (ReactJs) e back-end (PHP-Lumen), e utilizei
                                    o CPanel (O servidor contratado tinha o CPanel) para
                                    definir e montar o banco de dados, além dos e-mails do cliente.
                                </p>
                            </div>
                            <h3 id="padding-h3-project">Tecnologias utilizadas (Server):</h3>
                            <ul>
                                <li>Apache</li>
                                <li>Linux</li>
                                <li>CPanel</li>
                                <li>Filezilla</li>
                            </ul>
                        </div>
                    </div>
                    <div className="button-access-website">
                        <a href="http://detuliosilverioseguros.com.br" target="_blank" rel="noopener noreferrer">Ir para D+S!</a>
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}