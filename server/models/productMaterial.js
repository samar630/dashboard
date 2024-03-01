import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    productName: String,
    productQuantity: String,
    totalWeight:Number,
    number_of_service: Number,
    image: String,
    materialsWeight : [
        {
            materials_name: String,
            unit:String,
            materials_quantity: String,
           
            weight_multi_service: Number
        }
    ],

})

const productMaterial = mongoose.model('productMaterial', productSchema)


export default productMaterial;