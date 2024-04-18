import express from 'express';
import mongoose from 'mongoose';                                                                                       
import categorySchema from '../models/categories.js';
import multer from 'multer'

const router = express.Router();


export const getCategories = async (req, res) => {
    try {
        const fetchCategories = await categorySchema.find();
        res.status(200).json(fetchCategories);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getCategoriesId =  async (req, res) =>{
    const Categories = await  categorySchema.findById(req.params.id)
    try{
      if(!Categories) {
          return res.status(404).json({success: false , message: "user not found!"})
      } 
      res.status(200).send(Categories);
    }catch(error){
      res.status(404).json({ message: error.message });
    }
    
  }
  
  
  export const searchCategories = async(req, res) =>{
      let data = await categorySchema.find(
          {
              "$or":[
                  {"name":{$regex: req.params.key}},
                  {"status":{$regex:req.params.key}},
             
              ]
          },
        
      )
      res.send(data)
  }
export const createCategories = async (req, res) => {
    const file = req.file;
    if(!file) return res.status(400).send('No image in the request')
    const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
    const fileName = file.filename;
   let category = new categorySchema({
        name: req.body.name,
        active: req.body.active,
        status: req.body.status,
        image: `${basePath}${fileName}`
    })
    try {
        category = await category.save();
        res.status(201).json(category );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const deleteCategories =  async (req, res) =>{
    categorySchema.findByIdAndRemove(req.params.id).then(categorySchema =>{
        if(categorySchema) {
            return res.status(200).json({success: true, message: 'the category is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "category not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
}
export const updateCategories =  async (req, res) => {
    try{
        const category = await categorySchema.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                icon: req.body.icon || category.icon,
                color: req.body.color,
            },
            { new: true}
        )
    
        if(!category)
        return res.status(400).send('the category cannot be created!')
    
        res.send(category);   
    } catch{

    }
}
export default router;  