import { IUserCreate } from '../../../interfaces/user';

import { prisma } from '../../../prisma/client';

export const create = async ({ name, email }: IUserCreate) => {
	const userAlreadyExists = await prisma.user.findFirst({
		where: {
			email,
		},
	});

	if (userAlreadyExists) {
		throw new Error('User already exists');
	}

	const user = await prisma.user.create({
		data: {
			name,
			email,
		},
	});

	return user;
};
