import { urlsRepository } from '../repositories/urlsRepository.js';
import { nanoid } from 'nanoid';

export async function generateShortUrl (req, res) {
  const user = res.locals.user;
  const { url } = res.locals.url;
  const shortUrl = nanoid(8);

  try {
    await urlsRepository.insertNewUrl(user.id, url, shortUrl);

    res.status(201).send({ shortUrl: shortUrl });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function getUrlObject (req, res) {
  const { id } = req.params;

  try {
    const { rows: urlObject, rowCount } = await urlsRepository.getUrlAndShortUrl(id);

    if(rowCount === 0) {
      return res.sendStatus(404);
    }

    res.status(200).send(urlObject[0]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function redirectToUrl (req, res) {
  const { shortUrl } = req.params;

  try {
    const { rows: url, rowCount } = await urlsRepository.getUrlWithVisitCount(shortUrl);

    if(rowCount === 0) {
      return res.sendStatus(404);
    }

    const addOneInVisitCount = (url[0].visitCount) + 1;

    await urlsRepository.updateUrlVisitCount(url[0].id, addOneInVisitCount)

    res.redirect(url[0].url);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function deleteUrl (req, res) {
  const { id } = req.params;
  const user = res.locals.user;

  try {
    const { rows: url, rowCount } = await urlsRepository.getUrl(id);

    if (rowCount === 0) {
      return res.sendStatus(404);
    }

    if (url[0].userId !== user.id) {
      return res.sendStatus(401);
    }

    await urlsRepository.deleteUrl(id);

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}