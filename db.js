const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://ayush:ayushkaushik@cluster0.isqxa1d.mongodb.net/sirRepo?retryWrites=true&w=majority")

module.exports={
    connection
}