import { useRef, useState } from 'react';
import { RiPlayFill, RiPauseFill } from 'react-icons/ri'; // Importa los íconos de react-icons


const Playlist = () => {

    const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };
    return (
        <div >
            <div className="botonMusica" style={{ position: 'absolute', top: '6%', left: '89%', transform: 'translate(-50%, -50%)' }}>

                <audio
        src="https://firebasestorage.googleapis.com/v0/b/tarjeta-invitacion-2f4f0.appspot.com/o/Robin%20Schulz%20ft.%20Rita%20Ora%20ft.%20Tiago%20PZK%20-%20Ill%20Be%20There%20(Instrumental).mp3?alt=media&token=7792fd20-922b-4fc7-80a3-ce20a0dca4f6"
        ref={audioRef}
        preload="metadata"
      />
      <button 
  className={`botonMusica ${isPlaying ? 'playing' : ''}`}
  onClick={handlePlayPause}
>
  <span className="icon-background">
    {isPlaying ? <RiPauseFill className='icon' /> : <RiPlayFill className='icon' />}
  </span>
  {isPlaying ? '' : ''}
</button>
    </div>

    {/* <h3 className='play' style={{ position: 'absolute', top: '6%', left: '89%',  }}>Dale */}
   {/* Play!</h3> */}
        </div>
        )
    }


export default Playlist