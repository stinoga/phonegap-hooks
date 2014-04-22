#!/usr/bin/env node

// This will copy all of our assets (Icons, splash screens, etc.) into their appropriate places when we build our app.
// Modify your source dir as needed.

var ncp = require('ncp').ncp,
    source = './app/assets',
    destination = './platforms/ios/Phrase/Resources/icons';

ncp.limit = 16;

ncp(source, destination, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('====== Assets moved from ' + source + ' to ' + destination + ' ======');
});
