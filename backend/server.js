import express from 'express';
import config from './config';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoute from './routes/userRoutes';
const mongodbUrl=config.MONGODB_URL;
mongoose.connect(mongodbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).catch((error)=>console.log(error.reason));
const app=express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use("/api/users",userRoute);
//app.get("/api/products/:id",(req,res)=>{
   // const productId=req.params.id;
   // const product=data.products.find(x=>x._id===productId);
    //if(product)
    //{
     //   res.send(product);
    //}
    //else
   // {
     //   res.status(404).send({msg: "Product Not Found."});
    //}
//});
//app.get("/api/products",(req,res)=>{
  //  res.send(data.products);
//});
//app.set('trust-proxy',1);

app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) =>{ res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));});
app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});