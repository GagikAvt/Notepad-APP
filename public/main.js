document.addEventListener('DOMContentLoaded', function () {
    loadNotes();
});

function loadNotes() {
    const notesContainer = document.getElementById('notes-container');
    notesContainer.innerHTML = '';

    fetch('http://localhost:3000/api/notes')
        .then(response => response.json())
        .then(notes => {
            notes.forEach(note => {
                const noteElement = document.createElement('div');
                noteElement.innerText = note.text;
                notesContainer.appendChild(noteElement);
            });
        })
        .catch(error => console.error('Error loading notes:', error));
}

function addNote() {
    const noteText = document.getElementById('note-input').value;

    if (noteText.trim() !== '') {
        const newNote = {
            text: noteText
        };

        fetch('http://localhost:3000/api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newNote),
        })
        .then(response => response.json())
        .then(updatedNotes => {
            console.log('Note added successfully');
            loadNotes();
            document.getElementById('note-input').value = '';
        })
        .catch(error => console.error('Error adding note:', error));
    }
}