import iconowhatsapp from '../imagenes/whatsapp.png';
import linkWhatsapp from './Whatsapp';
const IconoWhatsapp = ()=>{

    return(
        <>
        <div><a href={linkWhatsapp.link} target="_blank" rel="noopener noreferrer"><img className='iconoEscribirWhatsapp' src={iconowhatsapp} /></a></div>
        </>
    )
}

export default IconoWhatsapp;