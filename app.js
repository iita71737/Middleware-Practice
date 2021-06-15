// app.js
const express = require("express");
const app = express();
const port = 3000;

app.use(function (req, res, next) {
  console.log(`${new Date()} | ${req.method}  from  ${req.url}`);
  next();
});

const logText = (req, res ,next) => {
    console.log(`logfunc : ${new Date()} | ${req.method}  from  ${req.url}`);
    next();
}

app.get("/", (req, res) => {
     res.send('列出全部 Todo')
});

app.get("/new", logText, (req, res) => {
  res.send("新增 Todo 頁面");
});

app.get("/:id", logText,(req, res) => {
  res.send("顯示一筆 Todo");
});

app.post("/", logText, (req, res) => {
  res.send("新增一筆  Todo");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
