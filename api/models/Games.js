/**
 * Games.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title:{
      type: 'string',
      required: true
    },
    price:{
      type: 'number'
    },
    publishDate:{
      type: 'number'
    },
    publisher:{
      type: 'string'
    },
    developer:{
      type: 'string'
    },
    inStock: {
      type: 'number'
    }
  },


  datastore: "mongodb"

};

