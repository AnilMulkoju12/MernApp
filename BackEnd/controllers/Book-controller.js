const Book = require("../model/Book");
const RegesterUser = require("../model/Registeruser");
const jwt = require("jsonwebtoken");


const getAllBooks = async (req, res, next) => {
  let books;
  // console.log(books,"BOOKS INFO")
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }
  if (!books) {
    return res.status(404).json({ message: "No books found" });
  }
  return res.status(200).json({ books });
};

const getById = async(req,res,next)=>{
 const id = req.params.id;
  let book;
  try{
    book = await Book.findById(id);
  }catch (err){
    console.log(err)
  }
  if(!book){
    return res.status(404).json({message:'No book Found >>>>'})
  }
  return res.status(200).json({book})
}

const addBooks = async  (req, res, next) => {
  // console.log(req.body)
  let { name, author, description, price, available,image } = req.body;
  try {
    const require = await req.body
    console.log(require)
    let books = await Book.create({
      name,
      author,
      description,
      price,
      available,
      image
    });
    console.log(books)
    // return successResponse(req, res, cards, "Sucess");
    res.status(201).json({message:'sucessfully created',data:books});
  } catch (err) {
    console.log(err, "Error");
  }
};

const updateBooks = async(req,res,next) =>{
  const id = req.params.id;
  let { name, author, description, price, available } = req.body;
  let book;
  try{
    book = await Book.findByIdAndUpdate(id,{
      name,
      author,
      description,
      price,
      available
    })
    book = await book.save();
  }catch(err){
    console.log(err)
  }
  if(!book){
    return res.status(404).json({message:'Unable to Update'})
  }
  return res.status(200).json({book})
}

const deleteBooks = async(req,res,next) =>{
  const id = req.params.id;
  let book;
  try{
    book = await Book.findByIdAndRemove(id)
  }
  catch(err){
    console.log(err)
  }
  if(!book){
    return res.status(404).json({message:"Unable to Delete"})
  }
  return res.status(200).json({book});
}
const signUp = async(req,res) =>{
  try{
   const {username,email,password,confirmpassword} = req.body;
   let exist =  await RegesterUser.findOne({email})
   if(exist){
    return res.status(400).send("User AlredyExist");
   }
   if(password !== confirmpassword){
    return res.status(400).send("Password is not Matching !!");
   }
   let newUser = new RegesterUser({
    username,
    email,
    password,
    confirmpassword
   })
   await newUser.save();
   return res.status(200).send("Registerd sucessfully")

  }catch(err){
    console.log(err);
    return res.status(500).send("Internal Server Error")
  }
}

const login = async(req,res) =>{
  try{
      const {email,password} = req.body;
      let exist = await RegesterUser.findOne({email})
      if(!email){
        return res.status(400).send("User Not Found");
      }
      if(exist.password !== password){
        return res.status(400).send("Invalid Credentials");
      }
      let payload = {
        user:{
          id:exist.id,
        }
      }
      jwt.sign(payload,"key",{expiresIn:3600000},(err,token)=>{
        if(err)throw err;
        return res.json({token})
      })
  }catch(err){
    console.log(err)
    return res.status(500).send("Server Error");
  }
}
const myProfile = async(req,res)=>{
  try{
    let exist = await RegesterUser.findById(req.user.id);
    if(!exist){
      return res.status(400).send("User Not Found");
    }
    res.json(exist)
  }catch(err){
    console.log(err)
  }
}

exports.getAllBooks = getAllBooks;
exports.addBooks = addBooks;
exports.getById = getById;
exports.updateBooks = updateBooks;
exports.deleteBooks = deleteBooks;
exports.signUp = signUp;
exports.login = login;
exports.myProfile = myProfile;