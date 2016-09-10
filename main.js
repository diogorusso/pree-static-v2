'use strict';

// Vendor Require
require('jquery');
require('bootstrap-webpack');


//script
require('./assets/scripts/lib/topMenu.js');


//style
require('./assets/style/_themes/my-theme.scss');



var App = require('./assets/scripts/app/app.js');
App.start();


