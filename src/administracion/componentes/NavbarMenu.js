import { useState } from 'react';
import linkWhatsapp from './Whatsapp';
import logo from '../imagenes/icono.jpg';
import logoMenu from '../imagenes/menu.png';


const NavbarMenu = () => {


    const [estilo, setEstilo] = useState();
    const [Estado, setEstado] = useState(false);
    const [visible, setvisible] = useState(true);
    console.log(Estado);



    const estiloBarra = {
        display: visible ? 'inline' : 'none'
    }

    const Menu = () => {


        const cambiarEstilos = { transform: 'translate(-700px)', transition: 'opacity 0.7s ease-in ' }
        setvisible(false)
        setEstilo(cambiarEstilos);
        setEstado('true');


        if (Estado == 'true') {
            const cambiarEstilos = { transform: 'translate(500px)', transition: 'opacity 0.7s ease-in ' }
            setEstilo(cambiarEstilos);
            setvisible(true);
            setEstado('false');
        }

    }


    return (
        <>
            <div className={'barra'} style={estiloBarra}>
                <a href='/' style={{textDecoration:'none'}}><label className={'tituloBarra'}>Heladeria Villas del Caribe</label></a>
                <div className='div_logoMenu'><img className={'logoMenu'} src={logoMenu} onClick={Menu} /></div>
                <img className={'logo'} src={logo} />
                <ul className={'ulComputador'} >
                    <li className={'liComputador'} ><a className={'aComputador'} href={'/'}>INICIO</a></li>
                    <li className={'liComputador'}><a className={'aComputador'} href={'/productos'}>NUESTROS PRODUCTOS</a></li>
                    <li className={'liComputador'}><a className={'aComputador'} href={'/nosotros'}>SOBRE NOSOTROS</a></li>
                    <li className={'liComputador'}><a className={'aComputador'} href={'/comentarios'}>DANOS TU OPINION</a></li>
                    <li className={'liComputador'}><a className={'aComputador'} href={linkWhatsapp.link} target="_blank" rel="noopener noreferrer">ESCRIBENOS</a></li>
                </ul>
            </div><br></br>


            <div className={'ulMovil'} style={estilo}>
                <div onClick={Menu} className="botonCerrar"></div>
                <ul className={'ulM'} >

                    <li className={'ulLi'}><a className={'routerLink'} href={'/'}>INICIO</a></li>
                    <li className={'ulLi'}><a className={'routerLink'} href={'/productos'}>NUESTROS PRODUCTOS</a></li>
                    <li className={'ulLi'}><a className={'routerLink'} href={'/nosotros'}>SOBRE NOSOTROS</a></li>
                    <li className={'ulLi'}><a className={'routerLink'} href={'/comentarios'}>DANOS TU OPINION</a></li>
                    <li className={'ulLi'}><a className={'routerLink'} href={linkWhatsapp.link} target="_blank" rel="noopener noreferrer">ESCRIBENOS</a></li>
                </ul>
            </div>
        </>
    )

}
export default NavbarMenu;