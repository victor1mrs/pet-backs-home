'use server'
import { redirect } from 'next/navigation'
import prisma from './db'

export const newUser = async (formData: { get: (arg0: string) => any }) => {
  const user = await prisma.user.create({ 
    data: {
      name: formData.get('name'),
      email:formData.get('email'),
    },
   })

  if (user) {
    console.log('New User : ', user)
    redirect('/')
  } else {
    throw new Error('Something went wrong on API server!')
  }
}
