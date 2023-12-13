// src/components/NoteItem.jsx
import React from "react";
import Note from "./Note";

const NoteItem = ({ note, onDelete, onToggleArchive }) => {
  const handleArchive = () => {
    onToggleArchive(note.id);
  };

  return (
    <div>
      <Note note={note} onDelete={onDelete} />
      <button onClick={handleArchive}>
        {note.archived ? "Kembalikan dari Arsip" : "Arsipkan"}
      </button>
    </div>
  );
};

export default NoteItem;
