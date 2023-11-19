import { ProductItem } from '@/types/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductItem: React.FC<ProductItem> = ({ name, img, price }) => {
	return (
		<Link href={`/products/${name}`} className="flex flex-col justify-between w-1/6">
			<div className='relative w-full h-[250px]'>
				<Image fill alt={name} src={img}  className='object-fit' />
			</div>
			<span className="flex items-center justify-between">
				<p className="text-xl capitalize">{name}</p>
				<strong className="text-2xl">{price}$</strong>
			</span>
		</Link>
	)
}

export default ProductItem
