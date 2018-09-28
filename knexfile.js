module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/tobac-app'
    },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-tobac-app'
  }
};