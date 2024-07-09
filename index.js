const express = require("express");
const userRoute = require ('./routes/userRoute')
const morgan = require ('morgan')


const app = express();

app.use(morgan())
app.use('/api',userRoute)

// app.get("/api", getAllUser);
// app.post("/api", addNewUser);
// app.get("/api/:id", getOneUser);


app.listen(8000, "127.0.0.1", () => {
  console.log("app is work ...");
});
