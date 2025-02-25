import axios from "axios";

<<<<<<< HEAD
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
=======
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
>>>>>>> 6c0651aa9ef7d9927b623553b2b998027a50bf86
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}

<<<<<<< HEAD
// Executa a função imediatamente
fetchData();
=======
// Executa a função para buscar os dados
fetchData();

// Exporta os arrays com os mesmos nomes usados no resto do código
export { artistArray, songsArray };
>>>>>>> 6c0651aa9ef7d9927b623553b2b998027a50bf86
