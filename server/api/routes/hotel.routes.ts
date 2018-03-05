import { Router } from 'express';
import { HotelController } from '../controllers/hotel.controller';

const hotelRouter = Router();
const hotelController = new HotelController();

hotelRouter
  .get('/', hotelController.list)
  .post('/', hotelController.create)
  .get('/:id', hotelController.retrieve)
  .put('/:id', hotelController.update)
  .delete('/:id', hotelController.delete);

export { hotelRouter };
