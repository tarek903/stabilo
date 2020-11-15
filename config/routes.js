/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/
  'GET /games/list': {
    controller: 'GamesController',
    action: 'listGames'
  },

  '/games/byId/:id': {
    controller: 'GamesController',
    action: 'gameById'
  },

  '/games/delete/:id': {
    controller: 'GamesController',
    action: 'deleteGame'
  },

  'POST /games/add': {
    controller: 'GamesController',
    action: 'addGame'
  },

  'POST /user/add': {
    controller: 'UserController',
    action: 'addUser'
  },

  'POST /rent/startRent': {
    controller: 'RentalsController',
    action: 'addRent'
  },

  'POST /rent/endRent': {
    controller: 'RentalsController',
    action: 'endRent'
  },

  'GET /rent/listRents': {
    controller: 'RentalsController',
    action: 'listRents'
  },

  'GET /rent/UserRentedGames': {
    controller: 'RentalsController',
    action: 'UserRentedHistory'
  },

  'GET /rent/UserRentHistory': {
    controller: 'RentalsController',
    action: 'UserCurretnRents'
  },

  'POST /login': {
    controller: 'AuthController',
    action: 'login'
  },

  'POST /register': {
    controller:'AuthController',
    action: 'register'
  },

  '/logout': {
    controller: 'AuthController',
    action: 'logout'
  },

  'GET /User/getUsers': {
    controller: 'UserController',
    action: 'getUsers'
  },


  '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
