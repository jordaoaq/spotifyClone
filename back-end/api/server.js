import express from 'express';
import cors from "cors";
import { db } from './connect.js';

const app = express();
const PORT = process.env.PORT || 10000;
const cors = require("cors");

// Em server.js, configure o CORS corretamente
app.use(cors());


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/', (request, response) => {
    response.send('Trabalhei com os ending points /artists e /songs');
});

app.get('/artists', async(request, response) => {
    try {
        const artists = await db.collection("artists").find({}).toArray();
        console.log("Artistas encontrados:", artists.length);
        response.json(artists);
    } catch (error) {
        console.error("Erro ao buscar artistas:", error);
        response.status(500).json({ error: "Erro ao buscar artistas" });
    }
});

app.get('/songs', async(request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.json()); // Para permitir JSON nas requisições


