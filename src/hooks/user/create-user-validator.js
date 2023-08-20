// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
const {BadRequest} = require("@feathersjs/errors");
module.exports = (options = {}) => {
  return async context => {
    const {email,password} = context.data;
    if(!email || !password) return Promise.reject(new BadRequest("Faltan Datos",{
      message: `Missing ${!email ? "email,": ""}${!password ? "password" : ""}`
    }));
    return context;
  };
};
