import axios from "axios";

const URL = "http://localhost:3000";

// Inicializa os arrays vazios
let artistArray = [];
let songsArray = [];

async function fetchData() {
    try {
        const responseArtists = await axios.get(`${URL}/artists`);
        const responseSongs = await axios.get(`${URL}/songs`);
        
        // Atualiza os arrays com os dados da API
        artistArray = responseArtists.data;
        songsArray = responseSongs.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}

// Executa a função para buscar os dados
fetchData();

// Exporta os arrays com os mesmos nomes usados no resto do código
export { artistArray, songsArray };
