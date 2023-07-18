import { Request, Response } from 'express';

import { create } from '../../models/user/create';

export const userCreate = async (req: Request, res: Response) => {
	const { name, email } = req.body;

	const result = await create({ name, email });

	return res.status(201).json(result);
};
