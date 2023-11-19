import { products } from '@/utils/products'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Image from 'next/image'
import React from 'react'

const ProductPage = ({ params }: { params: Params }) => {
	const productName = params.productName
	const product = {
		...products.filter(product => product.name === productName)[0]
	}
	const { name, img, price } = product
	return (
		<div className='flex flex-col w-full   items-center'>
			<div className="relative w-[400px] h-[300px]">
				<Image fill alt={name} src={img} />
			</div>
			<h1>Name: {name}</h1>
			<h1>Price: {price}</h1>
		</div>
	)
}

export default ProductPage
