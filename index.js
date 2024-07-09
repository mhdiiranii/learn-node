const express = require("express");
const userRoute = require ('./routes/userRoute')
const morgan = require ('morgan')


const app = express();

app.use(morgan('dev'))
app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})
app.use('/api',userRoute)

// app.get("/api", getAllUser);
// app.post("/api", addNewUser);
// app.get("/api/:id", getOneUser);


app.listen(8000, "127.0.0.1", () => {
  console.log("app is work ...");
});
