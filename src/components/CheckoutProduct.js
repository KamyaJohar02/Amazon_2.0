import React from "react";
import Image from "next/image";
import { FormattedNumber, IntlProvider } from "react-intl";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,

  description,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product={
        id,
        title,
        price,  
        description,
        image,
        hasPrime,   
    };
    
    dispatch(addToBasket(product))

  };

  const removeItemsFromBasket = () =>{
 dispatch(removeFromBasket({id}))   
  }

  return (
    <IntlProvider locale="en">
      <div className="grid grid-cols-5">
        <Image src={image} height={200} width={200} objectFit="contain" />
        <div className="col-span-3 mx-5 ">
          <p>{title}</p>

          <p className="text-xs my-2 line-clamp-3 ">{description}</p>
          <FormattedNumber
            value={price}
            style="currency"
            currency="GBP"
            minimumFractionDigits={2}
            maximumFractionDigits={2}
          />
          {hasPrime && (
            <div className="flex items-center space-x-2 mt-2">
              <img src=".\prime_logo.png" alt="prime" width={12} />
              <p>Free next Day Delivery</p>
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-2 my-auto justify-self-end ">
          <button onClick={addItemToBasket} className="button mt-auto">
            Proceed To Buy
          </button>
          <button onClick={removeItemsFromBasket} className="button mt-auto">Remove from Cart</button>
        </div>
      </div>
    </IntlProvider>
  );
}

export default CheckoutProduct;
