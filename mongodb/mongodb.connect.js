const mongoose = require('mongoose');
require('dotenv').config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_CLOUD, { useNewUrlParser: true, useUnifiedTopology: true });
    } catch (err) {
        console.error(err);
    }

}
module.exports = { connect };