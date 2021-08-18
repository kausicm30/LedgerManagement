let express = require('express');
let router = express.Router();
let transaction = require('../../models/transaction');
router.get('/', function (req, res) {
    res.send({"name":"kausic"});
});

router.post('/postdata', async (req, res) => {
    var ownerEmail = req.body.ownerEmail;
    var customer = req.body.name;
    var phoneNumber = req.body.pno;
    var customerEmail = req.body.emailid;
    var type = req.body.options;
    var description = req.body.des;
    var amount = req.body.trans;
    const obj = {
        ownerEmail,customer,phoneNumber,customerEmail,type,description,amount
    }
    try {
        const newTransaction = await transaction(obj).save();
        res.send(newTransaction);

    } catch (err) {
        res.send(err);
    }
});

router.get('/getdata', async (req, res) => {
    console.log(req.query);
    try {
        let tDetails = await transaction.find({ownerEmail:req.query.email});
        res.send(tDetails);
      } catch (err) {
        res.send(err);
      }
})

module.exports = router;