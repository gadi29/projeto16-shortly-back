import bcrypt from 'bcrypt';

import connection from '../dbStrategy/pgsql.js';

export async function signup (req, res) {
  const newUser = res.locals.user;

  try {
    const { rowCount } = await connection.query(
      'SELECT * FROM users WHERE email = $1',
      [newUser.email]
    );

    if (rowCount > 0) {
      return res.sendStatus(409);
    }

    const passwordHash = bcrypt.hashSync(newUser.password, 10);

    await connection.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
      [newUser.name, newUser.email, passwordHash]
    );

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}