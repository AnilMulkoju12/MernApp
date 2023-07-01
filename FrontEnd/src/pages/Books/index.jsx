import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import axios from "axios";
import Book from "../Book.js";
import "./styles.scss";
// const URL = "http://localhost:3000/books";

// const fetchHandler = async () => {
//   return await axios.get(URL).then((res) => {
//     res.data;
//     console.log(res.data);
//   });
// };
const Books = () => {
  const [books, setBooks] = useState(null);
  // const [loading,setLoading] =useState(ture);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await axios.get("http://localhost:3000/books");
        // console.log(res,"Responce")
        setBooks(res.data.books);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBooks();
  }, []);
  // useEffect(() => {
  //   fetch("http://localhost:3000/books")
  //     .then((response) => response.json())
  //     .then((data) => setBooks(data.books));
  // }, []);
  // console.log(books);

  return (
    <div>
      <Header />
      <div className="main-container">
        {books &&
          books.map((book, i) => {
            return (
              <div key={i} className="books-container">
                <Book books={book} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Books;
