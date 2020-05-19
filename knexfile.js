// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite3'
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    },
    useNullAsDefault: true
  },
  updatedComicUnavailableLoan: () => `
  CREATE TRIGGER updatedcomicunavailableloan
  BEFORE UPDATE ON loan
  FOR EACH ROW
  EXECUTE PROCEDURE updatedcomicunavailableloan();
  `

};
