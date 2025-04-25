import express from 'express'

const router = express.Router()


//crud functions of movies


// r - for create
router.get('/',(req,res) => {
    res.send("Get all movie lists ");
});

//c - for reading
router.post('/',(req,res) => {
    res.send("Create a movie ");
});


//u- update

router.put('/:id',(req,res) => {
    res.send("update a movie ");
});


//d - for deleting movie

router.delete('/:id',(req,res) => {
    res.send("delete a movie ");
});

export default router;

