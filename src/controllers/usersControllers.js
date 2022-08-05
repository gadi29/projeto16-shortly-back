import connection from '../dbStrategy/pgsql.js';

export async function getUserHistory (req, res) {
  const { id } = res.locals.user;
  let history = {};
  
  try {
    const { rows: urls, rowCount } = await connection.query(
      `SELECT
        urls.id, urls."shortUrl", urls.url, urls."visitCount"
      FROM urls
      WHERE urls."userId" = $1`,
      [id]
    );

    if(rowCount === 0) {
      const { rows: user } = await connection.query(
        `SELECT id, name FROM users WHERE users.id = $1`,
        [id]
      );

      history = { ...user[0], visitCount: 0 };

    } else {
      const { rows: user } = await connection.query(
        `SELECT 
          users.id, users.name, SUM(urls."visitCount") as "visitCount"
        FROM users JOIN urls ON users.id = urls."userId"
        WHERE users.id = $1
        GROUP BY users.id`,
        [id]
      );

      history = { ...user[0], shortenedUrls: urls };
    }

    res.status(200).send(history);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function getRanking (req, res) {
  try {
    const { rows: ranking } = await connection.query(
      `SELECT 
        urls."userId", 
        users.name, 
        COUNT(urls."userId") as "linksCount", 
        SUM(urls."visitCount") as "visitCount"
      FROM urls JOIN users ON urls."userId" = users.id
      GROUP BY urls."userId", users.name
      ORDER BY "visitCount" DESC, "linksCount" DESC, users.name ASC
      LIMIT 10`
    )

    res.status(200).send(ranking);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}