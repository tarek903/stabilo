const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  bcrypt = require('bcrypt-nodejs');
passport.serializeUser((user, cb) => {
  cb(null, user.id);
});
passport.deserializeUser((id, cb) => {
  User.findOne({id}, (err, users) => {
    cb(err, users);
  });
});
passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, ((username, password, cb) => {
  User.findOne({username: username}, (err, user) => {
    if(err) {
      return cb(err);
    }
    if(!user) {
      return cb(null, null, {message: 'Username not found', messageCode: 501});
    }
    bcrypt.compare(password, user.password, (err, res) => {
      sails.log(err + ' - ' + res);
      if(!res) {return cb(null, null, { message: 'Invalid Password', messageCode: 502});}
      // let userDetails = {
      //   email: user.email,
      //   username: user.username,
      //   id: user.id
      // };
      return cb(null, user, { message: 'Login Succesful', messageCode: 200});
    });
  });
})));