var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Nosbasar"
});


module.exports = function(app){
    app.get('/', function(req, res){
        con.connect(function(err) {
            var sql = "SELECT * FROM `items`";
            con.query(sql, function (err, result) {
                res.render('index', {items: result});   
            });
        });
    });

}