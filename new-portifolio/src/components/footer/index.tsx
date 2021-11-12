import React from "react";
import { Link } from "react-router-dom";
import './footer-style.css';

export default function Footer() {

    const ScrollTop = () => {
        window.scrollTo(0, 0);
    }

    return(
        <div className="footer">
            <hr />
            <div className="content-informations-footer">
                <div className="information">
                    <h2>Contato -</h2>
                    <span>Meu número e meu email estão disponíveis para contato.
                        Eu prefiro o email para se comunicar, porém, utilize a melhor forma para você.
                    </span>
                    {/* <a href="mailto:viniciustakedi7@gmail.com">viniciustakedi7@gmail.com</a> */}
                    <p>E: viniciustakedi7@gmail.com</p>
                    <p>T: +55 11 95929-8849</p>
                </div>
                <div className="information">
                <h2>Últimos projetos -</h2>
                    <ul>
                        <li><Link to="/projeto-m2s" onClick={ScrollTop}>M2S Cars</Link></li>
                        <li><Link to="/projeto-detuliosilverio" onClick={ScrollTop}>D + S Seguros</Link></li>
                        <li><Link to="/" onClick={ScrollTop}>DW Blindagens</Link></li>
                    </ul>
                </div>
                <div className="information">
                <h2>Disponibilidade -</h2>
                    <span>Estou diponível para responder emails e mensagens principalmente em dias úteis,
                        porém, sempre fico de olho nos meios de contatos mesmo em dias não úteis como sábado e domingo.
                    </span>
                </div>
                <div className="information">
                <h2>Social -</h2>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/vinicius-takedi/" target="blank_">LinkedIn</a></li>
                        <li><a href="https://github.com/viniciustakedi/" target="blank_">GitHub</a></li>
                    </ul>
                </div>
            </div>
            <div className="content-footer">
                <span>© Vinicius Takedi 2021. Feito em São Paulo, Brasil.</span>
            </div>
        </div>
    );
}