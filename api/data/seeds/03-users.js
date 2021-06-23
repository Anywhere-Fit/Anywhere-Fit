exports.seed = function(knex) {
    return knex("Users").insert([
      {UserId: 1, User_Username: "instructor", User_Password: "1234", User_Password: "instructor"},
      {UserId: 2, User_Username: "instructor2", User_Password: "1234", User_Password: "instructor"},
      {UserId: 3, User_Username: "client", User_Password: "1234", User_Password: "client"}
    ])
  };