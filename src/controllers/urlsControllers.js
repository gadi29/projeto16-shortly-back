import connection from '../dbStrategy/pgsql.js';
import { nanoid } from 'nanoid';

export async function generateShortUrl (req, res) {
  const user = res.locals.user;
  const url = res.locals.url;
  const shortUrl = nanoid(8);

  console.log(user)
  try {
    await connection.query(
      'INSERT INTO urls ("userId", "url", "shortUrl") VALUES ($1, $2, $3)',
      [user.id, url.url, shortUrl]
    )

    res.status(201).send({ shortUrl: shortUrl });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}