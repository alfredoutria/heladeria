import db from '../../firebase';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../principal/administrar.css';
import { getDoc, doc, deleteDoc } from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import NavbarMenu from '../componentes/NavbarMenu';
import PiePagina from "../componentes/piePagina";

const Eliminacion = () => {
  const { id } = useParams();
  const [mostrarEliminar, setDatosAEliminar] = useState(null);
  useEffect(() => { busquedaEliminar() }, []);

  let Redireccionar = useNavigate();
  const link = () => {
    Redireccionar('/administrar');
  }

  const limpiarInput = () => {
    document.formularioEliminar.id.value = '';
    document.formularioEliminar.nombreImagen.value = '';
    document.formularioEliminar.imagen.src = '';
    document.formularioEliminar.url.value = '';
    document.formularioEliminar.nombre.value = '';
    document.formularioEliminar.precio.value = '';
    document.formularioEliminar.descripcion.value = '';
  }

  const eliminar = async () => { // o id -- Aqui Abajo
    await deleteDoc(doc(db, 'seccion2', id));

    const storage = getStorage();
    const Nombre_imagen = document.formularioEliminar.nombreImagen.value;
    const eliminarStorage = ref(storage, 'images/' + Nombre_imagen);
    deleteObject(eliminarStorage).then(() => {
      // File deleted successfully
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });

    console.log('ELIMINANDO ' + id);
    limpiarInput();
    link();
  }

  const busquedaEliminar = async () => {

    const docRef = doc(db, "seccion2", id);
    const docSnap = await getDoc(docRef);

    console.log("DATOS: " + docSnap.data().nombre);

    if (docSnap.exists()) {
      document.formularioEliminar.id.value = docSnap.id;
      document.formularioEliminar.nombreImagen.value = docSnap.data().nombreImagen;
      document.formularioEliminar.imagen.src = docSnap.data().url;
      document.formularioEliminar.url.value = docSnap.data().url;
      document.formularioEliminar.nombre.value = docSnap.data().nombre;
      document.formularioEliminar.precio.value = docSnap.data().precio;
      document.formularioEliminar.descripcion.value = docSnap.data().descripcion;
      console.log("Document data:", docSnap.data().nombre);
      setDatosAEliminar(docSnap.id);
      console.log("ELIMINACION " + mostrarEliminar);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      document.formularioEliminar.id.value = '';
      document.formularioEliminar.nombre.value = '';
      document.formularioEliminar.precio.value = '';
      document.formularioEliminar.descripcion.value = '';
    }



  }


  const cambioEliminar = (e) => {
    e.preventDefault();
    eliminar(mostrarEliminar);

  }


  return (
    <>
      <NavbarMenu />
      <div className='contenedor-eliminar'>
        <form name={'formularioEliminar'} onSubmit={cambioEliminar}  >
          <input type={'text'} name={'id'} className={'ocultar'} placeholder={'Id'} />
          <input type={'text'} name={'nombreImagen'} className={'ocultar'} placeholder={'Nombre Imagen'} />
          <input type={'text'} name={'url'} className={'ocultar'} placeholder={'Url'} />
          <h1>Eliminar</h1>
          <img name={'imagen'} width={'100px'} ></img><br></br>
          <input type={'text'} name={'nombre'} className={'inputs'} placeholder={'Nombre'} /><br></br>
          <input type={'text'} name={'precio'} className={'inputs'} placeholder={'Precio'} /><br></br>
          <input type={'text'} name={'descripcion'} className={'inputs'} placeholder={'Descripcion'} /><br></br>
          <input type={'submit'} className={'boton-eliminar'} value={'Eliminar'} />
          <input type={'submit'} className={'boton-cancelarEliminar'} onClick={link} value={'Cancelar'} />

        </form>
      </div>
      <PiePagina />
    </>
  );

}

export default Eliminacion;