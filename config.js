require('dotenv').config();

module.exports = {
    apiKey: process.env.BUDPAY_PUBLIC_KEY,
    apiSecret: process.env.BUDPAY_SECRET_KEY,
};