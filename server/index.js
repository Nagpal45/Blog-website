const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const path = require('path');

dotenv.config();
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")));

app.use("/",(req,res)=>{
    console.log("Hello World");
})

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"images");
    },
    filename:(req,file,cb) =>{
        cb(null,req.body.name);
    }
});

const upload = multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res) =>{
    res.status(200).json("File has been uploaded");
}
)


app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use('/api/posts',postRoute);
app.use('/api/categories',categoryRoute);


app.listen("5000", () =>{
    console.log('Backend server is running!');
})

