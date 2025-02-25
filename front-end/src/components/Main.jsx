import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import axios from 'axios';

const Main = ({ type }) => {
    const [artists, setArtists] = useState([]);
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const URL = import.meta.env.VITE_API_URL;
                const [artistsResponse, songsResponse] = await Promise.all([
                    axios.get(`${URL}/artists`),
                    axios.get(`${URL}/songs`)
                ]);
                
                console.log("Dados recebidos:", {
                    artists: artistsResponse.data,
                    songs: songsResponse.data
                });

                setArtists(artistsResponse.data);
                setSongs(songsResponse.data);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className={`main`}>
            {(type === 'artists' || type === undefined) && (
                <ItemList
                    title='Artistas'
                    items='5'
                    itemsArray={artists}
                    path="/artists"
                    idPath="/artist"
                />
            )}

            {(type === 'songs' || type === undefined) && (
                <ItemList
                    title='Músicas'
                    items='8'
                    itemsArray={songs}
                    path="/songs"
                    idPath="/song"
                />
            )}
        </div>
    );
};

export default Main;