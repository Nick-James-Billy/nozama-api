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
routes.get('/purchaseHistory', 'purchases#getPurchaseHistory');
routes.get('/currentCart', 'purchases#getCurrentCart');
routes.post('/charge', 'purchases#createCharge');
routes.get('/search', 'items#searchByName');


module.exports = routes;
