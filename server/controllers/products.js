import express from 'express';
import mongoose from 'mongoose';
import productMaterial from '../models/productMaterial.js';
import categorySchema from '../models/categories.js';

const router = express.Router();

export const getProducts = async (req, res) => {
    try {
        const getProducts = await productMaterial.find();

        res.status(200).json(getProducts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createProduct = async (req, res) => {
    // const file = req.file;
    const category = await categorySchema.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid Category')
    // if(!file) return res.status(400).send('No image in the request')
    // const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
    // const fileName = file.filename;
    const product = new productMaterial({
        productName: req.body.productName,
        productQuantity : req.body.productQuantity,
        category: req.body.category,
        materialsWeight: req.body.materialsWeight,
        // image: `${basePath}${fileName}`
    })
    try {
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const deleteProduct =  async (req, res) =>{
    productMaterial.findByIdAndRemove(req.params.id).then(productMaterial =>{
        if(productMaterial) {
            return res.status(200).json({success: true, message: 'the product is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "product not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
}
export const updateProduct =  async (req, res) => {
    const { productName, productQuantity, totalWeight, materialsWeight} = req.body;
     const product = await productMaterial.findByIdAndUpdate(
        req.params.id,
         {
            productName,
            productQuantity,
            totalWeight,
            materialsWeight,
         },
         {new: true}
    )
    if(!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid Product Id')
     }
     return res.json(product);
}
  


export default router;