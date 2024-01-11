import prisma from '@/src/utils/db'
import { NextResponse } from 'next/server'

export const POST = async (request: Request) => {
  const request_data = await request.json()
  
  const user = await prisma.user.create({ 
    data: {
      name: request_data.name,
      email:request_data.email,
    },
   })
  return NextResponse.json({ data: user })
}
