import React from "react";
import Header from "../Components/Header"; // Make sure this path is correct
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { SessionProvider, useSession } from "next-auth/react"; // Import SessionProvider and useSession
import { FormattedNumber, IntlProvider } from "react-intl";

function Checkout() {
  // Capitalize the function name according to convention

  const items = useSelector(selectItems);
  const { data: session } = useSession();
   // Destructure session from useSession
   const total=useSelector(selectTotal);
  return (
    <IntlProvider>
    <div>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className=" flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col space-y-10  p-5 bg white">
            <h1 className="text-3xl border-b pb-4 ">
              {items.length === 0
                ? `Your Cart is empty`
                : `Your Amazon Shopping Cart`}
            </h1>
            {items.map((item, i) => (
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
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal({items.length}items):
                <span className="font-bold">
                <FormattedNumber
              value={total}
            style="currency"
            currency="GBP"
            minimumFractionDigits={2}
            maximumFractionDigits={2}
          />


                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to the account" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
    </IntlProvider>
  );
}

// Wrap Checkout component with SessionProvider
export default function CheckoutWithSession() {
  return (
    <SessionProvider>
      <Checkout />
    </SessionProvider>
  );
}
