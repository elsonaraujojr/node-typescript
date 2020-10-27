import { Router } from 'express';
import knex from '../database/connection';

const locationsRoutes = Router();

locationsRoutes.post('/', async (request, response) => {
  const { name, email, whatsapp, latitude, longitude, city, uf, items } = request.body;

  const location = {
    image: 'fake-image.png',
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
  };

  const transaction = await knex.transaction();

  const newIds = await transaction('locations').insert(location);

  const location_id = newIds[0];

  const locationItems = items.map((item_id: number) => {
    if (!transaction('items').where('id', item_id).first()) {
      return response.status(400).json({ message: 'Item not found.' });
    }
    return {
      item_id,
      location_id,
    };
  });

  await transaction('location_items').insert(locationItems);

  await transaction.commit();

  return response.json({
    id: location_id,
    ...location,
  });
});

export default locationsRoutes;
