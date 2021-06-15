// app.js
const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`Request Time : ${new Date()} | ${req.method}  from  ${req.url}`);
  console.log('Request Time :', new Date())
  console.log('-------------------------------')
  next();
});

// const logText = (req, res ,next) => {
//     let start = new Date();
//      res.status(400).send(new Date());
//      let end = new Date();
//      let elapsed = end.getTime() - start.getTime() ;
//      console.log(`Response Time : ${new Date()} `,new Date() );
//      console.log('Response Time:', new Date() );
//      console.log(`${new Date()} | ${req.method}  from  ${req.url} | total time: ${elapsed}`)
//     next();
// }

app.get("/", (req, res) => {
     let start = new Date();
     res.status(400).send(new Date());
     let end = new Date();
     let elapsed = end.getTime() - start.getTime() ;
     console.log(`Response Time : ${new Date()} `,new Date() );
     console.log('Response Time:', new Date() );
     console.log(`${new Date()} | ${req.method}  from  ${req.url} | total time: ${elapsed}`)
     console.log('-------------------------------')
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
