import React from 'react'
import "./sobre.css"


function Sobre() {
  return (
    <div>
      <h3 className='nomeJadilson'> 
        Jadilson Pereira Filho
        <img className="face" src="https://github.com/jadilsonf.png" alt=""/>
        <p className='p1'>Começou a tocar guitarra aos 8 anos de idade, hoje com mais de 10 anos de experiência profissional, trabalhou com diversas bandas de forró e baile do RN: Banda The Clássicos, Giullian Monte (DDB), Ferro na Boneca, entre outras. <strong>Hoje é Web Developer e criador dessa aplicação web que você está acessando 😊 possui experiência de 2 anos como autônomo.</strong> </p>
      </h3>
      <div className='instadiv'>
        <a href="https://www.instagram.com/_jadilsonf/" alt="">Insta: @_jadilsonf
        </a>
      </div>      
    </div>
  )
}

export default Sobre