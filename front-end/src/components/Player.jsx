import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBackwardStep, 
    faCirclePlay, 
    faCirclePause, 
    faForwardStep,
    faVolumeHigh, // Adicione o ícone de volume
    faVolumeMute  // Adicione o ícone de mudo
} from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { songsArray } from '../assets/database/songs';

const Player = ({ duration }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(1); // Adicione estado para volume
    const [prevVolume, setPrevVolume] = useState(1); // Para guardar o volume anterior quando mutar
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);
    const { id } = useParams();
    
    const song = songsArray.find(
        (currentSongObj) => currentSongObj._id === id
    );

    if (!song) {
        console.log('Música não encontrada:', id);
        return <div>Música não encontrada</div>;
    }

    const artistSongs = songsArray.filter(
        (currentSongObj) => currentSongObj.artist === song.artist
    );

    const currentIndex = artistSongs.findIndex(
        (currentSongObj) => currentSongObj._id === id
    );

    const previousIndex = currentIndex === 0 ? artistSongs.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === artistSongs.length - 1 ? 0 : currentIndex + 1;

    const previousSong = artistSongs[previousIndex];
    const nextSong = artistSongs[nextIndex];

    const { audio } = song;

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const progress = (currentTime / audioRef.current?.duration) * 100 || 0;

    const handleProgressClick = (e) => {
        const bar = progressBarRef.current;
        const rect = bar.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        const newTime = pos * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const handlePlay = () => {
        console.log('URL do áudio:', audio);
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(error => {
                console.error('Erro ao tocar:', error);
            });
        }
        setIsPlaying(!isPlaying);
    };

    // Adicione função para controlar o volume
    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
        setIsMuted(newVolume === 0);
    };

    // Função para alternar mudo/som
    const handleMuteClick = () => {
        if (isMuted) {
            setVolume(prevVolume);
            audioRef.current.volume = prevVolume;
        } else {
            setPrevVolume(volume);
            setVolume(0);
            audioRef.current.volume = 0;
        }
        setIsMuted(!isMuted);
    };

    return (
        <div className='player'>
            <div className='player__controllers'>
                <Link to={`/song/${previousSong._id}`}>
                    <FontAwesomeIcon className='player__icon' icon={faBackwardStep} />
                </Link>

                <FontAwesomeIcon 
                    className='player__icon player__icon--play' 
                    icon={isPlaying ? faCirclePause : faCirclePlay}
                    onClick={handlePlay}
                />

                <Link to={`/song/${nextSong._id}`}>
                    <FontAwesomeIcon className='player__icon' icon={faForwardStep} />
                </Link>
            </div>

            <div className='player__progress'>
                <p>{formatTime(currentTime)}</p>
                <div 
                    className='player__bar' 
                    ref={progressBarRef}
                    onClick={handleProgressClick}
                    style={{ cursor: 'pointer' }}
                >
                    <div 
                        className='player__bar-progress' 
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p>{duration}</p>
            </div>

            {/* Adicione o controle de volume */}
            <div className='player__volume'>
                <FontAwesomeIcon 
                    className='player__icon' 
                    icon={isMuted ? faVolumeMute : faVolumeHigh}
                    onClick={handleMuteClick}
                />
                <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className='player__volume-slider'
                />
            </div>

            <audio 
                ref={audioRef}
                src={audio}
                onTimeUpdate={handleTimeUpdate}
                onError={(e) => console.error('Erro no elemento audio:', e)}
            />
        </div>
    );
};

export default Player;