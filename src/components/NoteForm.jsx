// src/components/NoteForm.jsx
import React, { useState } from "react";

const NoteForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [remainingCharacters, setRemainingCharacters] = useState(50);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    if (newTitle.length <= 50) {
      setTitle(newTitle);
      setRemainingCharacters(50 - newTitle.length);
    }
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now().toString(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    onAdd(newNote);
    setTitle("");
    setBody("");
    setRemainingCharacters(50);
  };

  return (
    <div className="note-input">
      <form onSubmit={handleSubmit}>
        <div className="note-input__title">
          <label htmlFor="title">Judul:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <p className="note-input__title__char-limit">
          Sisa karakter: {remainingCharacters}
        </p>
        <div className="note-input__body">
          <label htmlFor="body">Isi:</label>
          <textarea
            id="body"
            value={body}
            onChange={handleBodyChange}
            required
          ></textarea>
        </div>
        <button type="submit">Tambah Catatan</button>
      </form>
    </div>
  );
};

export default NoteForm;
