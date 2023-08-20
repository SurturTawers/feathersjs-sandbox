const { Service } = require('feathers-sequelize')
const {BadRequest} = require("@feathersjs/errors");

exports.Users = class Users extends Service {

  async create(data, params){

    return await super.create({
      email:data.email,
      password: data.password
    }, params);
  }
}
