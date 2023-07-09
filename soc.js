const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { EventEmitter } = require('events');
const dialog = require("dialog-node");
const mongoose=require('mongoose');
const app = express();
const myEmitter = new EventEmitter();
mongoose.connect("mongodb://127.0.0.1:27017/questionsdb",{useNewUrlParser: true});
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const quesschema=new mongoose.Schema({
  Topic:String,
  question:String,
  opt1:String,
  opt1:String,
  opt2:String,
  opt3:String,
  opt4:String,
  answer:String
});
const question=mongoose.model("question",quesschema);
const ques= new question({
  Topic:"stack",
  question:"what is stack?",
  opt1:"A. abc",
  opt2:"B. qddxf",
  opt3:"C. abc",
  opt4:"D. asfc",
  answer:"C .abc"
})
const ques2=new question({
  Topic:"queue",
  question:"what is queue?",
  opt1:"A. abc",
  opt2:"B. qddxf",
  opt3:"C. abc",
  opt4:"D. asfc",
  answer:"C .abc"
})
const ques3=new question({
  Topic:"linkedlist",
  question:"what is linkedlist?",
  opt1:"A. abc",
  opt2:"B. qddxf",
  opt3:"C. abc",
  opt4:"D. asfc",
  answer:"C .abc"
})
const ques4=new question({
  Topic:"enqueue",
  question:"what is enquque?",
  opt1:"A. abc",
  opt2:"B. qddxf",
  opt3:"C. abc",
  opt4:"D. asfc",
  answer:"C .abc"
})
const ques5=new question({
  Topic:"dequeue",
  question:"what is dequque?",
  opt1:"A. abc",
  opt2:"B. qddxf",
  opt3:"C. abc",
  opt4:"D. asfc",
  answer:"C .abc"
})




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
  question.find().then(function(questions){
    if(questions){
      console.log(questions[0].Topic);
      res.render("qna",{topic:questions[0].Topic,
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


app.listen(3000,function(){
  console.log("server is running");
})
