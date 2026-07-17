import React from 'react';
import products from '@/data/products.json';
import DetailsCard from '@/components/shopproductscard/DetailsCard';

const DetailsProducts = async ({ params }) => {
  const { id } = await params;

  const product = products.find(p => p.id.toString() === id.toString());

  return (
    <section className="bg-[#ebe4dd] py-10">
      <div className=" container max-w-7xl mx-auto ">
        <div>
          <DetailsCard product={product} />
        </div>
      </div>
    </section>
  );
};

export default DetailsProducts;
