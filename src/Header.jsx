import { Link } from "react-router-dom"
// import Logo from './images/logo.svg';

import './App.css';

function Header(){
    return(
      <div>
        <header className='header'>
          <h2>
            <Link to="/" style={{textDecoration: "inherit", color:"inherit"}}>GuitarraSUPER</Link></h2>
            {/* <img className="logo" src={Logo} alt="logo"/> */}
          <ul className='menu'>
             <li><Link to="/" style={{textDecoration: "inherit", color:"inherit"}}>Inicio</Link></li>
             <li><Link Link to="/sobre" style={{textDecoration: "inherit", color:"inherit"}}>Sobre</Link></li>
          </ul>
        </header>
      </div>
    )
}

export default Header