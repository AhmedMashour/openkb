var bcrypt = require('bcrypt-nodejs')
var bcrypt1 = require('bcrypt');
const saltRounds = 10;
var sha256 = require('sha256')

let sha5password = sha256("123")
var x = bcrypt.compareSync(sha256("123"), "$2a$10$oP.4jZtwa1dlSpo1AqD9qO3JMsolObOyRy5wKap6M224/Yc00Zm.u"); // true when compare password
var hash = bcrypt.hashSync("123");

console.log(x)