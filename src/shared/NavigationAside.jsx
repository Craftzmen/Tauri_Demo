import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { FaAtlassian as TasklyLogo, FaCalendarDay, FaCoins } from 'react-icons/fa'
import { UserButton } from '@clerk/clerk-react'

const NavigationAside = () => {
    const currentPath = useLocation()
    const sideNavigation = [
        { id: Math.random().toString(), label: 'Tasks & Issues', route: '/tasks_&_issues', icon: FaCoins },
        { id: Math.random().toString(), label: 'Scheduling', route: '/scheduling', icon: FaCalendarDay },
    ]
    return (
        <div>
            <aside className="flex flex-col justify-between items-start w-[22rem] py-6 px-6 text-sm-md min-h-screen bg-white">
                <nav className='w-full' >
                    <div className='inline-block' >
                        <Link to='/' className='mb-8 flex items-center gap-x-2.5 bg-indigo-50/50 text-indigo-500 py-3 pl-6 pr-7 rounded-full' >
                            <TasklyLogo className='w-5 h-5 ' />
                            <h1 className='font-bold' >Taskly</h1>
                        </Link>
                    </div>
                    <div className="flex flex-col w-full" >
                        {sideNavigation.map((navItem) => (
                            <Link key={navItem.id} to={navItem.route} className={` hover:opacity-70 ${currentPath.pathname === navItem.route ? 'bg-indigo-50/50 text-indigo-500 font-medium hover:opacity-100' : 'text-zinc-500/90' } flex gap-x-3 items-center px-4 py-2.5 rounded-md transition-all duration-200`} >
                                <navItem.icon className='w-4 h-4' />
                                <span>{navItem.label}</span>
                            </Link>
                        ))}
                    </div>
                </nav>
                <div>
                    <UserButton/>
                </div>
            </aside>
        </div>
    )
}

export default NavigationAside
