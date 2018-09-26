module.exports = {
  development: {
      client: "pg",
      connection: "postgres//localhost/products"
  },
  production: {
      client: "pg",
      connection: process.env.DATABASE_URL
  }
};