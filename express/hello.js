import express from "express";
let app = express()
app.get('/hello',function (req,res) {
    res.send('HELLO world!')
});

app.listen(3000,function () {
    console.log('Example app listening on port 3000!!!')
});
app.post('/hello',function (req,res) {
    res.send('You just called the method post at /hello')
});

