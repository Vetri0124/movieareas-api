import express from "express";


const app=express()
const port = 6969;

app.get("/",(req,res) => {
    res.json({msg:"Hello"});
});
//crud functions of movies


// r - for create
app.get('/movies',() => {

})

//c - for reading
app.post('/movies',() => {
    
})


//u- update

app.put('/movies/:id',() => {

})


//d - for deleting movie

app.delete('/movies/:id',() => {

})


app.listen(port,() => {
    console.log(`the server is running at http://localhost:${port}`);
})

