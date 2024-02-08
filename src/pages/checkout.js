import React from 'react';
import Header from '../Components/Header'; // Make sure this path is correct
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';

function Checkout() { // Capitalize the function name according to convention

  const items=useSelector(selectItems)
  return (
    <div>
      <Header />
      <main className='lg:flex max-w-screen-2xl mx-auto'> 
        {/* Left */}
        <div className=' flex-grow m-5 shadow-sm'>
          <Image 
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col space-y-10  p-5 bg white">
          <h1 className="text-3xl border-b pb-4 ">
           {items.length=== 0 ? `Your Cart is empty`: `Your Amazon Shopping Cart`} 
            </h1> 
            {items.map((item, i) =>(
              <CheckoutProduct 
          key={i}
          id={item.id}
          title={item.title}
          price={item.price}
          category={item.category}
          description={item.description}
          image={item.image}
          hasPrime={item.hasPrime}
              
              
              />
            ))}
        </div>
        </div>
      </main>
    </div>
  );
}

export default Checkout;
