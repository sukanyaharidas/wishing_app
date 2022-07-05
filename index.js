const express=require('express');
const app=new express();
const PORT = process.env.PORT || 4400;
const nodemailer= require("nodemailer");
const cors= require('cors');
const path = require('path');

app.use(express.static('./dist/frontend'));



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

// app.use(express.static(__dirname + '/dist/'));
// app.use('/src/assets', express.static(__dirname + '/src/assets/'));





// app.get("/",(req,res)=>{
//     res.send("hello world");
// })

// app.post("/api/sendmail", (req,res)=>{

//     let transporter=nodemailer.createTransport({
//         service:"gmail",
//         auth:{
//             user:"testtmailforapp@gmail.com",
//             pass:"vrvxhgqxqrtfxtfd"
//         }
//     })
    
//     let mailOptions={
//         from:"sukanyaharidas97@gmail.com",
//         to:"sukanyasukks97@gmail.com",
//         subject:"Mail from nodeApp",
//         text:"Happy new year my friend"
//     }
    
//     transporter.sendMail(mailOptions,function(err,success){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("Mail sent");
//         }
//     })
    
// }
// )

// app.post("/api/send", (req, res) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
//     console.log("request came");
//     let user = req.body;
//     sendMail(user, (err, info) => {
//       if (err) {
//         console.log(err);
//         res.status(400);
//         res.send({ error: "Failed to send email" });
//       } else {
//         console.log("Email has been sent");
//         res.send(info);
//       }
//     });
//   });



// const sendMail = (user, callback) => {
//   const transporter = nodemailer.createTransport({
//     service:"gmail",
//     auth: {
//         user:"testtmailforapp@gmail.com",
//     pass:"vrvxhgqxqrtfxtfd"
//     }
//   });

//   const mailOptions = {
//     from:"testtmailforapp@gmail.com",
//         to:"sukanyasukks97@gmail.com",
//    subject:"Mail from nodeApp",
//  text:"Happy new year my friend"
//   };
  
//   transporter.sendMail(mailOptions, callback);

// }


app.post("/api/send", (req, res) => {
    console.log(req.body);
  var email=req.body.email;
    var transporter = nodemailer.createTransport({
        service:"gmail",
              auth:{
                     user:"testtmailforapp@gmail.com",
                    pass:"vrvxhgqxqrtfxtfd"
               }
    });
    
    var mailOptions = {
        from:"testtmailforapp@gmail.com",
                 to:req.body.user.email,
            subject:"Happy New Year 2022",
          text:"Happy new year my friend!!Here's wishing that the new year will bring joy, love, peace, and happiness to you",
       html: `<p>Happy new year my friend!!Here's wishing that the new year will bring joy, love, peace, and happiness to you</p>
       <p>Click <a href="https://wishing-app.herokuapp.com/send' + recovery_token + '">here</a> </p>`
    
    };
    
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) console.log(error);
        else{console.log("Message sent successfully: " + info.response);
    alert("Message sent successfully:")}
    });
    });

  



app.get("/*", (req, res)=> {
    res.sendFile(path.join(__dirname + '/dist//frontend/index.html'))})

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
