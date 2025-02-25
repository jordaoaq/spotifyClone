import { MongoClient } from "mongodb";

const URI = "mongodb+srv://jordaoquirino:34815343vj@cluster0.jipwu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(URI);

try {
    await client.connect();
    console.log('Conectado ao MongoDB');
} catch (error) {
    console.error('Erro ao conectar:', error);
}

export const db = client.db("spotifyClone");
