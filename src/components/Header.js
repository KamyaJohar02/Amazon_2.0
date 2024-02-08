import React from "react";
import Image from "next/image";
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { selectItems } from "../slices/basketSlice";
import { useSelector } from "react-redux";

function Header() {
  //const { data: session } = useSession();
  const router = useRouter(); // Initialize the router object
  const items = useSelector(selectItems);

  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 py-2 flex-grow">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search */}
        <div className="hidden rounded-md cursor-pointer mx-6  border-white sm:flex items-center flex-grow bg-yellow-400  hover:bg-yellow-500 ">
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="p-4 h-full w-6 flex-grow flex-shrink rounded-l-md border-none outline-none placeholder-transparent"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-12 ml-2 text-black-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
       
        <div className="text-white items-center text-sm flex space-x-6 m-3 font-bold">
          <div onClick={ signIn} className="link">
            <p className="hover underline">
              Hello Kamya Johar
            </p>
            
            <p className="font-extrabold md:font-sm">Accounts & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:font-sm">& Orders</p>
          </div>
          <div onClick={()=>router.push('/checkout')} className="link flex items-center relative">
            <span className="absolute bottom-6 h-4 w-4 bg-yellow-400 left-6 md:right-10 text-center rounded-full text-black">
              {items.length}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <p className="hidden font-extrabold md:inline md:font-sm">Cart</p>
          </div>
        </div>
       
      </div>

      {/* Bottom Nav */}
      <div className="flex flex-grow space-x-3 p-2 pl-6 bg-amazon_blue-light text-md text-white">
        <p className="flex link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
          All
        </p>

        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food</p>
        <p className="link hidden lg:inline-flex">Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
