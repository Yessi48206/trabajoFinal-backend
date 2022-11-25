import mongoose from "mongoose";

const url = 'mongodb://127.0.0.1:27017/Brooks';
//const url = 'mongodb://localhost:27017/Broks';
//const url ='mongodb+srv://Yessi1999:Jorge1999@cluster0.olmkxwt.mongodb.net/Brooks'

mongoose.connect(url);

const datosConexion = mongoose.connection;

datosConexion.once('open', ()=>{
    console.log('BD conectada');
})