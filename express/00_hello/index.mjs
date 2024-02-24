
import express from 'express';
const app = express();

const PORT = 8002;

app.get('/', (req, res)=>{
res.status(200).send({message: "Hello Express!"})
})


app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`)
})

