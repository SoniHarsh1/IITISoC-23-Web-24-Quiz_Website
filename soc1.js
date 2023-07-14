const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { EventEmitter } = require('events');
const dialog = require("dialog-node");
const mongoose=require('mongoose');
const session=require('express-session');
const passport=require("passport");
const passportlocalmongoose=require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findorcreate= require("mongoose-findorcreate");
const app = express();
const myEmitter = new EventEmitter();
//mongoose.connect("mongodb://127.0.0.1:27017/questionsdb",{useNewUrlParser: true});
//mongoose.connect("mongodb://127.0.0.1:27017/accountsdb",{useNewUrlParser: true});
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(session({
  secret: "quiz app",
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());
//mongoose.connect("mongodb://127.0.0.1:27017/questionsdb",{useNewUrlParser: true});
mongoose.connect("mongodb://127.0.0.1:27017/accountsdb",{useNewUrlParser: true});
// const quesschema=new mongoose.Schema({
//   Topic:String,
//   question:String,
//   opt1:String,
//   opt1:String,
//   opt2:String,
//   opt3:String,
//   opt4:String,
//   answer:String
// });
// accschema.plugin(passportlocalmongoose);
// accschema.plugin(findorcreate);
const accschema=new mongoose.Schema({
  Firstname: String,
  Lastname: String,
  Email: String,
  Password: String,
  googleId: String
});
accschema.plugin(passportlocalmongoose);
accschema.plugin(findorcreate);
const acc= new mongoose.model("account",accschema);
passport.use(acc.createStrategy());
// passport.serializeUser(ques.serializeUser());
// passport.deserializeUser(ques.deserializeUser());
passport.serializeUser(function(user, done) {
  done(null,user.id);
});

passport.deserializeUser(function(id, done) {
  acc.findById(id).then(function(err,user){
    done(err,user);
  });
});
passport.use(new GoogleStrategy({
    clientID: "484007716445-ctdvasjstfne9e4kpmaphfbomfro4ng0.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:3000/auth/google/iitisoc",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    //console.log(profile);
    acc.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
// const acc=new account({
//   Firstname: "Abhi",
//   Lastname: "AP",
//   Email: "mems220005001@iiti.ac.in",
//   Password: "xyz"
// })
// acc.save();
//module.exports=mongoose.model("question",quesschema);
// const ques= new question({
//   Topic:"stack",
//   question:"what is stack?",
//   opt1:"A. abc",
//   opt2:"B. qddxf",
//   opt3:"C. abc",
//   opt4:"D. asfc",
//   answer:"C .abc"
// })
// const ques2=new question({
//   Topic:"queue",
//   question:"what is queue?",
//   opt1:"A. abc",
//   opt2:"B. qddxf",
//   opt3:"C. abc",
//   opt4:"D. asfc",
//   answer:"C .abc"
// })
// const ques3=new question({
//   Topic:"linkedlist",
//   question:"what is linkedlist?",
//   opt1:"A. abc",
//   opt2:"B. qddxf",
//   opt3:"C. abc",
//   opt4:"D. asfc",
//   answer:"C .abc"
// })
// const ques4=new question({
//   Topic:"enqueue",
//   question:"what is enquque?",
//   opt1:"A. abc",
//   opt2:"B. qddxf",
//   opt3:"C. abc",
//   opt4:"D. asfc",
//   answer:"C .abc"
// })
// const ques5=new question({
//   Topic:"dequeue",
//   question:"what is dequque?",
//   opt1:"A. abc",
//   opt2:"B. qddxf",
//   opt3:"C. abc",
//   opt4:"D. asfc",
//   answer:"C .abc"
// })




// app.get("/",function(req,res){
//   res.render("home")
// });
app.get("/auth/google",
  passport.authenticate("google",{ scope: ["profile"] })
);

// app.get('/auth/google/iitisoc',
//   passport.authenticate("google", { failureRedirect: '/loginpage' }),
//   // function(req, res) {
//   //   // Successful authentication, redirect home.
//   //   res.redirect("/")
//   // }
// );
app.get('/auth/google/iitisoc',function(req,res){
  res.render("home")
});
app.get("/iitisoc",function(req,res){
  if(req.isAuthenticated()){
    res.render("profile");
  }else{
    res.redirect("/loginpage");
  }
});
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
app.get("/signuppage",function(req,res){
  res.render("signup")
});
// app.post("/profile",function(req,res){
//   res.render("profile")
// });
app.post("/qna",function(req,res){
  // question.find().then(function(questions){
  //   if(questions){
  //     console.log(questions[0].Topic);
    res.render("qna")
      // res.render("qna",{topic:questions[0].Topic,
      //                   ques:questions[0].question,
      //                   opt1:questions[0].opt1,
      //                   opt2:questions[0].opt2,
      //                   opt3:questions[0].opt3,
      //                   opt4:questions[0].opt4,
      //                   //timer: timer()
      //                   })
      // res.render("qna",{topic:questions.question[0].Topic,
      //                   ques:questions.question[0].question,
      //                   opt1:questions.question[0].opt1,
      //                   opt2:questions.question[0].opt2,
      //                   opt3:questions.question[0].opt3,
      //                   opt4:questions.question[0].opt4,
      //                   //timer: timer()
      //                   })
    //}
  //})
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
