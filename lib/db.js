var mysql2 = require("mysql2");

var connection = mysql2.createConnection({
    host: "mysql_server",
    user: "thanos",
    password: "123",
    database: "omegaschools",
    multipleStatements: true
});

connection.connect(function(error) {
    if(error){
        console.log("Problem with DB...");
    }
    else{
        console.log("Conected...");
    }
});

module.exports = connection;