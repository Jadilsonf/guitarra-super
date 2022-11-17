import { Route , Routes} from "react-router-dom";
import Levels from "./Levels";
import Avanc from "./components/Avanc"
import SuperAvanc from "./components/SuperAvanc";
import Sobre from "./components/Sobre";
import Inicio from "./components/Inicio";


function LevelRoutes() {
  return (
    <div>
        <Levels/>
        <Routes>
            <Route exact path="/avancado" element={<Avanc/>}></Route>
            <Route exact path="/superavancado" element={<SuperAvanc/>}></Route>
            <Route exact path="/sobre" element={<Sobre/>}></Route>
        </Routes>
        <Inicio/>

    </div>
  )
}

export default LevelRoutes