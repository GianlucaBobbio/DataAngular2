"use strict";
var router_1 = require('@angular/router');
var users_component_1 = require('./users.component');
var home_component_1 = require('./home.component');
// Route Configuration
exports.routes = [
    { path: 'users', component: users_component_1.UsersComponent },
    { path: '', component: home_component_1.HomeComponent },
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
