import dotenv from 'dotenv';
dotenv.config();
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI || "mongodb://locathost:27017/"

const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
};

let client;
const connectToMongoDB = async () => {
    if (!client) {
        try {
            client = await MongoClient.connect(uri, options)
            console.log("Connected to MONGODB")
        }
        catch (err) {
            console.log(err)
        }
    }
    return client;
}

const getConnectedClient = () => client

export {connectToMongoDB,getConnectedClient}