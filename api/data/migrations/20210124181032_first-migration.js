exports.up = function(knex) {
  return knex.schema.createTable("Users", tbl => {
      tbl.increments('UserId')
      tbl.string('User_Username', 200).notNullable()
      tbl.string('User_Password', 200).notNullable()
      tbl.string('User_Email', 320)
      tbl.string("User_Role").notNullable()
    })
    .createTable("Classes", tbl => {
      tbl.increments("ClassId")
      tbl.string("Name").notNullable()
      tbl.string("Type")
      tbl.string("StartTime")
      tbl.string("Duration")
      tbl.string("IntensityLevel")
      tbl.string("Location")
      tbl.integer("Attendees").unsigned()
      tbl.integer("MaxClassSize").unsigned()
    })
  // .createTable("UsersClasses", tbl => {
  //   tbl.increments("UCId")
  //   tbl.integer("UserIdUC")
  //       .notNullable()
  //       .references("UserId")
  //       .inTable("Users")
  //       .onDelete("CASCADE")
  //   tbl.integer("ClassIdUC")
  //       .notNullable()
  //       .references("ClassId")
  //       .inTable("Classes")
  //       .onDelete("CASCADE")
  // })
}

exports.down = function(knex) {
  return knex.schema
  // .dropTableIfExists("UsersClasses")
  .dropTableIfExists("Classes")
  .dropTableIfExists("Users")
}
