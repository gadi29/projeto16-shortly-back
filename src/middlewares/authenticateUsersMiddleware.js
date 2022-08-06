import jwt from 'jsonwebtoken';
import { usersRepository } from '../repositories/usersRepository.js';

function authenticateUser (req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }
  
  const token = authorization?.replace('Bearer ', '');

  jwt.verify(token, process.env.JWT_SECRET, async (error, userId) => {
    
    if (error) {
      return res.sendStatus(401);
    }

    const { rows: user, rowCount } = await usersRepository.getUserById(userId.id)
      
    if (rowCount === 0) {
      return res.sendStatus(404);
    }
    
    res.locals.user = user[0];
    
    next();
    }
  );
}

export default authenticateUser;