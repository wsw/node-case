var mysql = require('mysql');

var TEST_DATABASE = 'app';
var TEST_TABLE = 'detail';

//创建连接
var client = mysql.createConnection({
    user: 'root',
    password: ''
});

client.connect();
client.query("use " + TEST_DATABASE);

exports.queryCallback = function(callback) {
    client.query('SELECT * FROM '+TEST_TABLE,
        function (err, results, fields) {
            if (err) {
                throw err;
            }

            if(results){
                callback && callback(results);
            }
            client.end();
        }
    );
};