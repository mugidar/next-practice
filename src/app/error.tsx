'use client'
import Error from 'next/error'
import React, { useEffect } from 'react'

const ErrorPage = ({ error, reset}: { error: Error, reset: () => void }) => {
	useEffect(() => {

		console.error(error)
	}, [error])
	return (
		<div className="w-full h-[calc(100vh-70px)] flex justify-center items-center text-6xl">
			Something went wrong...
			<button className='underline font-bold text-blue-400' onClick={() => reset()}>Try again</button>
		</div>
	)
}

export default ErrorPage
