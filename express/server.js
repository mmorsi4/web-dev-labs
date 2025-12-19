// setup

const express = require("express")
const mongoose = require("mongoose")
const postRouter = require("./routers/postRouters.js")
const coursesRouter=require("./routers/coursesRouters.js")
const app = express()
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})

// db connection

const uri = "mongodb://localhost:27017/testmongodb"
const databaseConnect = async () => {
    try {
        await mongoose.connect(uri)
        console.log("Successful connection")
    }
    catch(error) {
        console.log(error);
    }
}
databaseConnect();

// middleware

app.use(express.json());
app.use('/posts', postRouter)
app.use('/courses',coursesRouter)
// endpoitns

app.get("/", (req, res) => {
    res.send("ROOT")
    res.status(200)
})
