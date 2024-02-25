import express from "express"
import router from "./routes.js"
import dotenv from 'dotenv';
dotenv.config();
import {connectToMongoDB} from "./database.js"

const app = express()

app.use(express.json())
app.use('/api', router)

const port = process.env.PORT

async function connectServer(){
  await connectToMongoDB();
  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })
}
connectServer();

