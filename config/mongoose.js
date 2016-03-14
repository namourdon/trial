var config = require('./config'),
        mongoose = require('mongoose');
        
        module.exports = function() {
           // var db = mongoose.connect(config.db);
           var db = mongoose.connect(config.db);
            
            //check connection
            //var db2: mongoose.Connection = mongoose.connection;
            
            require('../app/models/user.server.model');
            //require('../app/models/feedback.server.model');
            
            return db;
        };