import React from 'react'
import './App.css'


import Navbar from './components/navbar/navBar'
import Home from './components/home/home'
import Sobre from './components/sobre/sobre'
import Skills from './components/skills/skills'
import Projetos from './components/projetos/projetos'
import Contato from './components/contact/contact'
import Footer from './components/footer/footer'



function App() {

    return (
      <div className="App">
        <Navbar />
        <Home />
        <Sobre />
        <Skills />
        <Projetos />
        <Contato />
        <Footer />
      </div>
    );
  
}



export default App;