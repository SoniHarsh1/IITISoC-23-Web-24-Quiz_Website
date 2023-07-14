
const mongoose=require('mongoose');
const quesschema=new mongoose.Schema({
    Topic:String,
    question:String,
    opt1:String,
    opt2:String,
    opt3:String,
    opt4:String,
    answer:String
  });
  const question=mongoose.model("question",quesschema);
  question.insertMany([
  {
    Topic:"HTML",
    question:"What does the abbreviation HTML stand for?",
    opt1:"A. HyperText Markup Language",
    opt2:"B. HighText Markup Language",
    opt3:"C. HyperText Markdown Language",
    opt4:"D. None",
    answer:"A. HyperText Markup Language"
  },
  {
    Topic:"CSS",
    question:"How many sizes of headers are available in HTML by default?",
    opt1:"A. 5",
    opt2:"B. 1",
    opt3:"C. 3",
    opt4:"D. 6",
    answer:"D. 6"
  },
  {
    Topic: "CSS",
    question: "The full form of CSS is ?",
    opt1: "A. Cascading Style Sheets",
    opt2: "B. Coloured Special Sheets",
    opt3: "C. Colour and style sheets",
    opt4: "D. None Of the Above",
    answer: "A. Cascading style sheets"
  
  },
  {
     Topic: "CSS",
     question: "In how many ways can CSS be written in ?",
     opt1: "A. 1",
     opt2: "B. 2",
     opt3: "C. 3",
     opt4: "D. 4",
     answer: "C. 3"
  
  },
  {
      Topic: "CSS",
      quesiton: "Which HTML tag is used to describe internal CSS",
      opt1: "A. <style>",
      opt2: "B. <link>",
      opt3: "C. <script>",
      opt4: "D. None of the Above ",
      answer: "A. <style>"
  },
  {  
     Topic: "CSS",
     question: "Which of the following are valid ways to represent a colour in CSS ?",
     opt1: "A. A valide colour name",
     opt2: "B. RGB values",
     opt3: "C. HEX vaues",
     opt4: "D. All of the above",    
     answer: "D. All of the above"
  
  },
  {
     Topic: "CSS",
     question: "What will be the width of the div element given below?",
    opt1: "A. 310px",
    opt2: "B. 350px",
    opt3:"C. 360px",
    opt4: "D. 335px ",
    answer: "C. 360px"  
  
  },
  {
   Topic: "Node.js",
   question: "_________ is a interactive shell that processes Node",
   opt1: "A. REAL",
   opt2: "B. REPL",
   opt3: "C. RESP",
   opt4: "D. None of the Above",
   answer: "D. None of the Above"
  
  },
  {
  Topic: "Node.js",
   question: "Node.js is written in which language ?",
   opt1: "A. C++",
   opt2: "B. Python",
   opt3: "C. Javascript",
   opt4: "D. Java",
   answer: "C. Javascript"
  
  },
  
  {
     Topic: "Node.js",
   question: "Which of the following are examples of node modules ?",
   opt1: "A. Express",
   opt2: "B. Bodey-Parser",
   opt3: "C. Socket.io",
   opt4: "D. All of the Above",
   answer: "D. All of the Aboce"
  },
  {
     Topic: "Node.js",
   question: "We can kill a process in Node.js using the keyboard shortcut ?",
   opt1: "A. Ctrl + C",
   opt2: "B. Ctrcl + B",
   opt3: "C. Ctrl + K",
   opt4: "D. Shift + C",
   answer: "A. Ctrl + C"
  },
  {
  Topic: "Node.js",
   question: "What is the full form of npm ?",
   opt1: "A. Node Project Manager",
   opt2: "B. Node Package  Module",
   opt3: "C. New Project Manager",
   opt4: "D. Node Package Manager",
   answer: "D. Node Package Manager"
  
  },
  { 
     Topic: "Javascript",
     question: "What will be the output of the following code snippet ?",
   opt1: "A. 3",
   opt2: "B. 5",
   opt3: "C. 0",
   opt4: "D. 1",
   answer: "B. 5"
  
  },
  { 
     Topic: "Javascript",
     question: "What will be the output of the following code snippet ?",
   opt1: "A. 3,4",
   opt2: "B. 3,4,5",
   opt3: "C. 2,3,4",
   opt4: "D. 2,3",
   answer: "A. 3,4"
  
  },
  { 
     Topic: "Javascript",
     question: "Which of the following is not a Javascript framework?",
  
   opt1: "A. Node",
   opt2: "B. React",
   opt3: "C. Cassandra",
   opt4: "D. Vue",
   answer: "C. Cassandra "
  
  },
  { 
     Topic: "Javascript",
     question: " How do we write a comment in javascript ? ",
  
   opt1: "A. //",
   opt2: "B. /* */",
   opt3: "C. #",
   opt4: "D. $$",
   answer: "A. //"
  
  },
  { 
     Topic: "Javascript",
     question: " Which of the following keywords is used to define a variable in Javascript?",
  
   opt1: "A. var",
   opt2: "B. let",
   opt3: "C. None",
   opt4: "D. Both (A) and (B)",
   answer: "D. Both (A) and (B)"
  },
  
  
  {
   Topic: "HTML",
   question: " Which attribute is used to provide a unique name to an HTML element ?",
   opt1: "A. id",
   opt2: "B. class",
   opt3: "C. type",
   opt4: "D. div",
   answer: "A. id"
  
  
  },
  {
   Topic: "HTML",
   question: " What is the correct syntax to write an HTML comment ?",
   opt1: "A. #comment",
   opt2: "B. // comment",
   opt3: "C. /* comment  */ ",
   opt4: "D. <-- comment --> ",
   answer: "D.  <-- comment --> "
  
  
  },
  {
   Topic: "HTML",
   question: "  How is black color represented in terms of RGB values ?",
   
   opt1: "A. RGB (100,100,100)",
   opt2: "B. RGB(0,0,0)",
   opt3: "C. RGB(100,100,0) ",
   opt4: "D. RGB(0,100,100) ",
   answer: "B. RGB(0,0,0)"
  
  
  }
  ])
  module.exports= question; 

  