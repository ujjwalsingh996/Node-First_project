const path = require('path');


const rootDir = require('../util/path');

exports.getContactForm = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views', 'contact.html')); 
}

exports.postContactForm = (req, res, next) => {
    res.redirect('/success'); 
}

exports.success = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views', 'success.html')); 
}