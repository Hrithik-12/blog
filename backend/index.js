const express=require('express');
const mongoose=require('mongoose');
const routing=require('./routes/Authroutes.js');
const cors=require('cors')


const app=express();
app.use(express.json());
mongoose.connect('mongodb+srv://Hrithik:RKGxyZnh7dBmI66w@cluster0.vxm6kgs.mongodb.net/MY_BLOG').then(()=>{
  console.log('DB is Connected')
}).catch((error)=>{
  console.log(error)
});
app.use(cors())
app.use('/auth/user',routing);

// middleware to handle the error

app.use((err,req,res,next)=>{
  const statuscode= err.statuscode || 500;
  const message=err.message || "internal server Error";
  return res.status(statuscode).json({
    success:false,
    message,
    statuscode
  })
})



app.listen(3000,()=>{
  console.log('server is on')
})