// Do not expose your credentials in your code.
let atlasDB = "mongodb+srv://panth23patel:panthdevanshi2326@cluster0.trt7hxk.mongodb.net/?retryWrites=true&w=majority";
// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}