const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

//define path for express config
const publicDirectory = path.join(__dirname, '../public');
const viewPaths = path.join(__dirname,'./templates/views');

//setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPaths)
app.use(express.static(publicDirectory));

app.get('',(req,res)=>{
       res.render('index',{
           title : "application for weather",
           Name : "santosh"
       });
})

app.get('/help',(req,res)=>{
      res.render('help',{
          title : 'Help',
          Name : "kavita"
      })
});

app.get('/about',(req,res)=>{
     res.render('about',{
           title : "About this website",
           Name : "santosh "
     })
});

app.get('/weather',(req,res)=>{
      res.send({
          location : "bhopal",
          forecast : 25
      })
});


app.listen(3000,()=>{
  console.log("server is running")
})