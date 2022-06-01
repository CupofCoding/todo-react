const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
//Fullstack requires getting data from the client-side. request.body object is the only way to get it from the client-side. 
app.use(express.json()); //gives access to request.body to get JSON data

app.listen(5000, () => {
    console.log("server started, port: 5000")
}); //"node index" to test, use "nodemon index" for live updates instead of restarting terminal each time.