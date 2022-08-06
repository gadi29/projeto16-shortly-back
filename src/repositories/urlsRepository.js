import connection from '../dbStrategy/pgsql.js';

function insertNewUrl(id, url, shortUrl) {
  return connection.query(
    'INSERT INTO urls ("userId", "url", "shortUrl") VALUES ($1, $2, $3)',
    [id, url, shortUrl]
  );
}

function getUrlAndShortUrl(id) {
  return connection.query(
    'SELECT "id", "shortUrl", "url" FROM urls WHERE id = $1',
    [id]
  );
}

function getUrlWithVisitCount(shortUrl) {
  return connection.query(
    'SELECT "id", "url", "visitCount" FROM urls WHERE "shortUrl" = $1',
    [shortUrl]
  );
}

function updateUrlVisitCount(id, number) {
  return connection.query(
    'UPDATE urls SET "visitCount" = $1 WHERE id = $2',
    [number, id]
  );
}

function getUrl(id) {
  return connection.query(
    'SELECT * FROM urls WHERE id = $1',
    [id]
  );
}

function deleteUrl(id) {
  return connection.query(
    'DELETE FROM urls WHERE id = $1',
    [id]
  );
}

export const urlsRepository = {
  insertNewUrl,
  getUrlAndShortUrl,
  getUrlWithVisitCount,
  updateUrlVisitCount,
  getUrl,
  deleteUrl
}