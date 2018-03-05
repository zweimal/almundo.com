import { Router } from 'express';
import { hotelRouter } from './hotel.routes';

const appRouter = Router();

appRouter.use('/hotels', hotelRouter);

export { appRouter };
