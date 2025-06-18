import express from 'express'
import cors from 'cors'
import 'dotenv/config'

//Intialize Express
const app = express();

//MiddleWares
app.use(cors());
app.use(express.json())

//Routes
app.get('/',(req,res)=>{
   res.send("API Woring")
})

//PORT
const PORT = process.env.PORT || 5000 ;

app.listen(PORT,()=>{console.log(`Server is running on Port ${PORT}`)});