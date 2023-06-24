const express = require("express");

const app = express();
const port = 4333;

app.get("/", (req, res)=>{
    res.send("<h1>Home Page</h1>");
})

app.get("/about", (req, res)=>{
    res.send("<h1>About Page</h1>");
})

app.get("/contact", (req, res)=>{
    res.send("<h1>Contact Page</h1>");
})

app.get("/service", (req, res)=>{
    res.send("<h1>Service Page</h1>");
})

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
})
