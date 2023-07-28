import React from 'react'
import NavigationAside from '../shared/NavigationAside'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen overflow-x-hidden overflow-y-scroll bg-zinc-50 dark:bg-zinc-800 ' >
      <div className='flex' >
        <NavigationAside />
        <Outlet/>
      </div>
    </div>
  )
}

export default Home
