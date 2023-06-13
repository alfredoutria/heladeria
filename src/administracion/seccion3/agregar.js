import db from '../../firebase';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../principal/administrar.css';
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import NavbarMenu from '../componentes/NavbarMenu';
import PiePagina from "../componentes/piePagina";

const Agregando = () => {

  let Redireccionar = useNavigate();
  const link = () => {
    Redireccionar('/administrar');
  }
  const [cargar, setCargar] = useState(0);
  const [Imagen, setImagen] = useState();

  const agregar = () => {
    const storage = getStorage();
    const guardarNombreImagen = Math.random();
    const storageRef = ref(storage, 'images/' + guardarNombreImagen);
    console.log('AGREGANDO NOMBRE IMAGEN: ' + storageRef);

    const agregarNombreImagen = document.formularioAgregar.nombreImagen.value = guardarNombreImagen;


    const uploadTask = uploadBytesResumable(storageRef, Imagen);
    console.log('DESCARGA: ' + uploadTask);


    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        const porcentaje = Math.round(progress);
        setCargar(porcentaje);
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
       console.log('Error', + error);
      },
      () => {
        
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {


          const agregarUrl = document.formularioAgregar.url.value = downloadURL;
          const agregarNombre = document.formularioAgregar.nombre.value;
          const agregarPrecio = document.formularioAgregar.precio.value;
          const agregarDescripcion = document.formularioAgregar.descripcion.value;

          addDoc(collection(db, "seccion3"), {
            "nombreImagen": agregarNombreImagen,
            "url": agregarUrl,
            "nombre": agregarNombre,
            "precio": agregarPrecio,
            "descripcion": agregarDescripcion
          });
          link();

        });

        //console.log('NOMBRE: '+ Imagen.name); 
      }

    );
  }

  const enviar = (e) => {
    e.preventDefault();
    agregar();




  }

  return (
    <>
      <NavbarMenu />

      <div className='contenedor-agregar' >



        <form name={'formularioAgregar'} className={'formularioAgregar'} onSubmit={enviar}>
          <input className={'ocultar'} type={'text'} name={'nombreImagen'} placeholder={'Nombre Imagen'} /><br></br>
          <input className={'ocultar'} type={'text'} name={'url'} placeholder={'url'} /><br></br>
          <h1>Agregar</h1>
          <input type={'file'} className={'inputs'} onChange={e => setImagen(e.target.files[0])} /><br></br>
          <input type={'text'} name={'nombre'} className={'inputs'} required placeholder={'Nombre'} /><br></br>
          <input type={'text'} name={'precio'} className={'inputs'} required placeholder={'Precio'} /><br></br>
          <input type={'text'} name={'descripcion'} className={'inputs'} required placeholder={'Descripcion'} /><br></br>
          <input type={'submit'} className={'boton-agregar'} value={'Ingresar'} />
          <input type={'submit'} className={'boton-cancelarAgregar'} onClick={link} value={'Cancelar'} />
        </form><br></br>
        <progress value={cargar} max={100} className={'barra-progreso'}></progress><br></br><b>{cargar}%</b>


      </div>
      <PiePagina />
    </>
  );
}

export default Agregando;