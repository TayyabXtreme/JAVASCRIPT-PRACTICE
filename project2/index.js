import express from 'express'

const PORT=3000
const app=express()

app.get('/',(req,res)=>{
    res.send("<h1>hello server</h1>")
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})