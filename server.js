const express=require("express");
const mysql=require("mysql2");
const app=express();
const cors=require("cors");
const conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Ancis@2001",
    database:"Scraping"
})

app.use(cors());
app.get('/get_data',(req,res)=>{
    conn.connect((err)=>{
        if(err){
            console.log(`Got an error`);
        }else{
            console.log(`Connected Successfully`);
            sql="select *from scrapper"
        conn.query(sql,(err,results)=>{
            if(err){
                console.log("Encountered an error")
            }else{
                res.status(200).json(results)
                // for (i=0;i<results.length; i++){
                //     console.log(results[i]);
                    
                // }
            }
        })
        }
    })
})

const PORT=process.env.port||8080;
app.listen(PORT,(req,res)=>{
    console.log(`App listening on port ${PORT}`);
})
