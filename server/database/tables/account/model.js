// *******************************************************
// Model File
// -------------------------------------------------------
// This file outlines the DB structure for the client table
// This will normally contain the table schema
// --------------------------------

// *******************************************
// Imports
// -------------------------------------------
import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------
const Account = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    creationDate: Date,
    updateDate: Date,
    lastActive: Date,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
});

Account.statics.serializeUser = function() {
    return function(user, cb) {
        cb(null, user._id);
    }
};

Account.statics.deserializeUser = function() {
    var self = this;
    return function(id, cb) {
        self.findOne({_id: id}, cb);
    }
};

Account.plugin(passportLocalMongoose);

export default mongoose.model('Account', Account);
// --------------------------------
