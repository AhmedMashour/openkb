var bcrypt = require('bcrypt-nodejs')
var x = bcrypt.compareSync("123", "$2a$10$yjdWFj/t17YCcjmj8.17kOoFNndsk3eLyA.yoSYwEzFij3iYy7r2W"); // true when compare password
var hash = bcrypt.hashSync("123");

console.log(x)