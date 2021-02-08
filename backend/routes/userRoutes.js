import express from 'express';
import User from '../models/userModel';


const router=express.Router();



router.post("/register",async(req,res)=>{
    const user=new User({
        CEO: req.body.CEO,
        director: req.body.director,
        manager: req.body.manager,
        coordinator: req.body.coordinator,
        User1: req.body.User1
    });
    const newUser=await user.save();
    if(newUser)
    {
        res.send({
            _id: newUser.id,
            CEO: newUser.CEO,
            director: newUser.director,
            manager: newUser.manager,
            coordinator: req.body.coordinator,
            User1: req.body.User1
        });
    }
    
    else
    {
        res.status(401).send({message: "Invalid user data"});
    }
})


router.get("/register",async(req,res)=>{
    const products=await User.find();
    res.send(products);
})
//router.get("/createadmin",async(req,res)=>{
  //  const products=await User.find();
   // res.send(products);
//})
export default router;