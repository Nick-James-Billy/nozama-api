'use strict';

const routes = require('lib/wiring/routes');

routes.root('root#root');
routes.resources('examples');

routes.post('/sign-up', 'users#signup');
routes.post('/sign-in', 'users#signin');
routes.delete('/sign-out/:id', 'users#signout');
routes.patch('/change-password/:id', 'users#changepw');
routes.resources('users', { only: ['index', 'show'] });
routes.resources('items');
routes.resources('purchases');
<<<<<<< e089b9edd3f56ee3ec974db8ff41aea0f53b7142
routes.get('/purchaseHistory', 'purchases#getPurchaseHistory');
routes.get('/currentCart', 'purchases#getCurrentCart');
=======
>>>>>>> Add resource routes for items and purchases

module.exports = routes;
