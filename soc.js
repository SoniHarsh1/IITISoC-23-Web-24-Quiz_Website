const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { EventEmitter } = require('events');
const dialog = require("dialog-node");
const mongoose=require('mongoose');
const app = express();
const myEmitter = new EventEmitter();
mongoose.connect("mongodb://127.0.0.1:27017/questionsdb",{useNewUrlParser: true});
const question = require("./question.js");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/problems",async(req,res)=>{
  const{Topic}=req.query;
  if(Topic=='CSS'){
  const allProduct = await question.find({Topic:'CSS'});
res.render("qna",{question: allProduct});

}
if(Topic=='HTML'){
  const allProduct = await question.find({Topic:'HTML'});
res.render("qna",{question: allProduct});

}
if(Topic=='Javascript'){
  const allProduct = await question.find({Topic:'Javascript'});
res.render("qna",{question: allProduct});

}
if(Topic=='Node.js'){
  const allProduct = await question.find({Topic:'Node.js'});
res.render("qna",{question: allProduct});

}
})
/*app.get("/problems", async(req,res)=>{
  const{Topic}=req.query;
  if(Topic=='HTML'){
    const questions=await question.find({Topic:'HTML'});
    res.render("qna",{questions,Topic})
   }});*/
  
app.get("/",function(req,res){
  res.render("home")
});
app.get("/home",function(req,res){
  res.render("home")
});
app.get("/create",function(req,res){
  res.render("create")
});
app.get("/list",function(req,res){
  res.render("list")
});
app.get("/faq",function(req,res){
  res.render("faq")
});
app.get("/About",function(req,res){
  res.render("About")
});
app.get("/loginpage",function(req,res){
  res.render("loginpage")
});
app.post("/profile",function(req,res){
  res.render("profile")
});
app.post("/qna",function(req,res){
  questions.find().then(function(questions){
    if(questions){
      console.log(questions[0].topic);
      res.render("qna",{topic:questions[0].topic,
                        ques:questions[0].question,
                        opt1:questions[0].opt1,
                        opt2:questions[0].opt2,
                        opt3:questions[0].opt3,
                        opt4:questions[0].opt4,
                        //timer: timer()
                        })
      // res.render("qna",{topic:questions.question[0].Topic,
      //                   ques:questions.question[0].question,
      //                   opt1:questions.question[0].opt1,
      //                   opt2:questions.question[0].opt2,
      //                   opt3:questions.question[0].opt3,
      //                   opt4:questions.question[0].opt4,
      //                   //timer: timer()
      //                   })
    }
  })
});
app.post("/create-quiz",function(req,res){
  res.render("create-quiz")
});
app.post("/last",function(req,res){
  res.redirect("/")
});
/*app.post("/create",async(req,res)=>{
  //var search=req.body.search;
  const questions=await question.find({name:new RegExp(search, 'i')});
  res.render('qna.ejs',{questions});
})*/


app.listen(3000,function(){
  console.log("server is running");
})
