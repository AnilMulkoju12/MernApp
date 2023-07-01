import React,{useState} from "react";
import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Book = (props) => {
  // console.log(props.books.name,"APi Response");
  const { _id, name, author, price, description, image } = props.books;
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();
  const handleUpdate = ()=>{
    navigate(`/books/${_id}`)
  }
  const deleteHandler = async()=>{
    await axios.delete(`http://localhost:3000/books/${_id}`).then(res=>res.data).then(()=>{
      setIsDeleted(true);
      navigate('/books');
    })
  }
  if (isDeleted) {
    return null;
  }
  return (
    <div className="book-container">
      <div className="book-container__card">
        <img src={image} alt={name} className="book-container__image" />
        <div className="book-container__card-details">
          <div>
            <h3>{name}</h3>
            <h4>{author}</h4>
            <p>{description}</p>
            <p>{price}</p>
            <div className="book-container__buttons">
              <button onClick={handleUpdate}>Update</button>
              <button onClick={deleteHandler}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
