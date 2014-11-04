var express = require('express');
var http = require('http');
var url = require('url');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization, Content-Type');
  next();
});

app.listen(4004);

DATABASE_HOST = 'localhost';
DATABASE_NAME = 'symhelpdb';
DATABASE_USERNAME = 'root';
DATABASE_PASSWORD = 'alpana17';

var connection = mysql.createConnection({
	                host :DATABASE_HOST,
	                user :DATABASE_USERNAME,
	                password :DATABASE_PASSWORD,
	                database :DATABASE_NAME,
});

app.get('/findDisease',function(request, response){
	var req = request.query;
	var sym1 = req.sym1;
	var sym2 = req.sym2;
	var sym3 = req.sym3;
	var sym4 = req.sym4;
	var sym5 = req.sym5;
    var count_symptm = req.count_symptm;

	var querydisymapping = "select d_id,d_name, dis_info,count(d_id) as matched_sym, total_sym from dis_sym_mapping natural join disease_description where s_id = \'" + sym1 + "\' OR s_id = \'" + sym2 + "\' OR s_id = \'" + sym3 + "\' OR s_id = \'" + sym4 + "\' OR s_id = \'" + sym5 + "\' group by d_id order by count(d_id) desc;";

	connection.query(querydisymapping, function(err, queryResult){
		if (err) {
            // throw err;
            response.json("Error: " + errExistingUser);
        } 
        else
        {
        	//console.log(queryResult.length);
        	if(queryResult.length==0)
        	{
                console.log(queryResult.length);
                var myJSONObject = {"Disease":"No disease found."};
                console.log("moving out of nodeJS");
                response.json(myJSONObject);
        	}
        	else
        	{
        		console.log(queryResult.length);
                var myJSONObject = {"Disease":queryResult};
                console.log(queryResult);
                response.json(myJSONObject);
        	}
        }
	});
});
app.get('/findDiseaseName',function(request, response){
    var req = request.query;
    var dname = req.dname;

    var query = "select dis_info from disease_description where d_name = \'"+ dname+"\';";
    connection.query(query, function(err, queryResult){
        if (err) {
            // throw err;
            response.json("Error: " + errExistingUser);
        }
        else {
            console.log("Getting dis_info");
            var myJSONObject = {"info" : queryResult};
            console.log("moving out of nodeJS");
            response.json(myJSONObject);
        }
    });
});