var express = require("express");
var appex = express();

//port
appex.listen(1234);

//get
appex.get("/home/:idorwhatever", function(req, res){
  res.send("req.params.idorwhatever");
  res.sendfile(__dirname + '/file.html');
  res.render('nameOf_ejs_in_"views"_file_(create)', {});
})
