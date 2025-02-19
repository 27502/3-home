import { useState } from "react";

const BookList = ({ books, deleteBook, startEditing, saveEdit, editBookId }) => {
  const [newTitle, setNewTitle] = useState("");

  return (
    <ul>
      {books.length === 0 ? (
        <p>📖 Hozircha kitob yo‘q</p>
      ) : (
        books.map((book) => (
          <li key={book.id}>
            {editBookId === book.id ? (
              <>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Yangi nomni kiriting"
                />
                <button onClick={() => saveEdit(book.id, newTitle)}>
                  💾 Saqlash
                </button>
              </>
            ) : (
              <>
                {book.title}
                <div>
                  <button className="edit" onClick={() => startEditing(book.id)}>
                    ✏️ Tahrirlash
                  </button>
                  <button onClick={() => deleteBook(book.id)}>
                    ❌ O‘chirish
                  </button>
                </div>
              </>
            )}
          </li>
        ))
      )}
    </ul>
  );
};

export default BookList;
