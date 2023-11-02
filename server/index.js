
import  express  from "express";
import mssql from "mssql"
import { sqlConfig } from "./Config/config.js";
const app = express();
const port = 3000;




app.get('/', function(req,res){
  let connection= mssql.connect(sqlConfig,(err)=>{
    if(err){
      console.log(err)
    }else{
      res.send("Db connected")
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
