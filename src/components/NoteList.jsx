// src/components/NoteList.jsx
import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({
  activeNotes,
  archivedNotes,
  onDelete,
  onToggleArchive,
}) => {
  return (
    <div className="notes-list">
      <div className="note-section">
        <h2>Catatan Aktif</h2>
        {activeNotes.length === 0 ? (
          <p className="notes-list__empty-message">Tidak ada catatan aktif.</p>
        ) : (
          <div>
            {activeNotes.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                onDelete={onDelete}
                onToggleArchive={onToggleArchive}
              />
            ))}
          </div>
        )}
      </div>

      <div className="note-section">
        <h2>Catatan Diarsipkan</h2>
        {archivedNotes.length === 0 ? (
          <p className="notes-list__empty-message">
            Tidak ada catatan diarsipkan.
          </p>
        ) : (
          <div>
            {archivedNotes.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                onDelete={onDelete}
                onToggleArchive={onToggleArchive}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteList;
