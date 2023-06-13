import NavbarMenu from "../componentes/NavbarMenu";
import PiePagina from "../componentes/piePagina";
import imagenNum1Escritorio from "../imagenes/carrusel/PrimeraPortada.png";
import imagenNum2Escritorio from "../imagenes/carrusel/SegunadPortada.png";
import imagenNum3Escritorio from "../imagenes/carrusel/TerceraPortada.png";
import imagenNum1Movil from "../imagenes/carrusel/heladosGalletas.jpg";
import imagenNum2Movil from "../imagenes/carrusel/cono.jpg";
import imagenNum3Movil from "../imagenes/carrusel/tazaFrutas.jpg";
import iconoWhatsapp from "../imagenes/whatsapp.png";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import Macfury from "../imagenes/carrusel/MacFury.png";
import galletasHelados from "../imagenes/carrusel/galletasHelados.png";
import linkWhatsapp from "../componentes/Whatsapp";
import IconoWhatsapp from "../componentes/IconoWhatsapp";
import "./inicio.css";




const Inicio = () => {

    return (
        <>
            <div className="fondoProductos"></div>
            <NavbarMenu />
            <IconoWhatsapp />
            <Carousel className='CarouselEscritorio'>
                <Carousel.Item className='Carousel.Item' interval={2000}>
                    <div >
                        <img
                            className="imagenCarrusel"
                            src={imagenNum1Escritorio}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item className='Carousel.Item' interval={2000}>
                    <div>
                        <img
                            className="imagenCarrusel"
                            src={imagenNum2Escritorio}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item className='Carousel.Item' interval={2000}>
                    <div>
                        <img
                            className="imagenCarrusel"
                            src={imagenNum3Escritorio}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>

            <Carousel className='CarouselMovil'>
                <Carousel.Item className='Carousel.Item' interval={2000}>
                    <div >
                        <img
                            className="imagenCarrusel"
                            src={imagenNum1Movil}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item className='Carousel.Item' interval={2000}>
                    <div>
                        <img
                            className="imagenCarrusel"
                            src={imagenNum2Movil}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item className='Carousel.Item' interval={2000}>
                    <div>
                        <img
                            className="imagenCarrusel"
                            src={imagenNum3Movil}
                            alt="First slide"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>

            <Container xs={12} md={12} className='Primercontainer'>
                <Row className='PrimerRow' >
                    <Col xs={12} md={4} className='PrimerColizquierda'>
                        <img src={Macfury} className='PrimerImg' />

                    </Col>
                    <Col xs={12} md={8} className='PrimerColderecha' >
                        Helado 100% de leche con un puñado de deliciosos M&M's,
                        disfruta cada uno en un buena cucharada de helado.
                    </Col>
                </Row>
            </Container>
            <Container xs={12} md={12} className='containerVerProductos'>
                <Row className='RowVerProductos' >
                    <Col xs={12} md={12} className='ColVerProductos' >
                        <a href="/productos" style={{ textDecoration: 'none' }}><Button variant="danger" size="lg">
                            Ver Nuestros productos
                        </Button></a>
                    </Col>

                </Row>
            </Container>
            <Container xs={12} md={12} className='containerMensaje'>
                <Row className='RowMensaje' >
                    <Col xs={12} md={12} className='ColMensajeDomicilio' >
                        PEDIDOS A DOMICILIOS
                    </Col>
                    <Col xs={12} md={12} className='ColMensaje' >
                        Solo para Habitantes de Villas del Caribe y sus alrededores en Barranquilla
                    </Col>
                    <Col xs={12} md={12} className='ColMensaje' >
                        <a href={linkWhatsapp.link} style={{ textDecoration: 'none', color: 'rgb(124, 7, 139)' }}><img className='iconoWhatsapp' src={iconoWhatsapp} /> 3015958493</a> - 3872203
                    </Col>
                </Row>
            </Container>
            <Container xs={12} md={12} className='Segundocontainer'>
                <Row className='SegundoRow' >
                    <Col xs={12} md={7} className='SegundoColizquierda'>
                        Galletas rellena de chocolate que te haran disfrutar de nuevas sensaciones y sabores en tu paladar
                    </Col>
                    <Col xs={12} md={5} className='SegundoColderecha' >
                        <img src={galletasHelados} className='SegundoImg' />
                    </Col>
                </Row>
            </Container>

            <Container xs={12} md={12} className='SegundocontainerMovil'>
                <Row className='PrimerRow' >
                    <Col xs={12} md={4} className='SegundoColizquierdaMovil'>
                        <img src={galletasHelados} className='SegundoImgMovil' />

                    </Col>
                    <Col xs={12} md={8} className='SegundoColderechaMovil' >
                        Galletas rellena de chocolate que te haran disfrutar de nuevas sensaciones y
                        sabores en tu paladar
                    </Col>

                </Row>
            </Container>
            <PiePagina />
        </>
    )
}

export default Inicio;