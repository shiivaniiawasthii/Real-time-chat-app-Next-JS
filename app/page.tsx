"use client"
import { UserButton } from '@clerk/clerk-react'
import React from 'react'


function Home() {
  return (
    <div style={{ padding: 20, background: '#f0f0f0' }}>
      <UserButton />
    </div>
  )
}

export default Home