const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const mysql = require('mysql2');

app.use(bodyparser.json());
app.use(cors());

const connection = mysql.createConnection({
	host: 'mysql-db-cont',
	port: '3306',
	user: 'root',
	password: 'password',
	database: 'docker-tutorial'
});

connection.connect((err) => {
	if(err) {
		console.error("Error connecting to MySQL Database : " + err);
		return;
	}

	console.log('Connected to Database.');
});

app.get('/allprofiles', (req, res) => {
	
});

app.post('/adduser', (req, res) => {
	connection.query(`insert into \`docker-tutorial\`.\`Employee\` (\`first-name\`, \`last-name\`, \`email\`, \`company\`) values ('${req.body.firstname}', '${req.body.lastname}', '${req.body.email}', '${req.body.company}');`, (err) => {
		if(err) {
			res.json({"message": "Error while Inserting the record."}).status(500);
		}
		else {
			res.json({"message": "User inserted successfully."}).status(200);
		}
	});
});

app.get('/getusers', (req, res) => {
	connection.query(`select \`first-name\`, \`last-name\`, \`email\`, \`company\` from \`docker-tutorial\`.\`Employee\`;`, (err, result) => {
		if(err) {
			console.log(err);
			res.json({"message": "Error while fetching the records."}).status(500);
		}
		else {
			res.json(result).status(200);
		}
	});
});

app.listen(port, () => {
	console.log("Listening on Port 3000");
});

function cleanup() {
	connection.end();
	console.log('Closing the Database connection.');
	process.exit(0);
}

process.on('SIGINT', cleanup)
/*
CREATE DATABASE `docker-tutorial`;

CREATE TABLE `Employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first-name` varchar(30) NOT NULL,
  `last-name` varchar(30) NOT NULL,
  `email` varchar(45) NOT NULL,
  `company` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

Docker Commands : 

docker create -it --name mysql-db-cont -e MYSQL_ROOT_PASSWORD=password -p3307:3306 -v /home/jarvis/Desktop/JK/Client-Server-App/docker-vol/:/var/lib/mysql --network tutorial-net mysql:8.0.33

docker build -t admin-users .

docker create -it --name admin-users-cont -p 8080:80 --network tutorial-net admin-users

docker build -t server .

docker create -it --name server-cont -p 3000:3000 --network tutorial-net server

INSERT INTO `docker-tutorial`.`Employee` (`first-name`, `last-name`, `email`, `company`) VALUES ('Jaymeen', 'Kachrola', 'jaymeen@gmail.com', 'Siemens-Healthineers');
*/