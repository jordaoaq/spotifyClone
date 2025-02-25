import React from 'react';
import { Link } from 'react-router-dom';

const SongItem = ({ image, name, duration, artist, audio, _id, index }) => {
    
    return (
        <Link to={`/song/${_id}`} className='song-item'>
            <div className='song-item__number-album'>
                <p>{index + 1}</p>
                <div className='song-item__album'>
                    <img className='song-item__image' src={image} alt={`Imagem da música ${name}`} />
                </div>
                <p className='song-item__title'>{name}</p>
            </div>
            <p>{duration}</p>
        </Link>
    );
};

export default SongItem;