import React from "react";
import './../skills/skills.css'
import Cards from '../cards/skills/card'




const skills = props => {
    return (
        <div className="section">
            <div className="container ">
                <div class="row">
                    <h3>Minhas tecnologias</h3>
                  <Cards title={<i class="fab fa-html5"></i>}  info='Olá'  />
                  <Cards title={<i class="fab fa-css3-alt"></i>} info='Olá' />
                  <Cards title={<i class="fab fa-js-square"></i>} info='Olá' />
                  <Cards title={<i class="fab fa-react"></i>} info='Olá' />
                  <Cards title={<i class="fab fa-node"></i>} info='Olá' />
                  <Cards title={<i class="fas fa-database"></i>} info='Olá' />
                  <Cards title={<i class="fab fa-npm"></i>} info='Olá' />
                  <Cards title={<i class="fab fa-github"></i>} info='Olá' />
                </div>


            </div>
        </div>
    )
}

export default skills;