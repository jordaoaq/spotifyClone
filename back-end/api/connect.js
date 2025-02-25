import { MongoClient } from "mongodb";

const URI = "mongodb+srv://jordaoquirino:34815343vj@cluster0.jipwu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("spotifyClone")
