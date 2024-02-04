const express = require("express");
const router = express.Router({mergeParams:true});
const db = require('../models');

router.get('/ping', async(req, res, next) =>{
    try{
        res.status(200).json({data: "you gave me ping. i gave you pong."})
    } catch(err){
        res.status(500).json(err)
    }
})

router.get('/all', async (req, res, next) => {
    try{
        const users = await db.User.findAll()
        res.status(200).json(users);
    } catch(err){
        res.status(500).json(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const user = await db.User.create({
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender
        })
        res.status(200).json({user: {id: user.id}})
    } catch(err){
        res.status(500).json(err)
    }
})

router.patch('/:id', async (req, res, next)=>{
    try{
        const user = await db.User.findOne({
            where: {id : req.params.id}
        })
        if (!user){throw new Error("User not found")}
        await user.update({
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender
        })
    res.status(200).json({user: {id: user.id}})
    } catch(err){
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res, next)=>{
    try{
        const user = await db.User.findOne({
            where: {id : req.params.id}
        })
        if (!user){throw new Error("User not found")}
        await user.destroy({
            truncate: true
        })
    res.status(200).json({user: {id: user.id}})
    } catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;