import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './principal.css';
import logo from '../imagenes/icono.jpg';
import logoMenu from '../imagenes/ico.png';
import db from '../../firebase';
import { getDoc, doc } from "firebase/firestore";


const Detalle = () => {

  const { id } = useParams();
  const [estilo, setEstilo] = useState();
  const [Estado, setEstado] = useState();
  console.log('MI ID ES: ' + id);
  useEffect(() => { busquedaDetalle() }, []);

  const busquedaDetalle = async () => {

    const docRef = doc(db, 'seccion1', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      document.contenedorDetalle.imagen.src = docSnap.data().url;
      document.contenedorDetalle.nombre.value = docSnap.data().nombre;
      document.contenedorDetalle.precio.value = docSnap.data().precio;
      document.contenedorDetalle.descripcion.value = docSnap.data().descripcion;
      document.contenedorDescripcion.descripcion.value = docSnap.data().descripcion;
      console.log("Document data:", docSnap.data().nombre);
    }

    else {
      const docRef = doc(db, 'seccion2', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        document.contenedorDetalle.imagen.src = docSnap.data().url;
        document.contenedorDetalle.nombre.value = docSnap.data().nombre;
        document.contenedorDetalle.precio.value = docSnap.data().precio;
        document.contenedorDetalle.descripcion.value = docSnap.data().descripcion;
        document.contenedorDescripcion.descripcion.value = docSnap.data().descripcion;
        console.log("Document data:", docSnap.data().nombre);
      }
      else {
        const docRef = doc(db, 'seccion3', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          document.contenedorDetalle.imagen.src = docSnap.data().url;
          document.contenedorDetalle.nombre.value = docSnap.data().nombre;
          document.contenedorDetalle.precio.value = docSnap.data().precio;
          document.contenedorDetalle.descripcion.value = docSnap.data().descripcion;
          document.contenedorDescripcion.descripcion.value = docSnap.data().descripcion;
          console.log("Document data:", docSnap.data().nombre);
        }

      }
    }



  }

  const Menu = () => {



    const cambiarEstilos = { transform: 'translate(200px)', transition: 'ease-in .7s' }
    setEstilo(cambiarEstilos);
    setEstado('true');

    if (Estado == 'true') {
      const cambiarEstilos = { transform: 'translate(-200px)', transition: 'ease-in .7s' }
      setEstilo(cambiarEstilos);
      setEstado('false');
    }
  }

  return (
    <div>
      <div className={'barra'}><label className={'titulo'}>Heladeria Villas del Caribe</label>
        <img className={'logoMenu'} src={logoMenu} onClick={Menu} />
        <img className={'logo'} src={logo} />
        <ul className={'ulComputador'} >
          <li className={'liComputador'} ><Link className={'routerLink'} to={'/'}>Inicio</Link></li>
          <li className={'liComputador'}><Link className={'routerLink'} to={'/nosotros'}>Nosotros</Link></li>
          <li className={'liComputador'}><Link className={'routerLink'} to={'/comentarios'}>Cometarios</Link></li>
        </ul>
      </div><br></br>

      <div className={'ulMovil'} style={estilo}>

        <ul className={'ulM'} >
          <li className={'ulLi'}><Link className={'routerLink'} to={'/'}>Inicio</Link></li>
          <li className={'ulLi'}><Link className={'routerLink'} to={'/nosotros'}>Nosotros</Link></li>
          <li className={'ulLi'}><Link className={'routerLink'} to={'/comentarios'}>Cometarios</Link></li>
        </ul>
      </div>

      <div className="divDetalle">
        <label className={'titulo-detalle'}>Detalles</label><br></br>
        <form name={'contenedorDetalle'} className='contenedorDetalle'>
          <img className={'imagenDetalle'} name={'imagen'}></img><br></br>
          <input type={'text'} name={'nombre'} readOnly className={'inputDetalle'} placeholder={'Nombre'} /><br></br>
          <input type={'text'} name={'precio'} readOnly className={'inputDetalle'} placeholder={'Precio'} /><br></br>
          <input type={'text'} name={'descripcion'} readOnly className={'inputDescripcionMovil'} placeholder={'Descripcion'} /><br></br>
        </form>

        <form name={'contenedorDescripcion'} className={'contenedorDescripcion'}>
          <input type={'text'} name={'descripcion'} readOnly className={'inputDescripcion'} placeholder={'Descripcion'} /><br></br>
        </form>
      </div>





      <footer>
        <div className={'piePagina'}> <label>Página Web Desarrollada Por Alfredo Utria Garcia</label><br></br>
          <label>Para</label><br></br>
          <label>Heladería Villas Del Caribe </label><br></br>
        </div>
      </footer>
    </div>
  );
}

export default Detalle;