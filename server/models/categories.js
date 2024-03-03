import mongoose from 'mongoose'

const categoriesSchema = mongoose.Schema({
    name: {
        type: String,
       
    },
    icon: {
        type: String,
    },
    color: { 
        type: String,
    },
    image: {
        type: String,
       
    }
})



const categorySchema = mongoose.model('categorySchema', categoriesSchema)
export default categorySchema