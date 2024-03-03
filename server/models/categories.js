import mongoose from 'mongoose'

const categoriesSchema = mongoose.Schema({
    name: {
        type: String,
       
    },
    status: {
        type: String,
    },
    image: {
        type: String,  
    },
    active:{
        type: Boolean,
        default: 1
    }
})



const categorySchema = mongoose.model('categorySchema', categoriesSchema)
export default categorySchema