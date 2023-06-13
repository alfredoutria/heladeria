import React from "react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import './principal.css';
import db from '../../firebase';
import logo from '../imagenes/icono.jpg';
import logoMenu from '../imagenes/ico.png';



const VerComentarios = () => {

  const [datos, setvalores] = useState(null);

  const consultarComentarios = async () => {

    const resultado = await getDocs(collection(db, "comentarios"));

    return resultado;
  }

  const obtenerDatos = async () => {

    const Misdatos = await consultarComentarios();
    setvalores(Misdatos.docs);
  }

  useEffect(() => {
    obtenerDatos();
  }, []);

  const [estilo, setEstilo] = useState();
  const [Estado, setEstado] = useState();
  console.log(Estado);
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
          <li className={'liComputador'}><Link className={'routerLink'} to={'/administrar'}>Editar</Link></li>
        </ul>
      </div><br></br>

      <div className={'ulMovil'} style={estilo}>

        <ul className={'ulM'} >
          <li className={'ulLi'}><Link className={'routerLink'} to={'/'}>Inicio</Link></li>
          <li className={'ulLi'}><Link className={'routerLink'} to={'/nosotros'}>Nosotros</Link></li>
          <li className={'ulLi'}><Link className={'routerLink'} to={'/comentarios'}>Cometarios</Link></li>
          <li className={'ulLi'}><Link className={'routerLink'} to={'/administrar'}>Editar</Link></li>
        </ul>
      </div>

      <div className={'contenedor-seccionDatos'}>
        <h1 className={'h1Comentarios'}>Comentarios De Nuestros Clientes</h1>

        {datos && datos.map((comentarios) =>

          <section key={comentarios.id} >
            <div className={'contenedor-cometarios'}>
              <div className={'contenedor-formulario'}>
                <label className={'labelComentarios'}>Fecha y Hora:</label><br></br>
                <input className={'inputComentarios'} disabled type={'text'} value={comentarios.data().fechaHora} /><br></br>
                <label className={'labelComentarios'}>Nombres:</label><br></br>
                <input className={'inputComentarios'} disabled type={'text'} value={comentarios.data().nombres} /><br></br>
                <label className={'labelComentarios'}>Apellidos:</label><br></br>
                <input className={'inputComentarios'} disabled type={'text'} value={comentarios.data().apellidos} /><br></br>
                <label className={'labelComentarios'}>E-mail:</label><br></br>
                <input className={'inputComentarios'} disabled type={'email'} value={comentarios.data().email} /><br></br>
                <label className={'labelComentarios'}>Comentarios:</label><br></br>
                <textarea className={'inputComentarios'} disabled value={comentarios.data().comentarios}></textarea>
              </div>
            </div>
          </section>)}

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

export default VerComentarios;