/**
 * Rentals.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    startDate:{
      type: 'string',
      required: true
    },
    endDate:{
      type: 'number',
      required: true
    },
    recievedAt:{
      type: 'number',
      required: false
    },
    tenant: {
      model: 'user',
      required: true
    },
    game: {
      model: 'games',
      required: true
    }
  },

  datastore: "mongodb"
};

