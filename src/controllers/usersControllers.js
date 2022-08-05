import connection from '../dbStrategy/pgsql.js';

export async function getUserHistory (req, res) {
  const { id } = res.locals.user;
  
  try {
    const { rows: user } = await connection.query(
      `SELECT 
        users.id, users.name, SUM(urls."visitCount") as "visitCount"
      FROM users JOIN urls ON urls."userId" = users.id
      WHERE urls."userId" = $1
      GROUP BY users.id`,
      [id]
    )

    const { rows: urls } = await connection.query(
      `SELECT
      urls.id, urls."shortUrl", urls.url, urls."visitCount"
    FROM urls
    WHERE urls."userId" = $1`,
    [id]
    )

    const userObject = user[0];

    res.status(200).send({ ...userObject, shortenedUrls: urls });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}