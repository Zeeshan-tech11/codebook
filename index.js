const express=require('express')
const port=8000;
const app=express()

app.use('/',require('./routes'))

app.listen(port,(e)=>{
    if(e)
    console.log('error hai server main');
    else{
        console.log('server hai chakachak');
    }
})