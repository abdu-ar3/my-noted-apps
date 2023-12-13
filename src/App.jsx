// src/App.jsx
import React, { useState } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import "./style.css";

const App = () => {
  const [activeNotes, setActiveNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);

  const addNote = (newNote) => {
    setActiveNotes([...activeNotes, newNote]);
  };

  const deleteNote = (id) => {
    setActiveNotes(activeNotes.filter((note) => note.id !== id));
    setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
  };

  const toggleArchive = (id) => {
    const targetNote = activeNotes.find((note) => note.id === id);

    if (targetNote) {
      // Pindahkan catatan dari aktif ke diarsipkan
      setActiveNotes(activeNotes.filter((note) => note.id !== id));
      setArchivedNotes([...archivedNotes, { ...targetNote, archived: true }]);
    } else {
      // Pindahkan catatan dari diarsipkan ke aktif
      const targetArchivedNote = archivedNotes.find((note) => note.id === id);
      setActiveNotes([
        ...activeNotes,
        { ...targetArchivedNote, archived: false },
      ]);
      setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
    }
  };

  return (
    <div className="App">
      <h2>Aplikasi Catatan Pribadi</h2>
      <NoteForm onAdd={addNote} />
      <NoteList
        activeNotes={activeNotes}
        archivedNotes={archivedNotes}
        onDelete={deleteNote}
        onToggleArchive={toggleArchive}
      />
    </div>
  );
};

export default App;
