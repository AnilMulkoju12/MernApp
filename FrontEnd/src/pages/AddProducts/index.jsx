import React, { useState } from "react";
import Header from "../../components/Header";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const AddProducts = () => {
  const navigate = useNavigate();
  const [inputs,setInputs] = useState({
    name:'',
    description:'',
    price:'',
    author:'',
    available:false,
    image:'',
  })
  const handleChange = (e)=>{
    setInputs((prvState)=>({...prvState,[e.target.name]:e.target.value}));
  }
  
  const sendRequest = async(e)=>{
    await axios.post('http://localhost:3000/books/add',{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image),
    }).then(res => res.data);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(inputs);
    sendRequest().then(()=>{navigate('/books')});
  }
  return (
    <div className="addProducts">
      <Header />
      <div className="addbooks-container">
        <form onSubmit={handleSubmit}> 
        <div>
          <h3>Add A Book</h3>
        </div>
          <label>Name</label>
          <input value={inputs.name} name="name"onChange={handleChange} type="text" placeholder="name" />
          <label>Author</label>
          <input value={inputs.author} name="author"onChange={handleChange}type="text" placeholder="author" />
          <label>Description</label>
          <input value={inputs.description} name="description" onChange={handleChange}type="text" placeholder="description" />
          <label>price</label>
          <input value={inputs.price} name="price" onChange={handleChange}type="number" placeholder="price" />
          <label>image</label>
          <input value={inputs.image} name="image" onChange={handleChange}type="text" placeholder="image" />
          {/* <label>image</label>
          <input value={inputs.image} onChange={handleChange}type="text" placeholder="price" /> */}
          {/* <div className="addbooks-container__checkbox">
            <input type="checkbox" />
            <label>Available</label>
          </div> */}
          <button>AddBook</button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
