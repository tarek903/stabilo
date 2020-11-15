/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require('passport');
module.exports = {
  login: function(req, res) {
    passport.authenticate('local', (err, user, info) => {
      sails.log(req.body.username);
      if((err) || (!user)) {
        return res.send({
          message: info.message,
          messageCode: info.messageCode,
          err: err,
          user: null
        });
      }
      req.logIn(user, (err) => {
        if(err) {
          res.send(err);
        }
        return res.send({
          message: info.message,
          messageCode: info.messageCode,
          user
        });
      });
    })(req, res);
  },

  logout: function(req, res) {
    req.logout();
    res.redirect('/');
  },
  
  register: function(req, res){
    //TODO: form validation here
    data = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      description: req.body.description
    };
    User.create(data).fetch().exec((err, user) => {
      if (err) {return res.negoiate(err);}

      //TODO: Maybe send confirmation email to the user before login
      req.login(user, (err) => {
        if (err) {return res.negotiate(err);}
        sails.log('User '+ user.id +' has logged in.');
        return res.redirect('/');
      });
    });
  }
};