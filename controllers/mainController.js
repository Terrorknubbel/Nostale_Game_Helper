var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nosbasar"
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

    app.post('/updatedb', function (req, res) {
        
        console.log(req.body);
        var sql = "UPDATE items SET Basarwert = '"+ req.body.Basarwert +"' WHERE id = '"+ req.body.id +"'";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record updated");
            res.send("Updated");
         });

    });

    app.post('/create', function (req, res){
        console.log(req.body);
        con.query("INSERT INTO items (Name, Taler, Basarwert) VALUES (?, ?, ?)",[req.body.Name, req.body.Taler, req.body.Basarwert], function (err, result) { 
            console.log(err);
            console.log(result);   
            res.send("Inserted");

         });
    });

}