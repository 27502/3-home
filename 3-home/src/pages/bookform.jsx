import { useState } from "react";

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addBook(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Kitob nomini kiriting..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Qo‘shish</button>
    </form>
  );
};

export default BookForm;
