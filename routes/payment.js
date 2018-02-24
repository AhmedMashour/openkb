var express = require('express');
var router = express.Router();
var db = require('../database');
var co = require('co')
var payment = require('../payment')


router.post('/create_order',(req,res)=>
{

    db.CreateAnOrder(
        {
            amount:2.5,
            UID:123,
            blance_of:16,

        },
        x=>
        {
           let orderID = x[1][0].OID;

          payment. PaymentToken(
               {
                   order_id:orderID,
                   amount:12000,
                   first_name:"Ahmed",
                   last_name:"Ibrahim",
                   email:"A@a.com",
                   phone:"+2001119093531",
                   state:"cairo",
                   
               },x=>
               {
                   console.log(x.token)
               })
        }
    )
})

module.exports = router;
