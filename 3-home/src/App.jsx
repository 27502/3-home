import { useState } from "react";
import "./pages/style.css";
import BookForm from "./pages/bookform.jsx";
import BookList from "./pages/booklist.jsx";

const App = () => {
  const [books, setBooks] = useState([]);
  const [editBookId, setEditBookId] = useState(null);

  const addBook = (title) => {
    setBooks([...books, { id: Date.now(), title }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const startEditing = (id) => {
    setEditBookId(id);
  };

  const saveEdit = (id, newTitle) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, title: newTitle } : book
      )
    );
    setEditBookId(null);
  };

  return (
    <div>
      <h1>📚 Kitoblar Ro‘yxati</h1>
      <BookForm addBook={addBook} />
      <BookList
        books={books}
        deleteBook={deleteBook}
        startEditing={startEditing}
        saveEdit={saveEdit}
        editBookId={editBookId}
      />
    </div>
  );
};

export default App;
