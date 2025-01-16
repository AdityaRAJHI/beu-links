import React, { useState } from 'react';
    import './About.css';

    function About() {
      const [notes, setNotes] = useState('');
      const [newNote, setNewNote] = useState('');

      const handleInputChange = (event) => {
        setNewNote(event.target.value);
      };

      const handleAddNote = () => {
        if (newNote.trim() !== '') {
          setNotes(notes ? `${notes}\n${newNote}` : newNote);
          setNewNote('');
        }
      };

      return (
        <div className="about-container">
          <h1>About</h1>
          <p>This is the about page.</p>
          <div className="notes-section">
            <h2>Notes</h2>
            <textarea
              value={newNote}
              onChange={handleInputChange}
              placeholder="Enter your notes here"
            />
            <button onClick={handleAddNote}>Add Note</button>
            <div className="notes-display">
              <pre>{notes}</pre>
            </div>
          </div>
        </div>
      );
    }

    export default About;
