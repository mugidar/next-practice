"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const NotFoundPage = () => {
	const router = useRouter()
	return (
		<div className='w-full h-[calc(100vh-70px)] flex justify-center items-center'>
			<div className='text-center'>
				<h1 className='text-3xl mb-5'>Wooopsy... This page is not found - 404</h1>
				<button className='font-bold text-xl' onClick={() => router.back()}>Go Back</button>
			</div>
		</div>
	)
}

export default NotFoundPage
