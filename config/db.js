var mongoose = require('mongoose');

mongoose.connect(
    `mongodb://localhost:27017/cpb`, 
    {useNewUrlParser: true}
);

var db = mongoose.connection;

db.on(
    'error', 
    console.error.bind(console, 'MongoDB connection error:')
);

module.exports = mongoose;