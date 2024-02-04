import React, { useState } from 'react';
import NextImage from 'next/image';
import { FormattedNumber, IntlProvider } from 'react-intl';

function Product({ id, title, price, category, description, image }) {
  const MAX_RATING = 5;
  const MIN_RATING = 1;
  const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING));
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <IntlProvider locale="en">
      <div className="relative flex flex-col m-5 bg-white z-50 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400"> {category}</p>
        <NextImage src={image} height={200} width={200} objectFit="contain" className="my-auto mx-auto" />
        <h4>{title}</h4>

        <div className='flex h-5 text-yellow-500'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
        </div>
        <p className="my-2 text-xs line-clamp-2">{description}</p>
        <FormattedNumber className="mb-5" value={price} style="currency" currency="GBP" minimumFractionDigits={2} maximumFractionDigits={2} />

        {hasPrime && (
          <div className="flex items-center space-x-2 mt-2">
            <img src=".\prime_logo.png" alt="prime" width={12} />
            <p className='text-xs text-gray-500'>FREE next-day delivery</p>
          </div>
        )}

        <button className="mt-auto button">Add to Cart</button>
      </div>
    </IntlProvider>
  );
}

export default Product;
