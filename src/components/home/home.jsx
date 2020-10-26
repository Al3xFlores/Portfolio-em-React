import React from 'react';
import './home.css';




const home = props => {
    return (

        <div className='container'>
            <div className="section">
                <div className="row">
                    <h3>Olá, meu nome é Alex.</h3>
                    <h5>Desenvolvedor Full-stack</h5>
                    <a class="waves-effect waves-light btn">Curriculo</a>
                    <a class="waves-effect waves-light  light-blue darken-4 btn">Contato</a>
                    <ul>
                        <li><a href="#!"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="#!"><i class="fas fa-envelope"></i></a></li>
                        <li><a href="#!"><i class="fab fa-whatsapp-square"></i></a></li>
                        <li><a href="#!"><i class="fab fa-github-alt"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default home;