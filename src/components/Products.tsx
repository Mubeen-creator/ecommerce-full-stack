"use client"

import React, { useEffect, useState } from 'react';
import { getProducts } from '@/helpers';
import Container from './Container';
import ProductsData from './ProductsData';
import type { Products as ProductsType } from '../../type';

const ProductsComponent = () => {
    const [products, setProducts] = useState<ProductsType[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await getProducts();
            setProducts(productsData);
        };

        fetchProducts();
    }, []);

    return (
        <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -top-10">
            {
                products?.map((item: ProductsType) => (
                    <ProductsData item={item} key={item._id} />
                ))
            }
        </Container>
    );
}

export default ProductsComponent;
