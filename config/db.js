const  mysql      = require('mysql'); 

const db = mysql.createConnection({
  host     :'localhost',
  user     : 'root',
  password : 'root',
  database : 'oem_op'
})
db.connect((err,result)=>{
    if(err)
     {
            console.log("mysql db not has been conneced",err);
        }
        else{
              console.log("mysql db conneced");
        } 
    
    })
    
module.exports=db
