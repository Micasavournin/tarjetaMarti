import  { useState, useEffect } from 'react';

const Page2 = () => {

    const googleCalendarUrl = "https://calendar.google.com/calendar/u/0/r/eventedit/MWswMHZwZ2Rjc3UybDZoMWI2YXV0bGt1YXAgbWljYWFzYXZvb0Bt?pli=1";

    const targetDate = new Date('2024-09-23T23:59:59').getTime();
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  
    function calculateTimeRemaining() {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      return {
        days,
        hours,
        minutes,
        seconds,
      };
    }
  
    useEffect(() => {
      const timerInterval = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining());
      }, 1000);
  
      return () => {
        clearInterval(timerInterval);
      };
    }, []);
  
    return (
        <div>
            <div className="contenedor" style={{ position: 'relative' }}>
  <img src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/cuanto-02.png?alt=media&token=5ccb7c49-7d4a-4b4c-ab36-38149b99b2ee"
    alt=""
    style={{ maxWidth: '100%', maxHeight: '100%' }}
  />
  <div className="contador" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' ,display: 'flex', flexDirection: 'row'}}>

  <div className='font' style={{ marginLeft:"5px", marginRight: '35px', fontSize: "45px"}}>{timeRemaining.days}</div> 
          <div className="background">
            <div className='font' style={{ marginRight: '40px', marginLeft:"20px", fontSize: "45px"}}>{timeRemaining.hours}</div> 
          </div>
          <div className="background">
            <div className='font' style={{ marginRight: '10px',marginLeft:"15px", fontSize: "45px"}}>{timeRemaining.minutes}</div> 

          </div>
          <div className="background">
            <div className='font' style={{ marginLeft: '30px', fontSize: "45px" }}>{timeRemaining.seconds}</div> 
          </div>
  </div>

  <a style={{ position: 'absolute', top: '85%', left: '50%', transform: 'translate(-50%, -50%)'}}
        href={googleCalendarUrl} target="_blank" 
        rel="noopener noreferrer" className="palabraAgendar">
      <button className="botonRecordar">
          Recordatorio
          </button>
        </a>
</div>


               
        </div>
        )
    }


export default Page2