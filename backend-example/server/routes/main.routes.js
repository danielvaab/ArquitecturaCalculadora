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

// Calcular triangulo
router.post('/calcularTrianguloA',async (req,res)=>{
    let {b,h} = req.body;
    res.status(200).json({respuesta: b*h/2})
})
router.post('/calcularTrianguloP',async (req,res)=>{
    let {a,b,c} = req.body;
    res.status(200).json({respuesta: a+b+c})
})
// Calcular rectangulo
router.post('/calcularRectanguloA',async (req,res)=>{
    let {a,b} = req.body;
    res.status(200).json({respuesta: a*b})
})
router.post('/calcularRectanguloP',async (req,res)=>{
    let {a,b} = req.body;
    res.status(200).json({respuesta: 2*a+2*b})
})
// Calcular circulo
router.post('/calcularCirculoA',async (req,res)=>{
    let {r} = req.body;
    console.log(r);
    res.status(200).json({respuesta: Math.PI * r * r})
})
router.post('/calcularCirculoP',async (req,res)=>{
    let {r} = req.body;
    console.log(r);
    res.status(200).json({respuesta: 2 * Math.PI * r})
})

module.exports = router;