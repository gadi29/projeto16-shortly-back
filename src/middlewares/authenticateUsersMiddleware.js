import connection from '../dbStrategy/pgsql.js';
import jwt from 'jsonwebtoken';

function authenticateUser (req, res, next) {

  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');

  jwt.verify(token, process.env.JWT_SECRET, async (err, userId) => {
    
    if (err) {
      return res.sendStatus(401);
    }

    const { rows: user, rowCount } = await connection.query(
      'SELECT * FROM users WHERE id = $1',
      [userId.id]
    );
      
    if (rowCount === 0) {
      return res.sendStatus(401);
    }
    
    res.locals.user = user[0];
    next();
    }
  );
}

export default authenticateUser;