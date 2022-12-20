import React from 'react'
import "./inicio.css"

function Inicio() {
  return (
    <div className='ini'>
      <h3 className='start'> 
        CLIQUE EM UM DOS NÍVEIS PARA INICIAR
      </h3>
      <h3 className='start'> 
        
        <div className='instadiv'>
        <a href="https://www.instagram.com/_jadilsonf/" alt=""> Me segue no Instagram @_jadilsonf
        </a>
      </div>
      </h3>
      <div className='instadiv' style={{textDecoration: "inherit", color:"white"}}>
        Esta página está sempre em processo de melhoria, de tempos em tempos você encontrará algo novo entre as funcionalidades.
      </div>       
    </div>
  )
}

export default Inicio