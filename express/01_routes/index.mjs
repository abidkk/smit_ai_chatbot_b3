import express from 'express';
const app = express();
const PORT = 8003;

// Base URL
app.get('/', (req, res)=>{
    res.status(200).send({name:"I am Abid Khokhar"});
});

//:endpoint ( /city )
app.get('/city', (req, res)=>{
    res.status(200).send([
        {name:"I am Abid Khokhar", city: "I am from Karachi Pakistan"}
    ]);
});


// 404 route 
app.use("*", (req, res) => {
    res.status(200).send([
        {404:"Page Not Found"}
    ]);
});

app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`);
});



