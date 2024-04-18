import User from "../models/user.js";
import express from "express";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";


export const getUser = async (req, res) => { 
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getUserId =  async (req, res) =>{
  const user = await  User.findById(req.params.id)
  try{
    if(!user) {
        return res.status(404).json({success: false , message: "user not found!"})
    } 
    res.status(200).send(user);
  }catch(error){
    res.status(404).json({ message: error.message });
  }
  
}


export const searchUser = async(req, res) =>{
    let data = await User.find(
        {
            "$or":[
                {"name":{$regex: req.params.key}},
                {"email":{$regex:req.params.key}},
           
            ]
        },
      
    )
    res.send(data)
}
export const createUser = async (req, res) => {
    // const file = req.file;
    // if(!file) return res.status(400).send('No image in the request')
    // const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
    // const fileName = file.filename;

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: await bcrypt.hash(req.body.password, 10),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        apartment: req.body.apartment,
        zip: req.body.zip,
        age: req.body.age,
        city: req.body.city,
        country: req.body.country
        // image: `${basePath}${fileName}`
    })
    try {
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    const file = req.file;
 
    if(!file) return res.status(400).send('No image in the request')
    const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
    const fileName = file.filename;
    const userExist = await User.findById(req.params.id);
    let newPassword
    if(req.body.password){
        newPassword = bcrypt.hashSync(req.body.password, 10)  
    } else{
        newPassword = userExist.passwordHash;
    }
    const user = await User.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            email: req.body.email,
            passwordHash: newPassword,
            phone: req.body.phone,
            isAdmin: req.body.isAdmin,
            street: req.body.street,
            apartment: req.body.apartment,
            zip: req.body.zip,
            city: req.body.city,
            country: req.body.country,
        },
        { new: true}
    )
    if(!user)
    return res.status(400).send('the user cannot be created!')
    try {
       res.send(user)
        res.status(201).json(product);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const login = async (req, res) =>{
    const user = await User.findOne({email: req.body.email})
    const secret = process.env.SECRET;
    if(!user){
        return  res.status(400).send('The user not found');
    }
    if(user && bcrypt.compareSync(req.body.password, user.passwordHash)){
        const token = jwt.sign(
            {
                userId: user.id,
                // isAdmin: user.isAdmin  
            },
            secret,
            {expiresIn : '2d'}
        )
        res.status(200).send({user: user.email , token: token}) 
    } else {
        res.status(400).send('password is wrong!');
     }
}

export const deleteuser = async ( req, res) =>{
       User.findByIdAndRemove(req.params.id).then(user =>{
            if(user) {
                return res.status(200).json({success: true, message: 'the user is deleted!'})
            } else {
                return res.status(404).json({success: false , message: "user not found!"})
            }
        }).catch(err=>{
           return res.status(500).json({success: false, error: err}) 
        })
 
}