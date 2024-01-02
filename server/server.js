const express = require('express');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = 3000;

const dataDir = path.join(__dirname, '..', 'data');
const notesFilePath = path.join(dataDir, 'notes.json');

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api/notes', async (req, res) => {
    try {
        const notesData = await fs.readFile(notesFilePath, 'utf-8');
        const notes = JSON.parse(notesData);
        res.json(notes);
    } catch (error) {
        console.error('Error reading notes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/notes', async (req, res) => {
    try {
        const newNote = req.body;
        const notesData = await fs.readFile(notesFilePath, 'utf-8');
        const notes = JSON.parse(notesData);
        notes.push(newNote);
        await fs.writeFile(notesFilePath, JSON.stringify(notes));
        res.json(notes);
    } catch (error) {
        console.error('Error adding note:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/api/notes/:id', async (req, res) => {
    try {
        const noteId = req.params.id;
        const notesData = await fs.readFile(notesFilePath, 'utf-8');
        let notes = JSON.parse(notesData);
        notes = notes.filter(note => note.id !== noteId);
        await fs.writeFile(notesFilePath, JSON.stringify(notes));
        res.json(notes);
    } catch (error) {
        console.error('Error deleting note:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});