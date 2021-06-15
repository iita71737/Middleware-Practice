// app.js
const express = require("express");
const app = express();
const port = 3000;

app.use(function (req, res, next) {
  console.log(`Request Time : ${new Date()} | ${req.method}  from  ${req.url}`);
  console.log('Request Time :', new Date())
  next();
});

const logText = (req, res ,next) => {
    console.log(`logfunc : ${new Date()} | ${req.method}  from  ${req.url}`);
    next();
}

app.get("/", (req, res) => {
     res.status(400).send(new Date());
     console.log(`Response Time : ${new Date()} `,new Date() );
     console.log('Response Time:', new Date() );
});

app.get("/new",  (req, res) => {
  res.send("新增 Todo 頁面");
});

app.get("/:id", (req, res) => {
  res.send("顯示一筆 Todo");
});

app.post("/",  (req, res) => {
  res.send("新增一筆  Todo");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
