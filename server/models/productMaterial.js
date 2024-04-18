import mongoose from "mongoose";


const productSchema = mongoose.Schema({
    productName: String,
    productQuantity: String,
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'categoriesSchema',
        require:true
    },
    materialsWeight : [
        {
            number_of_service: Number,
            materials_name: String,
            materials_quantity: String, 
            weight_multi_service: Number
        }
    ],

})

const productMaterial = mongoose.model('productMaterial', productSchema)


export default productMaterial;