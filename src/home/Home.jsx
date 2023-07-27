import React from 'react'
import NavigationAside from '../shared/NavigationAside'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen bg-zinc-50 dark:bg-zinc-800' >
      <div className='flex' >
        <div className='sticky top-0' >
          <NavigationAside />
        </div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Home
