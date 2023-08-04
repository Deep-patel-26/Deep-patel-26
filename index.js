const express = require("express");
const app = express();
var mongoose = require("mongoose");

const cors = require("cors");
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1:27017/clg",{useNewUrlParser: true, useUnifiedTopology: true },

function checkDB(error)
{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log("DB connnecteddddd ")
    }


});

app.listen(8086,function port(error)
{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log("port connnecteddddd ")
    }


});
server.use(cors());
app.use(express.json());






