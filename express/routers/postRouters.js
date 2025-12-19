// post router

const express = require('express')
const router = express.Router()
const posts = require("../models/postModel.js")

router.get("/", async (req, res) => {
    const allPosts = await posts.find();
    res.send(allPosts);
    res.status(200)
})  

router.get("/:id", async (req, res) => {
    const post = await posts.findById(req.params.id);
    res.send(post)
    res.status(200)
})

router.post("/", async (req, res) => {
    const post = {
        'title': req.body['title'],
        'content': req.body['content']
    }
    await posts.create(post);
    res.send(`Post "${JSON.stringify(post)}" added successfully`)
    res.status(201)
})

module.exports = router