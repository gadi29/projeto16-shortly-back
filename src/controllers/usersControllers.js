import connection from '../dbStrategy/pgsql.js';
import { usersRepository } from '../repositories/usersRepository.js';

export async function getUserHistory (req, res) {
  const { id } = res.locals.user;
  let history = {};
  
  try {
    const { rows: urls, rowCount } = await usersRepository.getUserUrls(id);

    if(rowCount === 0) {
      const { rows: user } = await usersRepository.getUserIdName(id);
      history = { ...user[0], visitCount: 0 };

    } else {
      const { rows: user } = await usersRepository.getUserComplete(id);
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
    const { rows: ranking } = await usersRepository.getRankingSQL();

    res.status(200).send(ranking);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}