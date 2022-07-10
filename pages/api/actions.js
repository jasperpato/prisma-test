import prisma from '../../lib/prisma'

export default async function assetHandler(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const actions = await prisma.action.findMany();
        // const actions = 'ass';
        res.status(200).json(actions[0].Title)
      } catch (e) {
        console.error('Request error', e)
        res.status(500).json({ error: 'Error fetching posts' })
      }
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
      break
  }
}