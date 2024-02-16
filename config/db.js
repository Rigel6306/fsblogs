const sql = require('mysql2')
const pool = sql.createPool({
    
    host:'localhost',
    user:'root',
    password:'',
    database:'webdev_blogs',
    port:3306,
    dateStrings:true
})
module.exports = pool.promise();

