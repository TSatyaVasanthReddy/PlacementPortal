var express = require('express');
var app = express();
var postlogin=express();
app.use('/homepage',postlogin);
app.get(['/','/login'], function (req, res) {
   res.send('Hello World');
})
postlogin.get(['/myprofile'], function (req, res) {
   res.send('This is a users profile');
})

postlogin.get(['/'], function (req, res) {
   res.send('This page is used to display the companies');
})

app.listen(8081, function () {
  console.log("Example app listening at :8081");

})