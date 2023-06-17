const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { EventEmitter } = require('events');
const dialog = require("dialog-node");
const app = express();
const myEmitter = new EventEmitter();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


var questions=[
    {
        Topic:"hello",
        numb:1,
        question:"how are you?",
        answer:"C.abc",
        options:[
            "A. abc",
            "B. qddxf",
            "C. abc",
            "D. asfc",
        ]
    },
    {
        numb:1,
        question:"how are you?",
        answer:"",
        options:[

        ]
    },
    {
        numb:1,
        question:"how are you?",
        answer:"",
        options:[

        ]
    },
    {
        numb:1,
        question:"how are you?",
        answer:"",
        options:[

        ]
    }
]
var num=questions.length;
// const durationInSeconds = 1000; // Duration in seconds
// let secondsRemaining = durationInSeconds;

// var startTime; // Variable to store the start time
//     var stopwatchInterval; // Variable to store the interval
//
//     function startStopwatch() {
//       startTime = new Date().getTime(); // Record the start time
//       stopwatchInterval = setInterval(updateStopwatch, 10); // Update the stopwatch every 10 milliseconds
//     }
//
//     function updateStopwatch() {
//       var currentTime = new Date().getTime(); // Get the current time
//       var elapsedTime = currentTime - startTime; // Calculate the elapsed time in milliseconds
//
//       // Convert the elapsed time to hours, minutes, seconds, and milliseconds
//       var hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//       var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
//       var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
//       var milliseconds = Math.floor((elapsedTime % 1000) / 10);
//
//       // Format the time values to always display two digits (e.g., 01, 02, 10)
//       hours = ("0" + hours).slice(-2);
//       minutes = ("0" + minutes).slice(-2);
//       seconds = ("0" + seconds).slice(-2);
//       milliseconds = ("0" + milliseconds).slice(-2);
//
//       // Update the stopwatch display
//       document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
//     }
//
//     function stopStopwatch() {
//       clearInterval(stopwatchInterval); // Clear the interval to stop the stopwatch
//     }
//
//     function resetStopwatch() {
//       clearInterval(stopwatchInterval); // Clear the interval
//       document.getElementById("timer").innerHTML = "00:00:00:00"; // Reset the display
//     }


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

// app.post("/list",function(req,res){
//   // const clickedIndex = req.body.index;
//   // console.log('Clicked item index:', clickedIndex);
//   // // Process the clicked index as desired
//   // // ...
//   // res.sendStatus(200); // Send a response to the client
//     const startbtn=req.body.block;
//     const popup=req.body.popupinfo;
//     const exitbtn=req.body.exitbtn;
//     const body=req.body;
//     myEmitter.emit('onclick');
//     myEmitter.on("onclick", ()=>{
//
//       //popup.
//       //   body.classList.add("active");
//       //res.render("qna");
//     })
//     // exitbtn.addEventListener("click",()=>{
//     //     popup.classList.remove('.active');
//     //     body.classList.remove('.active');
//     // })
//     var startTime; // Variable to store the start time
//     var stopwatchInterval; // Variable to store the interval
//
//     function startStopwatch() {
//       startTime = new Date().getTime(); // Record the start time
//       stopwatchInterval = setInterval(updateStopwatch, 10); // Update the stopwatch every 10 milliseconds
//     }
//
//     function updateStopwatch() {
//       var currentTime = new Date().getTime(); // Get the current time
//       var elapsedTime = currentTime - startTime; // Calculate the elapsed time in milliseconds
//
//       // Convert the elapsed time to hours, minutes, seconds, and milliseconds
//       var hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//       var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
//       var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
//       var milliseconds = Math.floor((elapsedTime % 1000) / 10);
//
//       // Format the time values to always display two digits (e.g., 01, 02, 10)
//       hours = ("0" + hours).slice(-2);
//       minutes = ("0" + minutes).slice(-2);
//       seconds = ("0" + seconds).slice(-2);
//       milliseconds = ("0" + milliseconds).slice(-2);
//
//       // Update the stopwatch display
//       req.body.timer=hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
//     }
//
//     function stopStopwatch() {
//       clearInterval(stopwatchInterval); // Clear the interval to stop the stopwatch
//     }
//
//     function resetStopwatch() {
//       clearInterval(stopwatchInterval); // Clear the interval
//       req.body.timer = "00:00:00:00"; // Reset the display
//     }
//
//     function timer(){
//       startStopwatch();
//       updateStopwatch();
//       stopStopwatch();
//       resetStopwatch();
//     }
//     res.render("qna",{ques:questions[0].question,
//                      topic:questions[0].Topic,
//                      opt1:questions[0].options[0],
//                      opt2:questions[0].options[1],
//                      opt3:questions[0].options[2],
//                      opt4:questions[0].options[3],
//                      //timer: timer()
//                      });
//     function showques(i){
//       res.render("qna",{ques:questions[i].question,
//                        topic:questions[i].Topic,
//                        opt1:questions[i].options[0],
//                        opt2:questions[i].options[1],
//                        opt3:questions[i].options[2],
//                        opt4:questions[i].options[3],
//                        //timer: timer()
//                        });
//     }
//     const nextbtn=req.body.b;
//     for(var i=1;i<num;i++){
//         nextbtn.on("onclick", ()=>{
//         showques(i);
//       });
//     }
//     // timer=req.body.timer;
//     // timer
//     });
// var quescount=0;
// app.post("/qna",function(req,res){
//     const questext=req.body.mcq;
//     questext.
// })
app.post("/qna",function(req,res){
  res.render("qna",{ques:questions[0].question,
                    topic:questions[0].Topic,
                    opt1:questions[0].options[0],
                    opt2:questions[0].options[1],
                    opt3:questions[0].options[2],
                    opt4:questions[0].options[3],
                    //timer: timer()
                    });
});

app.post("/last",function(req,res){
  res.redirect("/")
});


app.listen(3000,function(){
  console.log("server is running");
})
