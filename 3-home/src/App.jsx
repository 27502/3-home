import { useState } from "react";
import "./pages/style.css";
import BookForm from "./pages/bookform.jsx";
import BookList from "./pages/booklist.jsx";

const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (title) => {
    setBooks([...books, { id: Date.now(), title }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>📚 Kitoblar Ro‘yxati</h1>
      <BookForm addBook={addBook} />
      <BookList books={books} deleteBook={deleteBook} />
    </div>
  );
};

export default App;
