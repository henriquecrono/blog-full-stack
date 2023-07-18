import { Router } from 'express';
import { userCreate } from '../../controllers/user';

const userRouter = Router();

userRouter.post('/', userCreate);

export default userRouter;
