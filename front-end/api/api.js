import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export let artistArray = [];
export let songsArray = [];

async function fetchData() {
    try {
        const [responseArtists, responseSongs] = await Promise.all([
            axios.get(`${URL}/artists`),
            axios.get(`${URL}/songs`)
        ]);
        
        artistArray = responseArtists.data;
        songsArray = responseSongs.data;
        
        console.log("Dados carregados:", { artistArray, songsArray });
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}

// Executa a função imediatamente
fetchData();