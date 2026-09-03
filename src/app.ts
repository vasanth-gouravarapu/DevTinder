import express, { response } from 'express'

const app = express()
const port = 4200

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

app.get("/home", (req, res) => {
    res.send("Hi this is my new project")
})

app.use("/test", (req, res, next) => {
    console.log("Testing the route handler function")
    next()
},
    /*The block of code called as route handlers */
    (req, res) => {
        res.send("Testing the next() function")
    }
)


