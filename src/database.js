import {connect} from 'mongoose';
import {MONGODB_URI} from './config'

//console.log(process.env.MONGODB_URI);

(async ()=> {
    try{
    const db = await  connect(MONGODB_URI) // si no te funciona con localhost se le pasa 0.0.0.0
    console.log('DB connected to', db.connection.name)
    }catch (error){
    console.error(error)
    }
})() 