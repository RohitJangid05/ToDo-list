import express from 'express'
import { getConnectedClient } from './database.js';
import { ObjectId } from 'mongodb';
const router = express.Router();
const getCollection = () => {
    const client = getConnectedClient();
    const collection = client.db('todosdb').collection('todos');
    return collection;
}


router.get('/todos', async (req, res) => {
    const collection = getCollection();
    const todos = await collection.find({}).toArray()
    res.status(200).json(todos)
})

router.post('/todos', async (req, res) => {
    const collection = getCollection();
    let { todo } = req.body;

    if (!todo) {
        return res.status(400).json({ mssg: "error no todo found" })
    }

    todo = (typeof todo === "string") ? todo : JSON.stringify(todo);
    const createdAt = new Date();
    const newTodo = await collection.insertOne({todo,createdAt})

    res.status(201).json({ todo,createdAt ,_id: newTodo.insertedId })
})

router.delete('/todos/:id', async (req, res) => {
    const collection = getCollection();
    const _id = new ObjectId(req.params.id)

    const deleteTodo = await collection.deleteOne({_id})

    res.status(200).json(deleteTodo)
})

router.put('/todos/:id', async (req, res) => {
    res.status(200).json({mssg:"put request"})
})

export default router;