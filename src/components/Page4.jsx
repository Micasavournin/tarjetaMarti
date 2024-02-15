
const Page4 = () => {
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd51lMfc6DOExbf18sv4a7dM00j8ClVxiL1eO1sOXN4bsJMCA/viewform?usp=sf_link';
    return (
        <div className="contenedor">
            <img  src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/asist-04.png?alt=media&token=0b8008cf-a46c-4ec6-aaae-2da20083a5b7" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />

            <a 
             style={{ position: 'absolute', top: '95%', left: '50%', transform: 'translate(-50%, -50%)'}}
        href={googleFormUrl} 
        target="_blank" rel="noopener noreferrer" 
        className=""
      >
        <button className="botonRecordar">
        Confirmar
            </button>
      </a>
        </div>
        )
    }


export default Page4