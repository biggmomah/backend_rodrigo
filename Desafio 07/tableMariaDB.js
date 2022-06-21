const { optionsMySQL } = require("./src/utils/optionsMySQL");
const knex = require("knex")(optionsMySQL);

knex.schema
  .createTable("products", (table) => {
    table.increments("id").primary();
    table.string("name", 30).notNullable();
    table.float("price");
    table.string("thumbnail", 200);
  })
  .then(() => {
    console.log("Table created successfully");
  })
  .catch((error) => {
    console.error(error);
    throw error;
  })

  .finally(() => {
    knex.destroy();
  });