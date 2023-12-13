// src/components/Note.jsx
import React from "react";

const Note = ({ note, onDelete, onToggleArchive }) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => onDelete(note.id)}>Hapus Catatan</button>
    </div>
  );
};

export default Note;
