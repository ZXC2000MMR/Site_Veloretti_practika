import React, { useState } from 'react';
import '../components/css/ProductCard.css';
import left from '../images/Vector.png'
import right from '../images/Vector(1).png'

// Компонент ProductCard отображает информацию о продукте и позволяет менять изображение велосипеда
const ProductCard = ({ title, subtitle, price, images, colorImages, leftArrow, rightArrow }) => {
    // Состояние для хранения текущего индекса изображения
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Функция для обработки клика на левую стрелку
    const handleLeftArrowClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // Функция для обработки клика на правую стрелку
    const handleRightArrowClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    // Функция для обработки клика на изображение цвета
    const handleColorImageClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="product-card">
            <div className="product-header">
                <div className="product-title">
                    <h2>{title}</h2>
                    <span>{subtitle}</span>
                </div>
                <div className="product-price">{price}</div>
            </div>
            <div className="product-image-container">
                {/* Изображение левой стрелки */}
                <img className="arrow left" src={left} onClick={handleLeftArrowClick} />
                {/* Текущее изображение продукта */}
                <img src={images[currentImageIndex]} alt={title} className="product-image" />
                {/* Изображение правой стрелки */}
                <img className="arrow right" src={right} onClick={handleRightArrowClick} />
            </div>
            <div className="product-colors">
                {colorImages.map((color, index) => (
                    <img 
                        key={index} 
                        src={color} 
                        alt={`color`} 
                        className={`color-image ${currentImageIndex === index ? 'active' : ''}`} 
                        onClick={() => handleColorImageClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
