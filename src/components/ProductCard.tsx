import React from 'react';
import "../styles/productcard.css"; 

type ProductCardProps = {
    image: string;
    imgAlt?: string;
    title: string;
    price: string;
    description?: string;
    buttonText?: string;
    onAddToCart?: () => void;

};
const ProductCard: React.FC<ProductCardProps> = ({
    image,
    imgAlt,
    title,
    price,
    description,
  
}) => (
    <div className='product-card'>
        <img
            src={image}
            alt={imgAlt || title}
        />
        <h2>{title}</h2>
        <p>{price}</p>
        {description && <p>{description}</p>}
    
    </div>
);

export default ProductCard;
