const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { EventEmitter } = require('events');
const dialog = require("dialog-node");
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/accountsdb",{useNewUrlParser: true});
const accschema=new mongoose.Schema({
  Firstname: String,
  Lastname: String,
  Email: String,
  Password: String
})
const account=mongoose.model("account",accschema);
const acc=new account({
  Firstname: "Abhi",
  Lastname: "AP",
  Email: "mems220005001@iiti.ac.in",
  Password: "xyz"
})
acc.save();
