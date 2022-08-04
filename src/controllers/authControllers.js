import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
    console.error(error);
    res.sendStatus(500);
  }
}

export async function signin (req, res) {
  const { email, password } = res.locals.user;

  try {
    const { rows: user, rowCount } = await connection.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (rowCount === 0) {
      return res.sendStatus(401);
    }

    const rightPassword = bcrypt.compareSync(password, user[0].password);

    if (!rightPassword) {
      return res.sendStatus(401);
    }

    const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, { expiresIn: '15 days' });

    res.status(200).send(token);

  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}