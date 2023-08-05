import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { contributionValidationSchema } from 'validationSchema/contributions';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.contribution
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getContributionById();
    case 'PUT':
      return updateContributionById();
    case 'DELETE':
      return deleteContributionById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getContributionById() {
    const data = await prisma.contribution.findFirst(convertQueryToPrismaUtil(req.query, 'contribution'));
    return res.status(200).json(data);
  }

  async function updateContributionById() {
    await contributionValidationSchema.validate(req.body);
    const data = await prisma.contribution.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteContributionById() {
    const data = await prisma.contribution.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
