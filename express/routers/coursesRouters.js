// post router

const express = require('express')
const router = express.Router()
const courses = require("../models/coursesModel.js")

router.get("/", async (req, res) => {
    const allCourses = await courses.find();
    res.send(allCourses);
    res.status(200)
})  

router.get("/:id", async (req, res) => {
    const course = await courses.findById(req.params.id);
    res.send(course)
    res.status(200)
})
    
router.post("/", async (req, res) => {
    const course = req.body
    await courses.create(course);
    res.send(`Course "${JSON.stringify(course)}" added successfully`)
    res.status(201)
})

router.delete("/:id",async (req, res) => {
    const course = await courses.findByIdAndDelete(req.params.id);
    res.send(course)
    res.status(999)
})

router.put("/:id",async (req, res) => {
    const course = await courses.findByIdAndUpdate(req.params.id, {$set : req.body})
    res.send(course)
    res.status(998)
})

module.exports = router