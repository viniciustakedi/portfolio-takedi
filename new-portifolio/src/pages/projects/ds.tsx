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
                        <h1>D+S Corretora</h1>
                        <h2>Sobre o projeto</h2>
                        <div className="about-details-project">
                            <p id="padding-details-project">
                                A Detúlio + Silvério é uma assessoria e corretora de seguros, a D+S me chamou
                                para realizar uma reformulação no website da corretora de seguros. O site estava\
                                defasado, tanto a parte estética como a parte funcional.
                            </p>
                            <p id="padding-details-project">
                                Para realizar o front-end foi utilizado o ReactJs com TypeScript e o back-end
                                foi construído no framework Láravel (PHP).
                            </p>
                            <p id="padding-details-project">
                                A principal funcionalidade que a corretora pediu foi para que os clientes pudessem
                                enviar emails via formulários pelo website. Além do design os textos foram reformulados também.
                            </p>

                            <h3>As principais funcionalidades solicitadas pela D+S:</h3>
                            <ul>
                                <li>Envio de formulários por email.</li>
                                <li>Design baseado na estética da corretora.</li>
                                <li>Botões para acessar o whatsapp da corretora.</li>
                                <li id="last-child-padding">Entre outros.</li>
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
                                    O front-end do website foi construído em cima da biblioteca ReactJs
                                    com TypeScript. A escolha do TypeScript foi para dar tipagem ao JavaScript,
                                    além de melhorar a qualidade e o entendimento do código.
                                </p>
                                <p>
                                    Além da construção e plnejamento do front-end, foram utilizados metodologias ágeis,
                                    como SCRUM, metodologias de organização como Trello e organização de código com
                                    versionadores como Git e GitHub.
                                </p>
                                <p >
                                    Para essa etapa do front-end foi utilizado cinco dias para a modelagem do website
                                    (protótipo de alta fidelidade), feito no
                                    figma. E para a construção do website com o React, foram utilizados trinta e cinco dias
                                    (um mês e cinco dias).
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
                            <h2 id="title-padding-top">Back-End</h2>
                        </div>
                        <div className="about-details-project">
                            <div className="grid-text-project">
                                <p>
                                    A principal função do back-end/API é enviar dados de formulários preenchidos pelos usuários/clientes
                                    para o e-mail da corretora. O envio é feito automaticamente após o usuário clicar no botão enviar,
                                    após o clique a API envia os dados preenchidos do formulário para o e-mail das pessoas responsáveis
                                    pelo assunto, podendo ser dados para cotações de seguros, ou para tirar dúvidas de usuários.
                                </p>
                                <p>
                                    Para a construção do back-end foi utilizado o framework Laravel (PHP), o motivo de escolher o Laravel
                                    foi pela sua praticidade, pois ele possui uma biblioteca especialmente para envio de e-mails. O Gmail
                                    foi utilizado para o envio dos e-mails, utilizando o smtp.gmail o envio dos e-mails fica mais prático,
                                    além de ter todo o sistema de criptografia TLS que é necessário para manter a integridade e a segurança
                                    das informações
                                </p>
                            </div>
                            <div className="grid-tecnologies">
                                <div className="flex-tecnologies">
                                    <h3 id="padding-h3-project">Tecnologias utilizadas (Data-base):</h3>
                                    <ul>
                                        <li>PHP</li>
                                        <li>Laravel</li>
                                        <li>SMTP</li>
                                        <li>Gmail</li>
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
                                    O servidor foi contratado antecipadamente pela corretora, e como eu tive experiência de como
                                    colocar um projeto em produção, não foi um problema. A prestadora de serviço só me passou o
                                    login para realizar no FTP e eu consegui subir todos os arquivos no FileZilla.
                                </p>
                                <p>
                                    O único problema foi solicitar o SSL, visto que, a prestadora de serviços não contratou o servidor
                                    web com o certificado, com isso eu solicitei que a corretora pagasse a mais para que o certificado
                                    SSL ficasse disponível, pois, trás mais segurança para o website e API.
                                </p>
                            </div>
                            <h3 id="padding-h3-project">Tecnologias utilizadas (Server):</h3>
                            <ul>
                                <li>Apache</li>
                                <li>Linux</li>
                                <li>FileZilla</li>
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