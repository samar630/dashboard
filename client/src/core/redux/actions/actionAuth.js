import axios from 'axios';




const baseUrl ="http://localhost:5000"

export const createUser = async (users) => {
 
 try{
    axios.post(`${baseUrl}/user`,users).then(data => {
        console.log(data.status , 'test')
        if(data.status = '201'){
         
          localStorage.setItem('goto', true)
         
        }
        console.log(data, 'data')
    })
 }catch(err){
    return console.error(err, 'errortest')
 }
}
export const login = async (user) => {
    try{
       axios.post(`${baseUrl}/user/login`,user).then(data => {
           console.log(data?.data, 'data')
           localStorage.setItem('token', data?.data?.token)
          return data?.data
       })
    }catch(err){
       return console.error(err, 'error')
    }
   }
export const fetchUser = async () =>{
    try{
      const user = await axios.get(`${baseUrl}/user`)
      return user.data
    }catch(err){
        return console.error(err, 'error')
    }
}
export const deleteUser = async (id) =>{
    try{
       const user= axios.delete(`${baseUrl}/user/signUp/${id}`)     
        return user?.data  
    }catch(err){
        return console.error(err, 'error')
    }
}