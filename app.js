// app.js
const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
     const start = new Date();
     const httpmethod = req.method
     const httpurl = req.url
     const host = req.headers.host
     
     console.log(`Request Time : ${new Date()} `,new Date() );  
     console.log('-------------------------------')

     res.on('finish', () => {
      let end = new Date();
      let elapsed = end.getTime() - start.getTime() ;
      console.log(`Response Time :${new Date()} | ${httpmethod}  from  ${host}${httpurl} | total time: ${elapsed}ms`)
      console.log('-------------------------------')
     })
     next();
});

app.get("/", (req, res) => {
  res.send('列出全部 Todo')
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
