const Razorpay = require('razorpay');
var instance = new Razorpay({ key_id: 'rzp_test_fCoDRGpGPqyKY1', key_secret: 'E3ONZlzIksneDRBmyWjKMgan' })

exports.createOrder = (req,res) =>{
    let {amount} = req.body;
    var options = {
        amount: amount*100,
        currency: "INR",
        receipt: "receipt#1"
    };

    instance.orders.create(options, function(err,order){
        if(err){
            console.log(err);
            res.status(500).send({status:false})
        }else{
            res.status(200).send(order)
        }
    })
}