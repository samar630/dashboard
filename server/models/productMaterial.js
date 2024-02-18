import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    productName: String,
    productQuantity: String,
    totalWeight:Number,
    materialsWeight : [
        {
            materials_name: String,
            unit:String,
            materials_quantity: String,
            number_of_service: Number,
            weight_multi_service: Number
        }
    ],

})

const productMaterial = mongoose.model('productMaterial', productSchema)


export default productMaterial;