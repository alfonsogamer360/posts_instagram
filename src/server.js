import express from "express";
import { routerPosts } from "./routes/posts.route.js"

const app = express()
const port = 3000

app.use(express.json())
app.use("/posts", routerPosts)

app.listen(port, () => {
    console.log("API Rodando em http://localhost:3000");
})