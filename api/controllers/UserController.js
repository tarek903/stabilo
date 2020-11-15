/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  addUser: async(request, response) => {
    try {
      let body = request.body;
      let newUser = await User.create({email: body.email, username: body.username, password: body.password, phoneNumber: body.phoneNumber, firstName: body.firstName, lastName: body.lastName}).fetch()
      return response.send(newUser);
    } catch (err) {
      response.serverError(err);
    }
  },
  getUsers: async(request, response) => {
    try {
      let newUser = await User.find({});
      return response.send(newUser);
    } catch (err) {
      response.serverError(err);
    }
  },

};

