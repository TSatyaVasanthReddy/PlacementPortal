var express = require('express');
var app = express();
var postlogin=express();


function isAuthenticated(req, res, next) {
	console.log(req.params[0]);
    if (false)
        return next();

    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    res.redirect('/');
}
app.use('/.+',isAuthenticated);
app.use('/homepage',isAuthenticated, postlogin);
app.get(['/','/login'], function (req, res) {
   res.send('This main login provides 2 types, 1 student and one admin login');
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