import express from 'expresss';
const app = express();

const PORT = 8004;


// 01 : routes
app.get('/admission', (req, res)=>{
    res.status(200).send({
        status :"Admission are open now"
    })
})


// 01 : routes
// app.get('/admission1', (req, res)=>{
//     res.status(200).send({
//         status :"Admission are Closed now"
//     })
// })


//
app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})