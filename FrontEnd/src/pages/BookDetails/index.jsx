import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetails = () => {
  const id = useParams().id;
  const [inputs, setInputs] = useState();
  const navigate =useNavigate()
  console.log(id);
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:3000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios.put(`http://localhost:3000/books/${id}`, {
      name: String(inputs.name),
      author: String(inputs.author),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
    }).then(res=>res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(()=>{navigate("/books")})
  };
  const handleChange = (e) => {
    setInputs((prvState) => ({ ...prvState, [e.target.name]: e.target.value }));
  };
  console.log(inputs);
  return (
    <div className="bookDetails">
      {inputs && (
        <div className="addbooks-container">
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              value={inputs.name}
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="name"
            />
            <label>Author</label>
            <input
              value={inputs.author}
              name="author"
              onChange={handleChange}
              type="text"
              placeholder="author"
            />
            <label>Description</label>
            <input
              value={inputs.description}
              name="description"
              onChange={handleChange}
              type="text"
              placeholder="description"
            />
            <label>price</label>
            <input
              value={inputs.price}
              name="price"
              onChange={handleChange}
              type="number"
              placeholder="price"
            />
            <label>image</label>
            <input
              value={inputs.image}
              name="image"
              onChange={handleChange}
              type="text"
              placeholder="image"
            />
            {/* <label>image</label>
            <input value={inputs.image} onChange={handleChange}type="text" placeholder="price" /> */}
            {/* <div className="addbooks-container__checkbox">
              <input type="checkbox" />
              <label>Available</label>
            </div> */}
            <button>UpdateBook</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
