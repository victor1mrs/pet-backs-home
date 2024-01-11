import React from 'react'
import { newUser } from '@/src/utils/api'

const SignUp = () => {
  return (
    <div>
      <h1>Create your account!</h1>
      <form action={newUser}>
        <input name="name" type="text" className="border border-black/25" placeholder='Full Name'/>
        <input name="email" type="email" className="border border-black/25" placeholder='Email'/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default SignUp
