'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Profile() {
    const { data: session, status } = useSession()
  
    /* code เหมือนเดิม */
    // When after loading success and have session, show profile
    return (
      status === 'authenticated' &&
      session.user && (
        <div>
          <h1>Profile</h1>
          <p>Welcome, {session.user.name}!</p>
          <p>Email: {session.user.email}</p>
          <p>Role: {session.user.role}</p>{/* แค่เพิ่มตรงนี้เข้ามา */}
          <button onClick={() => signOut({ callbackUrl: '/' })}>Logout</button>
        </div>
      )
    )
  }