import React from "react";
import db from '../../firebase';
import { useState } from "react";
import './principal.css';
import { collection, addDoc } from "firebase/firestore";
import NavbarMenu from "../componentes/NavbarMenu";
import IconoWhatsapp from "../componentes/IconoWhatsapp";
import PiePagina from "../componentes/piePagina";


const Comentarios = () => {

  const [tiempo, setTiempo] = useState();

  const Reloj = () => {
    setTiempo(new Date().toLocaleString());
  }

  setInterval(Reloj, 1000);


  const limpiar = () => {
    document.formularioComentarios.nombres.value = '';
    document.formularioComentarios.apellidos.value = '';
    document.formularioComentarios.email.value = '';
    document.formularioComentarios.comentarios.value = '';
  }



  const agregar = () => {
    const agregarNombres = document.formularioComentarios.nombres.value;
    const agregarApellidos = document.formularioComentarios.apellidos.value;
    const agregarEmail = document.formularioComentarios.email.value;
    const agregarComentarios = document.formularioComentarios.comentarios.value;

    addDoc(collection(db, "comentarios"), {
      "fechaHora": tiempo,
      "nombres": agregarNombres,
      "apellidos": agregarApellidos,
      "email": agregarEmail,
      "comentarios": agregarComentarios
    });
    limpiar();
  }

  const enviar = (e) => {
    e.preventDefault();
    agregar();
  }

  return (
    <>
      <div className="fondoPaginas"></div>
      <NavbarMenu />
      <IconoWhatsapp/>
      <div className={'contenido-formulario'}>
        <h1 className={'titulo-comentarios'}>Envianos tus comentarios ó Sugerencias</h1>

        <form name={'formularioComentarios'} className='formulario' onSubmit={enviar}>

          <input className={'contacto'} required type={'text'} placeholder={'Nombres'} name={'nombres'} /><br></br>
          <input className={'contacto'} required type={'text'} placeholder={'Apellidos'} name={'apellidos'} /><br></br>
          <input className={'contacto'} required type={'email'} placeholder={'Email'} name={'email'} /><br></br>
          <textarea className={'area'} required placeholder={'Comentarios....'} name={'comentarios'}></textarea>
          <br></br>
          <input className={'botonEnviar'} type={'submit'} name={'enviar'} />
        </form>
      </div>
      <PiePagina />
    </>
  );
}

export default Comentarios;