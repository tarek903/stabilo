/**
 * RentalsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

  listRents: async (request, response) => {
    try {
      let rents = await Rentals.find({}).populate('game').populate('tenant');
      return response.send(rents);
    } catch (err) {
      response.serverError(err);
    }
  },

  addRent: async(request, response) => {
    try {
      let body = request.body;
      sails.log("hello")
      input = {
        date: Date.now(),
        days: body.days
      }
      let daysOfRent = await sails.helpers.addDays.with(input);
      sails.log('7abibi ' +  daysOfRent)
      let newRent = await Rentals.create({startDate: Date.now(), endDate: daysOfRent, recieved: body.recieved, tenant: body.userId, game: body.gameId}).fetch()
      return response.send(newRent);
    } catch (err) {
      response.serverError(err);
    }
  },

  endRent: async(request, response) => {
    try {
      let body = request.body;
      let endedRent = await Rentals.update({id: body.id})
      .set({
       recievedAt: 2312312312,
       inStock: 1
      }).fetch()
      return response.send(endedRent);
    } catch (err) {
      response.serverError(err);
    }
  },

  UserRentedHistory: async(request, response) => {
    try {
      let query = request.query;
      let userRents = await Rentals.find({tenant: query.userId, recieved: 1}).populate('tenant').populate('game')
      sails.log(userRents.length)
      let games = []
      userRents.forEach(userRent => {
        games.push(userRent.game)
      });
      return response.send(games)
    } catch (err) {
      response.serverError(err);
    }
  },

  UserCurretnRents: async(request, response) => {
    try {
      let query = request.query;
      let userRents = await Rentals.find({tenant: query.userId, recieved: 0}).groupBy('game').populate('tenant').populate('game')
      sails.log(userRents.length)
      let games = []
      userRents.forEach(userRent => {
        games.push(userRent.game)
      });
      return response.send(games)
    } catch (err) {
      response.serverError(err);
    }
  },


  avaialbleGames: async(request, response) => {
    try {
      let query = request.query;
      Rentals
      let userRents = await Rentals.find({tenant: query.userId, recieved: 0}).populate('tenant').populate('game')
      sails.log(userRents.length)
      let games = []
      userRents.forEach(userRent => {
        games.push(userRent.game)
      });
      return response.send(games)
    } catch (err) {
      response.serverError(err);
    }
  }

};



