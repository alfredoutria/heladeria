import db from '../../firebase';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import '../principal/administrar.css';
import NavbarMenu from '../componentes/NavbarMenu';
import PiePagina from "../componentes/piePagina";

const Actualizacion = () => {
  const { id } = useParams();
  console.log('ESTO ES: ' + id);



  useEffect(() => { busquedaActualizar() }, []);
  const [cargar, setCargar] = useState(0);
  const [mostrarActualizar, setDatosActualizar] = useState(null);
  const [visualizar, setvisualizar] = useState(null);
  const [ImagenActualizar, setImagenActualizar] = useState();

  const busquedaActualizar = async () => {

    const docRef = doc(db, "seccion1", id);
    const docSnap = await getDoc(docRef);

    console.log("DATOS: " + docSnap.data().nombre);

    if (docSnap.exists()) {
      document.formularioActualizar.id.value = docSnap.id;
      document.formularioActualizar.nombreImagen.value = docSnap.data().nombreImagen;
      document.formularioActualizar.imagen.src = docSnap.data().url;
      document.formularioActualizar.url.value = docSnap.data().url;
      document.formularioActualizar.nombre.value = docSnap.data().nombre;
      document.formularioActualizar.precio.value = docSnap.data().precio;
      document.formularioActualizar.descripcion.value = docSnap.data().descripcion;
      console.log("Document data:", docSnap.data().nombre);
      const lista = [docSnap.id, docSnap.data().nombre, docSnap.data().precio, docSnap.data().descripcion];
      setDatosActualizar(docSnap.id);
      console.log("ACTUALIZANDO AUG" + lista);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      document.formularioActualizar.id.value = '';
      document.formularioActualizar.nombre.value = '';
      document.formularioActualizar.precio.value = '';
      document.formularioActualizar.descripcion.value = '';
    }



  }

  const limpiarInputActualizar = () => {
    document.formularioActualizar.id.value = '';
    document.formularioActualizar.nombreImagen.value = '';
    document.formularioActualizar.imagen.src = '';
    document.formularioActualizar.archivo.value = '';
    document.formularioActualizar.url.value = '';
    document.formularioActualizar.nombre.value = '';
    document.formularioActualizar.precio.value = '';
    document.formularioActualizar.descripcion.value = '';

  }
  let Redireccionar = useNavigate();
  const link = () => {
    Redireccionar('/administrar');
  }

  const actualizar = (id) => { // o id -- Aqui Abajo
    console.log('MI ID: ' + id);
    if (visualizar == null) {

      const actualizarNombre = document.formularioActualizar.nombre.value;
      const actualizarPrecio = document.formularioActualizar.precio.value;
      const actualizarDescripcion = document.formularioActualizar.descripcion.value;

      updateDoc(doc(db, 'seccion1', id), {

        "nombre": actualizarNombre,
        "precio": actualizarPrecio,
        "descripcion": actualizarDescripcion
      });
      // await updateDoc(doc(db,'users',id),{descripcion:descripcion, nombre:nombre, precio:precio});
      console.log('ACTUALIZANDO PRECIO' + visualizar);
      // obtenerDatos();
      link();



    } else if (visualizar != null || visualizar != '') {

      console.log('LA URL: ' + document.formularioActualizar.url.value);



      const storage = getStorage();
      const guardarNombreImagen = Math.random();
      const storageRef = ref(storage, 'images/' + guardarNombreImagen);

      const Nombre_imagen = document.formularioActualizar.nombreImagen.value;
      const eliminarStorage = ref(storage, 'images/' + Nombre_imagen);
      deleteObject(eliminarStorage).then(() => {
        // File deleted successfully
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });


      const uploadTask = uploadBytesResumable(storageRef, ImagenActualizar);
      console.log('DESCARGAs: ' + ImagenActualizar.name);


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
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...

          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const actualizarNombreImagen = document.formularioActualizar.nombreImagen.value = guardarNombreImagen;
            const actualizarUrl = document.formularioActualizar.url.value = downloadURL;
            const actualizarNombre = document.formularioActualizar.nombre.value;
            const actualizarPrecio = document.formularioActualizar.precio.value;
            const actualizarDescripcion = document.formularioActualizar.descripcion.value;


            updateDoc(doc(db, "seccion1", id), {
              "nombreImagen": actualizarNombreImagen,
              "url": actualizarUrl,
              "nombre": actualizarNombre,
              "precio": actualizarPrecio,
              "descripcion": actualizarDescripcion
            });
            //obtenerDatos();
            link();
            console.log("MI ID: " + id);

          });

        }

      );

    }

  }

  const cambioActualizar = (e) => {
    e.preventDefault();
    actualizar(mostrarActualizar);

  }

  const previsualizacion = (e) => {

    const archivoImagen = e.target.files[0];
    const ubicacionImagen = URL.createObjectURL(archivoImagen);
    setvisualizar(ubicacionImagen);
    setImagenActualizar(archivoImagen);

    console.log('FILES ' + ubicacionImagen);


  }


  return (
    <>
      <NavbarMenu />
      <div className='contenedor-actualizar'>

        <form name={'formularioActualizar'} onSubmit={cambioActualizar}>
          <input type={'text'} name={'id'} className={'ocultar'} placeholder={'Id'} />
          <input type={'text'} name={'url'} className={'ocultar'} placeholder={'Url'} />
          <input type={'text'} name={'nombreImagen'} className={'ocultar'} placeholder={'Nombre Imagen'} />
          <h1>Actualizar</h1>
          <input type={'file'} name={'archivo'} className={'inputs'} onChange={previsualizacion} ></input><br></br>
          <img className={'imagenEdicion'} name={'imagen'} width={'100px'} src={visualizar} ></img><br></br>
          <input type={'text'} name={'nombre'} className={'inputs'} placeholder={'Nombre'} /><br></br>
          <input type={'text'} name={'precio'} className={'inputs'} placeholder={'Precio'} /><br></br>
          <input type={'text'} name={'descripcion'} className={'inputs'} placeholder={'Descripcion'} /><br></br>
          <input type={'submit'} className={'boton-actualizar'} value={'Actualizar'} />
          <input type={'submit'} className={'boton-cancelarActualizar'} onClick={link} value={'Cancelar'} />

        </form>
        <progress value={cargar} max={100} className={'barra-progreso'}></progress><br></br><b>{cargar}%</b>
      </div>
      <PiePagina />
    </>
  );

}




export default Actualizacion;