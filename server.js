const express = require("express")
const app = express()
app.use(express.json())
const mysql = require("mysql2/promise");

const insertintodb = async (update) =>{
    const connection = await mysql.createConnection(
        {host:"sql4.freesqldatabase.com",
        user :"sql4450785" ,
        password :"s84ZHMjCCd" , 
        database : "sql4450785",
        port : 3306, }
    )
    try {
        await connection.query(
            `UPDATE coords SET coords = '${update}' WHERE id=0`
        )
    } catch(e){
        console.log(e)
    }
    connection.end()
}





app.get("/",(req,resp)=>{
    const mysql2 = require('mysql2');
    const connection =  mysql2.createConnection(
            {host:"sql4.freesqldatabase.com",
            user :"sql4450785" ,
            password :"s84ZHMjCCd" , 
            database : "sql4450785",
            port : 3306, }
        )
    connection.query("SELECT * FROM coords",(err,results,fields)=>{ 
              resp.send(results[0].coords)
        })
})

app.post("/update",(req,resp)=>{
    const update = req.body.coords
    insertintodb(update)
    resp.json("success")
})







app.listen(3000,()=>{
    console.log("listening on port 3000")
})
