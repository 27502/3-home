const BookList = ({ books, deleteBook }) => {
    return (
      <ul>
        {books.length === 0 ? (
          <p>📖 Hozircha kitob yo‘q</p>
        ) : (
          books.map((book) => (
            <li key={book.id}>
              {book.title}
              <button onClick={() => deleteBook(book.id)}>❌ O‘chirish</button>
            </li>
          ))
        )}
      </ul>
    );
  };
  
  export default BookList;
  