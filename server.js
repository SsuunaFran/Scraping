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
            sql="SELECT Location, COUNT(*) AS LocationCount FROM scrapper GROUP BY Location;"
        conn.query(sql,(err,results)=>{
            if(err){
                console.log("Encountered an error")
            }else{
                res.status(200).json(results)
                // for (let i=0;i<results.length; i++){
                //     console.log(results[i]);
                    
                // }
            }
        })
        }
    })
})
app.get('/bar',(req,res)=>{
    conn.connect((err)=>{
        if(err){
            console.log(`Got an error`);
        }else{
            console.log(`Connected Successfully`);
            sql="SELECT Company, COUNT(*) AS CompanyCount FROM scrapper GROUP BY Company"
            conn.query(sql,(err,results)=>{
                if(err){
                    console.log(`Encountered an error`);
                }else{
                    res.status(200).json(results)
                }
            })
        }
    })
})

const PORT=process.env.port||8080;
app.listen(PORT,(req,res)=>{
    console.log(`App listening on port ${PORT}`);
})
