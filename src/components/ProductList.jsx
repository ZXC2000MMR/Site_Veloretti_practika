import React from 'react';
import ProductCard from './ProductCard';
import '../components/css/ProductList.css';
import bike1 from '../images/415c9478d68b7543070b4c9786ed250f.png'
import bike2 from '../images/Ace_Two_-_Graphite_-_NEW.webp'
import bike3 from '../images/Ace_Two_-_Dune_-_NEW.webp'
import bike4 from '../images/Ace_Two_-_Jet_Black_-_NEW.webp'
import biket1 from '../images/91f45267d8722e8114ad014e10c4db8a.png'
import biket2 from '../images/Ivy_Two_-_Graphite_-_NEW.webp'
import biket3 from '../images/Ivy_Two_-_Dune_-_NEW.webp'
import biket4 from '../images/Ivy_Two_-_Pebble_Grey_-_NEW.webp'
import color1 from '../images/span-color-swatch_wrapper.png'
import color2 from "../images/span-color-swatch_wrapper-1.png"
import color3 from "../images/span-color-swatch_wrapper-2.png"
import color4 from "../images/span-color-swatch_wrapper-3.png"
import color5 from "../images/span-color-swatch_wrapper-4.png"

// Компонент ProductList отображает список продуктов
const ProductList = () => {
    const products = [
        {
            title: 'Electric Ace',
            subtitle: 'Two',
            price: '€69,07 NET/MONTH',
            images: [bike1, bike2, bike3, bike4],
            colorImages: [color1, color2, color3, color4]
        },
        {
            title: 'Electric Ivy',
            subtitle: 'Two',
            price: '€69,07 NET/MONTH',
            images: [biket1, biket2, biket3, biket4],
            colorImages: [color1, color2, color3, color5]
        }
    ];

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    title={product.title}
                    subtitle={product.subtitle}
                    price={product.price}
                    images={product.images}
                    colorImages={product.colorImages}
                />
            ))}
        </div>
    );
};

export default ProductList;
