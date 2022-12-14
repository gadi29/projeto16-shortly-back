import connection from '../dbStrategy/pgsql.js';

function getUserUrls(id) {
  return connection.query(
    `SELECT
      urls.id, urls."shortUrl", urls.url, urls."visitCount"
    FROM urls
    WHERE urls."userId" = $1`,
    [id]
  );
}

function getUserIdName(id) {
  return connection.query(
    `SELECT id, name FROM users WHERE users.id = $1`,
    [id]
  );
}

function getUserComplete(id) {
  return connection.query(
    `SELECT 
      users.id, users.name, SUM(urls."visitCount") as "visitCount"
    FROM users JOIN urls ON users.id = urls."userId"
    WHERE users.id = $1
    GROUP BY users.id`,
    [id]
  );
}

function getRankingSQL() {
  return connection.query(
    `SELECT 
      urls."userId", 
      users.name, 
      COUNT(urls."userId") as "linksCount", 
      SUM(urls."visitCount") as "visitCount"
    FROM urls JOIN users ON urls."userId" = users.id
    GROUP BY urls."userId", users.name
    ORDER BY "visitCount" DESC, "linksCount" DESC, users.name ASC
    LIMIT 10`
  );
}

function getUserByEmail(email) {
  return connection.query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );
}

function insertNewUser(name, email, password) {
  return connection.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
    [name, email, password]
  );
}

function getUserById(id) {
  return connection.query(
    'SELECT * FROM users WHERE id = $1',
    [id]
  );
}

export const usersRepository = {
  getUserUrls,
  getUserIdName,
  getUserComplete,
  getRankingSQL,
  getUserByEmail,
  insertNewUser,
  getUserById
}