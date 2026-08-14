import express from 'express'

const app = express()
const port = 445

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

app.get("/home", (req, res) => {
    res.send("Hi this is my new project")
})