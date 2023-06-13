import {BrowserRouter, Route, Routes,NavLink  } from 'react-router-dom';
import AgregandoSeccion1 from './administracion/seccion1/agregar';
import ActualizacionSeccion1 from './administracion/seccion1/actualizar';
import EliminacionSeccion1 from './administracion/seccion1/eliminar';
import AgregandoSeccion2 from './administracion/seccion2/agregar';
import ActualizacionSeccion2 from './administracion/seccion2/actualizar';
import EliminacionSeccion2 from './administracion/seccion2/eliminar';
import AgregandoSeccion3 from './administracion/seccion3/agregar';
import ActualizacionSeccion3 from './administracion/seccion3/actualizar';
import EliminacionSeccion3 from './administracion/seccion3/eliminar';
import Editar from './administracion/principal/editar';
import Inicio from './administracion/principal/inicio';
import Productos from './administracion/principal/productos';
import Nosotros from './administracion/principal/nosotros';
import Comentarios from './administracion/principal/comentarios';
import VerComentarios from './administracion/principal/verComentarios';
import Detalle from './administracion/principal/detalle';


const App = () =>{

   return(
     <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/productos' element={<Productos/>} />
            <Route path='/administrar' element={<Editar/>} />
            <Route exact path='/agregarSeccion1' element={<AgregandoSeccion1/>} />
            <Route exact path='/actualizarSeccion1/:id' element={<ActualizacionSeccion1/>} />
            <Route exact path='/eliminarSeccion1/:id' element={<EliminacionSeccion1/>} />
            <Route exact path='/agregarSeccion2' element={<AgregandoSeccion2/>} />
            <Route exact path='/actualizarSeccion2/:id' element={<ActualizacionSeccion2/>} />
            <Route exact path='/eliminarSeccion2/:id' element={<EliminacionSeccion2/>} />
            <Route exact path='/agregarSeccion3' element={<AgregandoSeccion3/>} />
            <Route exact path='/actualizarSeccion3/:id' element={<ActualizacionSeccion3/>} />
            <Route exact path='/eliminarSeccion3/:id' element={<EliminacionSeccion3/>} />
            <Route exact path='/nosotros' element={<Nosotros/>} />
            <Route exact path='/comentarios' element={<Comentarios/>} />
            <Route exact path='/verComentarios' element={<VerComentarios/>} />
            <Route exact path='/detalle/:id' element={<Detalle/>} />
        </Routes>
     </BrowserRouter>
     </div>
   );

}

export default App;
