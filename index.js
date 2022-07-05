const express=require('express');
const app=new express();
const PORT = process.env.PORT || 4400;
const nodemailer= require("nodemailer");

const path = require('path');

app.use(express.static('./dist/frontend'));


let transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"sukanyaharidas97@gmail.com",
        pass:"nljbbrmyjiibkgcj"
    }
})


app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.use(express.static(__dirname + '/dist/'));
// app.use('/src/assets', express.static(__dirname + '/src/assets/'));





// app.get("/",(req,res)=>{
//     res.send("hello world");
// })

app.get("/api/send", (req,res)=>{
    let mailOptions={
        from:"sukanyaharidas97@gmail.com",
        to:"sukanyasukks97@gmail.com",
        subject:"Mail from nodeApp",
        text:"Happy new year my friend"
    }
    
    transporter.sendMail(mailOptions,function(err,success){
        if(err){
            console.log(err);
        }
        else{
            console.log("Mail sent");
        }
    })
}
)


app.get("/*", (req, res)=> {
    res.sendFile(path.join(__dirname + '/dist//frontend/index.html'))})

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});