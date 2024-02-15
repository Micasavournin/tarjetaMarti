
const Page3 = () => {
    const locationUrl2 = "https://maps.app.goo.gl/QbtFgP8N4ReeD3wo6";
    return (
        <div className="contenedor">
            <img className="imagen marcoMarti" src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/celeb%20(TARJETA)-03.png?alt=media&token=f29c6e8b-3b87-41f2-89c6-3d4f1dcbd495" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            
            <a
            style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)'}}
          href={locationUrl2}
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="botonRecordar">

          Cómo llegar?
        </button>

        </a>
            
        </div>
        )
    }


export default Page3