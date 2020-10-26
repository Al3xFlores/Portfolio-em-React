import React from 'react'


import './footer.css'




const footer = props => {
    return (
        <div>
            <footer className="page-footer deep-purple darken-1">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Footer Content</h5>
                            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><a  href="#!"><i class="fab fa-linkedin"></i></a></li>
                                <li><a  href="#!"><i class="fas fa-envelope"></i></a></li>
                                <li><a  href="#!"><i class="fab fa-whatsapp-square"></i></a></li>
                                <li><a  href="#!"><i class="fab fa-github-alt"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2020 Copyright Alex Flores
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default footer;