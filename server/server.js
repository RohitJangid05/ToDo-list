import express from "express";
import router from "./routes.js";
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url'; // Import fileURLToPath
import { connectToMongoDB } from "./database.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html")); 
});

app.use('/api', router);

const port = process.env.PORT || 3000; 

async function connectServer() {
  await connectToMongoDB();
  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
  });
}

connectServer();
