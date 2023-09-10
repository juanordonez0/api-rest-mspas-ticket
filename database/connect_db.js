
import mongoose from "mongoose";


try{
    await mongoose.connect(process.env.URI_MONGO);
    console.log("Connection OK");

}catch(error){

    console.log("Error de conexión a la base de datos" + error );
}
