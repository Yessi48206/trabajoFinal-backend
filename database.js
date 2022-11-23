import mongoose from "mongoose";

const url = 'mongodb://127.0.0.1:27017/bar-strella'

mongoose.connect(url);

const datosConexion = mongoose.connection;

datosConexion.once('open', ()=>{
    console.log('BD conectada');
})