import React from "react";
import { useEffect } from 'react';
import './principal.css';
import NavbarMenu from "../componentes/NavbarMenu";
import PiePagina from "../componentes/piePagina";
import IconoWhatsapp from "../componentes/IconoWhatsapp";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Nosotros = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000, // Duración de las animaciones en milisegundos

    });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    AOS.refresh();
  };

  return (
    <>
      <div className="fondoPaginas"></div>
      <NavbarMenu />
      <IconoWhatsapp/>
      <div className={'contenedor-nosotros'} data-aos="fade-up" >
        <p className={'nosotros'}>
          <h1 className={'titulo-nosotros'}>Nosotros</h1>
          Nosotros nos encargamos de brindar a la comunidad de villas del caribe una variedad de helados con deliciosos sabores<br></br>
          Nuestro objetivo es ofrecer el mejor servicio a nuestros clientes para que se sientan como si lo atendiera su propia familia<br></br>
          Todos Nuestros Productos estan debidamente refigerados con muy buena sanidad
        </p>
      </div>
      <PiePagina />
    </>
  );
}

export default Nosotros;