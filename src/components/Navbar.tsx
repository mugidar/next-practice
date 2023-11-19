import React from 'react'
import { routes } from '@/utils/routes'
import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className="w-full h-[70px] flex items-center justify-center  bg-white/5">
			<ul className='flex gap-5'>
				{routes.map(route => (
					<li key={route.pathname}>
						<Link href={route.url}>{route.pathname}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
