let express=require('express')
let app=express()

app.get('/',(req,res)=>{
    res.send('hello this is the landing page')
})

app.get('/hii',(req,res)=>{
    res.send('hello this is the hii page')
})

app.get('/ready',(req,res)=>{
    res.send('hello this is the ready page')
})

app.listen(3000,()=>{console.log('server is runnning');
})