module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/tobac-app'
    },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-tobac-app'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};