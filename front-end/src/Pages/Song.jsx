import React from 'react';
import Player from '../components/Player';
import { Link, useParams} from 'react-router-dom';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs'; // Importe o array de músicas

const Song = () => {
    
    const songId = useParams().id;
    
    const song = songsArray.filter(
        (currentSongObj) => currentSongObj._id === songId
    )[0];

    if (!song) {
        return <div>Song not found</div>;
    }

    const { image, name, artist, duration, audio } = song;

    const artistObj = artistArray.filter(
        (currentArtistObj) => currentArtistObj.name === artist
    )[0];

    if (!artistObj) {
        return <div>Artist not found</div>;
    }

    return (
        <div className='song'>
            <div className='song__container'>
                <div className="song__image-container">
                    <img src={image} alt={`Imagem da música ${name}`} />    
                </div>            
                </div>
            
                <div className="song__bar">
                    <div className='song__artist-image'>
                        <Link to={`/artist/${artistObj._id}`}>
                            <img src={image} alt={`Imagem do artista ${artist}`} width={75} height={75}/>
                        </Link>
                    </div>

                    <Player duration={duration} audio={audio}/>

                    <div>
                        <p className='song__name'>{name}</p>
                        <p>{artist}</p>
                    </div>
            </div> 
        </div>
    );
};

export default Song;