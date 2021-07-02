"use strict";

const express=require('express');
const app=express();
const errFound =require('./error-handler/404');
const errHandler=require('./error-handler/500');
app.get('/',(req,res)=>{
  res.send('hello deves');
})

app.get('/bad',(req,res)=>{
  throw new Error('heloooooooooooooooo');
})


app.use('*',errFound);
app.use(errHandler);


function start(port) {
  app.listen(port,()=>{
    console.log(`listening in port ${port}`)
  })
};
module.exports={
  app,start
}



