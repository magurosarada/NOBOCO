import { NextApiRequest, NextApiResponse } from 'next'

type Data = 
|{
  message?:string,
  revalidated?:boolean
}|string;
export default async function handler(
  req:NextApiRequest,
  res:NextApiResponse<Data>) {

  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    await res.unstable_revalidate(req.query.path as string)
    return res.json({ revalidated: true })
  } catch (err) {

    return res.status(500).send('Error revalidating')
  }
}