const express = require("express");
const {route}=require("./Router/RouterBlog");
const app=express();
const cors=require("cors");
app.use(cors({
    origin:"*"
}))
app.use(route)
app.listen(5000)