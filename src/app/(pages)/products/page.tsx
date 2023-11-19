import ProductItem from '@/components/ProductItem'
import React from 'react'
import { products } from '@/utils/products'
const ProductsPage = () => {
	return (
		<div className="flex flex-wrap justify-start gap-10 p-5">
			{products.map(product => (
				<ProductItem
					key={product.name}
					name={product.name}
					img={product.img}
					price={product.price}
				/>
			))}
		</div>
	)
}

export default ProductsPage
