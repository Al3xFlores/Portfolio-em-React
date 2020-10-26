import React from 'react'
import Card from '../cards/projetos/card'

{/*import bethehero from '../../img/..png'*/ }

const projetos = props => {
    return (
        <div>
            <div className="section purple lighten-5">
                <div className="container">
                    <div className="row">
                        <h3>Meus projetos</h3>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    </div>
                
                </div>
            </div>
            
        </div>
    )
}

export default projetos;