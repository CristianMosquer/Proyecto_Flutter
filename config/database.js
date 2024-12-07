// config/database.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Cargar variables de entorno desde el archivo .env

const connectDB = async () => {
  try {
    // Conexión a MongoDB usando la URI definida en el archivo .env
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Conectado: ${conn.connection.host}`); // Mensaje de éxito
  } catch (error) {
    console.error(`Error: ${error.message}`); // Mostrar error si ocurre
    process.exit(1); // Finalizar el proceso si no se puede conectar
  }
};

export default connectDB;
