const express = require("express");
const router = express.Router();


router.get("/posts",async (req,res) =>{
    let altura = req.params.altura;
    res.status(200).json(posts);
})

router.post('/posts',async (req,res)=>{
    let {name,category} = req.body;
    
    res.status(200).json({newId})
})

router.put('/posts',async (req,res)=>{
    let {id,name} = req.body;
    res.status(200).end('OK')
})

router.delete('/posts/:id',async (req,res)=>{
    let {id} = req.params;
    res.status(200).end('OK')
})

module.exports = router;