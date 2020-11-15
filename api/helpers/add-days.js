module.exports = {

  friendlyName: 'Format welcome message',


  description: 'Return a personalized greeting based on the provided name.',


  inputs: {

    date: {
      type: 'number',
      required: true
    },

    days: {
      type: 'number',
      required: true
    }

  },

    fn: async function (inputs) {
      sails.log(inputs.date + inputs.days)
    var result = new Date(inputs.date);
    result.setDate(result.getDate() + inputs.days);
    let g = new Date(result).getTime()
    sails.log('wohooo ' + g)
    return g;
  }
};