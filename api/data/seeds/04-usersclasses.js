exports.seed = function(knex) {
    return knex("usersclasses").insert([
      {UserId: 1, ClassId: 1},
      {UserId: 1, ClassId: 2},
      {UserId: 2, ClassId: 3},
      {UserId: 2, ClassId: 2},
    ])
  }