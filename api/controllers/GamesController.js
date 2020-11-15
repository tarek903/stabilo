/**
 * GamesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  listGames: async (request, response) => {
    try {
      let games = await Games.find({});
      sails.log(games[0].inStock)
      return response.send(games);
    } catch (err) {
      response.serverError(err);
    }
  },

  gameById: async (request, response) => {
    try {
      let games = await Games.find({id: request.params.id});
     // games[0].success = true;
      return response.send(games);
    } catch (err) {
      response.serverError(err);
    }
  },

  deleteGame: async(request, response) => {
    try {
      let tit = await Games.find({id: request.params.id})
      let deletedGame = await Games.destroy({ id: request.params.id });
      return response.send(tit);
    } catch (err) {
      response.serverError(err);
    }
  },

  addGame: async(request, response) => {
    try {
      let body = request.body;
      let newGame = await Games.create({title: body.title, price: body.price, publishDate: body.publishDate, publisher: body.publisher, developer: body.developer}).fetch()
      return response.send(newGame);
    } catch (err) {
      response.serverError(err);
    }
  }
};


