// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const users = context.result.data;
    let formattedUsers;
    //console.log(users);
    if(users.length !==0){
      formattedUsers = users.map((user)=>{
        return {
          user_id: user.id,
          user_email: user.email
        }
      });
      context.result.data = formattedUsers;
    }
    return context;
  };
};
