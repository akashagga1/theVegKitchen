/**
 * http://usejsdoc.org/
 */
const express = require('express')
const bodyParser = require('body-parser');
const app= express();
const getHandler = require('./routes/index.js');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/',function(req,res){
	//console.log("i am here");
	res.sendFile("homePage.html", {root: './views' });	
});

app.get('/orderData',function(req,res){
	//res.send("hello world");
	//console.log("received data population request from ajax call of client");
	
	const mysql = require('mysql');
	console.log("reached in database connection logic");
	//database connection
	const connection = mysql.createConnection({		
			  host: 'localhost',
			  user: 'root',
			  password: '123456789',
			  database: 'classicmodels'
			});
			connection.connect((err) => {
			  if (err) throw err;
			  console.log('Connected!');
			});		
			
	connection.query('Select * from menu', (err,rows) =>
	{ if(err) throw err;
		/*rows.forEach( (row) => {
			console.log(`${row.itemname} has id  ${row.itemId} price is ${row.itemPrice} category is ${row.itemCategory}`);
			//dataHandler.populateData(row);
		});*/
		res.send(rows);  

	});
	
});

app.get('/order-online',function(req,res){
	
	//console.log("i am in order onlinehere");
	res.sendFile("orderOnline.html", {root: './views' });
});


app.listen(3000,function(){
	console.log("server is running on 3000");
});