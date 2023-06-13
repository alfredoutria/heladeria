import React from "react";
import './editar.css';
import { useState, useEffect } from 'react';
import db from '../../firebase';
import './editar.css';
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import NavbarMenu from '../componentes/NavbarMenu';
import PiePagina from "../componentes/piePagina";


const Editar = () => {

  const [datos1, setvalores1] = useState(null);
  const [datos2, setvalores2] = useState(null);
  const [datos3, setvalores3] = useState(null);

  const consultarSeccion1 = async () => {

    const resultado1 = await getDocs(collection(db, "seccion1"));

    return resultado1;
  }

  const consultarSeccion2 = async () => {


    const resultado2 = await getDocs(collection(db, "seccion2"));

    return resultado2;


  }

  const consultarSeccion3 = async () => {

    const resultado3 = await getDocs(collection(db, "seccion3"));
    return resultado3;


  }

  const obtenerDatos1 = async () => {

    const Misdatos1 = await consultarSeccion1();
    setvalores1(Misdatos1.docs);
    const Misdatos2 = await consultarSeccion2();
    setvalores2(Misdatos2.docs);
    const Misdatos3 = await consultarSeccion3();
    setvalores3(Misdatos3.docs);
    console.log('datos' + datos1);
  }

  useEffect(() => {
    obtenerDatos1();
  }, []);

  const [estilo, setEstilo] = useState();
  const [Estado, setEstado] = useState();
  console.log(Estado);
  const Menu = () => {



    const cambiarEstilos = { transform: 'translate(200px)', transition: 'ease-in .7s' }
    setEstilo(cambiarEstilos);
    setEstado('true');

    if (Estado === 'true') {
      const cambiarEstilos = { transform: 'translate(-200px)', transition: 'ease-in .7s' }
      setEstilo(cambiarEstilos);
      setEstado('false');
    }
  }

  return (


    <>

      <NavbarMenu />

      <h1 className={'panel'} >Panel de Admistración</h1>
      <div className={'contenedor-seccion'}>
        <div className={'letra-seccion'}>Seccion 1</div>
        <div className="contenedor-agregarImagen" align={'center'}><Link to='/agregarSeccion1' className='agregar-imagen'>Agregar Imagen</Link></div>
        {datos1 && datos1.map((d1) =>

          <section key={d1.id} >
            <img className={'imagen'} src={d1.data().url} />
            <div className={'contenedor-productos'}>
              <div name={'nombre'}>{d1.data().nombre}</div>
              <div name={'precio'}>{d1.data().precio}</div>
              <Link to={`/actualizarSeccion1/${d1.id}`} className={'modificar-eliminar'}>Modificar</Link><br></br>
              <Link to={`/eliminarSeccion1/${d1.id}`} className={'modificar-eliminar'}>Eliminar</Link>
            </div>

          </section>)}
      </div><br></br>

      <div className={'contenedor-seccion'}>
        <div className={'letra-seccion'}>Seccion 2</div>
        <div className="contenedor-agregarImagen" align={'center'}><Link to='/agregarSeccion2' className='agregar-imagen'>Agregar Imagen</Link></div>
        {datos2 && datos2.map((d2) =>

          <section key={d2.id} >
            <img className={'imagen'} src={d2.data().url} />
            <div className={'contenedor-productos'}>
              <div name={'nombre'}>{d2.data().nombre}</div>
              <div name={'precio'}>{d2.data().precio}</div>
              <Link to={`/actualizarSeccion2/${d2.id}`} className={'modificar-eliminar'}>Modificar</Link><br></br>
              <Link to={`/eliminarSeccion2/${d2.id}`} className={'modificar-eliminar'}>Eliminar</Link>
            </div>

          </section>)}
      </div><br></br>

      <div className={'contenedor-seccion'}>
        <div className={'letra-seccion'}>Seccion 3</div>
        <div className="contenedor-agregarImagen" align={'center'}><Link to='/agregarSeccion3' className='agregar-imagen'>Agregar Imagen</Link></div>
        {datos3 && datos3.map((d3) =>

          <section key={d3.id} >
            <img className={'imagen'} src={d3.data().url} />
            <div className={'contenedor-productos'}>
              <div name={'nombre'}>{d3.data().nombre}</div>
              <div name={'precio'}>{d3.data().precio}</div>
              <Link to={`/actualizarSeccion3/${d3.id}`} className={'modificar-eliminar'}>Modificar</Link><br></br>
              <Link to={`/eliminarSeccion3/${d3.id}`} className={'modificar-eliminar'}>Eliminar</Link>
            </div>

          </section>)}
      </div>
      <PiePagina />

    </>
  )
}
//<Link to="/actualizar">ACTUALIZAR</Link>
export default Editar