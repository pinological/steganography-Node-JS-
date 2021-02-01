require('dotenv').config();
const multer = require('multer');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const fs = require('fs');
const app = express();
var port = 4000;
app.listen(port,()=>{
    console.log("The app is up : "+port);
});
var storage = multer.diskStorage({
    destination : (req,file,callback)=>{
        var dir = "./upload";
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        callback(null,dir);
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname);
    }
});
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var upload = multer({storage:storage}).single('pic');
app.set('view engine','ejs');
app.set('views','front');
app.get('/', (req, res) => {
    res.render('index', { title: 'Main Page' });
  });
app.post('/index',urlencodedParser,(req,res)=>{
    if(req.body.username == 'admin' && req.body.password == 'admin'){
        res.redirect("/incode");
        res.end();
    }

})


app.get('/incode',(req,res)=>{
    res.render('incode',{title:'Incode Page'})
});

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL , 
        pass: process.env.PASSWORD
    }
});
app.post('/incode',urlencodedParser,(req,res,next)=>{
    
    upload(req,res,(err)=>{
        if(err){
            console.log("Error");
        }
        else{
            console.log("Upload");
        }
    });
    console.log(req.body);
    let mailOptions = {
        from: 'peterkarki99@gmail.com', 
        to: req.body.email,
        subject: 'Steganography Test',
        text: 'Key :'+req.body.key,
        attachments: [
            {
                filename: 'download.png',
                path: 'upload/download.png'
                
            }
        ]
        
    };
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return console.log("Error");
        }
        return console.log('Email sent!!!');
    });
});
app.get('/decode',(req,res)=>{
    res.render('decode',{title:'decode Page'})
});