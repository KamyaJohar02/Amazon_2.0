// src/pages/index.js
import MyCarousel from "../components/MyCarousel";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div>
      {/* Header */}
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <MyCarousel />

        {/* Product Feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products')
    .then((res) => res.json()
    .then(console.log(res.json)));
    

  return {
    props: {
      products,
    },
  };
}
