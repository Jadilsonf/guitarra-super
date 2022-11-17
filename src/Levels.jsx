import { Link } from "react-router-dom"

function Levels() {
  return (
    <div>
      <ul className="links">
        <li><h1><Link to="/avancado" style={{textDecoration: "inherit", color:"white"}} className="avanc">Nível avançado</Link></h1></li>
        <li><h1><Link to="/superavancado" style={{textDecoration: "inherit", color:"white"}} className="superavanc"> Nível super Avançado</Link></h1></li>
      </ul>
    </div>
  )
}

export default Levels