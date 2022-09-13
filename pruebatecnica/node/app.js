import  express  from 'express';
import cors from 'cors'
//importamos la conexion a la bd
import db from './database/db.js'
import fRoutes from './routes/routes.js'

 const app = express()

 app.use(cors())
 app.use(express.json())
 app.use('/fiscalias', fRoutes)

 //definimos nuestra conexion
 try {
   await db.authenticate()
    console.log('Conexion exitosa a la DB')
 } catch (error) {
    console.log(`El error de conexion es: ${error}`)
    
 }


 app.listen(9000, ()=>{
    console.log('Servidor corriendo en el puerto http://localhost:9000/')
 })