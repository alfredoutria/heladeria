import React from "react";
import { useState, useEffect } from 'react';
import db from '../../firebase';
import { collection, addDoc, getDoc, getDocs, doc, deleteDoc, query, collectionGroup, where, updateDoc, setDoc } from "firebase/firestore";
import imagenWhatsapp from '../imagenes/whatsapp.png';
import './principal.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import NavbarMenu from '../componentes/NavbarMenu';
import PiePagina from "../componentes/piePagina";
import IconoWhatsapp from "../componentes/IconoWhatsapp";
import linkWhatsapp from "../componentes/Whatsapp";




const Productos = () => {

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

  const obtenerDatos = async () => {

    const Misdatos1 = await consultarSeccion1();
    setvalores1(Misdatos1.docs);
    const Misdatos2 = await consultarSeccion2();
    setvalores2(Misdatos2.docs);
    const Misdatos3 = await consultarSeccion3();
    setvalores3(Misdatos3.docs);
    console.log('datos' + datos1);
  }

  useEffect(() => {
    obtenerDatos();
  }, []);





  return (
    <>
      <div className="fondoProductos"></div>
      <NavbarMenu /><br></br><br></br>
      <IconoWhatsapp />
      <Container>

        <Row className="RowTarjeta">
          {datos1 && datos1.map((d1) =>
            <Col key={d1.id} md={6} lg={4}>
              <Card className='tarjeta'>
                <a href={linkWhatsapp.link} target="_blank" rel="noopener noreferrer">
                  <Card.Img className='imagenTarjeta' variant='top' src={d1.data().url} />
                </a>

                <a href={linkWhatsapp.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
                  <Card.Body>
                    <Card.Title style={{ color: '#7e0b61' }}>{d1.data().nombre}</Card.Title>
                    <Card.Text>
                      {d1.data().precio}
                    </Card.Text>
                    <Card.Link href={linkWhatsapp.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'red', fontWeight: 'bold', fontSize: '18px' }}>Pidela aquí</Card.Link>
                  </Card.Body>
                </a>
              </Card>
            </Col>)}

        </Row>
      </Container>


      <div className={'mensaje1'}>
        <label className={'letra1'}><strong>PEDIDOS A DOMICILIOS</strong></label><br></br>
        <label className={'letra2'}>Solo para Habitantes de Villas del Caribe y sus alrededores en Barranquilla</label><br></br>
        <a href={linkWhatsapp.link} target="_blank" rel="noopener noreferrer"><img className={'imagenWhatsapp'} src={imagenWhatsapp} /><label className={'telefono'}>3015958493 - 3872203</label></a>

      </div>

      <Container>
        <Row>
          {datos2 && datos2.map((d2) =>
            <Col key={d2.id} md={6} lg={4}>
              <Card className='tarjeta'>
                <a href={linkWhatsapp.link} target="_blank" rel="noopener noreferrer" >
                  <Card.Img className='imagenTarjeta' variant='top' src={d2.data().url} />
                </a>

                <a href={linkWhatsapp.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
                  <Card.Body>
                    <Card.Title style={{ color: '#7e0b61' }}>{d2.data().nombre}</Card.Title>
                    <Card.Text>
                      {d2.data().precio}
                    </Card.Text>
                    <Card.Link href={linkWhatsapp.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'red', fontWeight: 'bold', fontSize: '18px' }}>Pidela aquí</Card.Link>
                  </Card.Body>
                </a>
              </Card>
            </Col>)}

        </Row>
      </Container>

      <div className={'mensaje2'}>
        <label className={'letra3'}>Disfruta de todos Nuestros Deliciosos Helados<br></br></label>
        <label className={'letra3'}>Mas Que un Helado es una Aventura en tu paladar</label>
      </div>

      <Container>
        <Row>
          {datos3 && datos3.map((d3) =>
            <Col key={d3.id} md={6} lg={4}>
              <Card className='tarjeta'>
                <a href={linkWhatsapp.link} target="_blank" rel="noopener noreferrer" >
                  <Card.Img className='imagenTarjeta' variant='top' src={d3.data().url} />
                </a>

                <a href={linkWhatsapp.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
                  <Card.Body>
                    <Card.Title style={{ color: '#7e0b61' }}>{d3.data().nombre}</Card.Title>
                    <Card.Text>
                      {d3.data().precio}
                    </Card.Text>
                    <Card.Link href={linkWhatsapp.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'red', fontWeight: 'bold', fontSize: '18px' }}>Pidela aquí</Card.Link>
                  </Card.Body>
                </a>
              </Card>
            </Col>)}

        </Row>

      </Container>

      <PiePagina />

    </>

  );

}

export default Productos;