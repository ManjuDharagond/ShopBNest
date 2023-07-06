const express = require('express');
const { mongoose } = require('mongoose');
const cors = require('cors');


const register = require('./Routes/register');
const login = require('./Routes/login');
const logout = require('./Routes/logout');
const verifyToken = require('./Routes/verifyToken');
const populateDatabase = require('./PopulateDB/populateDatabase');
const productDetails = require('./Routes/productDetails');
const cart = require('./Routes/cart');
const bill = require('./Routes/bill');
const payment = require('./Routes/payment');
const verify  = require('./Routes/verify');
const googleLogin = require('./Routes/googleLogin');


const PORT = 8888;
const hostname = "localhost";

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/register', register);
app.use('/login', login);
app.use('/logout', logout);
app.use('/google-login', googleLogin)
app.use('/verify-token', verifyToken)


// app.use('/products/all', productDetails);
// app.use('/cart', cart)
// app.use('/calculate-bill', bill)
// app.use('/get-order-id', payment)
// app.use('/verify', verify);


app.use('/products/all', verifyToken, productDetails);
app.use('/cart', verifyToken, cart);
app.use('/calculate-bill', verifyToken, bill);
app.use('/get-order-id', verifyToken, payment);
app.use('/verify', verifyToken,verify);;




const MONGO_URI = "mongodb+srv://manjudmanjudharagond:3WuRpYKAvAd8RMX@cluster0.nd73572.mongodb.net/ecommerce";


mongoose.connect(MONGO_URI, ()=>{
    console.log("MongoDB running successfully");
});
    
// Populate the database   
// populateDatabase();



app.listen(PORT, hostname,()=>{
    console.log(`Server is running on http://${hostname}:${PORT}`);
})