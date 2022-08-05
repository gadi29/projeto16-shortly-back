import connection from '../dbStrategy/pgsql.js';
import jwt from 'jsonwebtoken';

async function authenticateUser (req, res, next) {

  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');

  console.log(process.env.JWT_SECRET);
  const userId = jwt.verify(token, process.env.JWT_SECRET);

  const user = await connection.query(
    'SELECT * FROM users WHERE id = $1',
    [userId.id]
  );
  
  if (!user) {
    return res.sendStatus(401);
  }

  res.locals.user = user;

  next();
}

export default authenticateUser;