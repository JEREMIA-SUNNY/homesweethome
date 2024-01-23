import React from "react";

function AdSection() {
  return (
    <div>
      <div className="relative overflow-hidden bg-white">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-white bg-opacity-75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white"></div>
        </div>

        <section
          aria-labelledby="sale-heading"
          className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <h2
              id="sale-heading"
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
            >
              Get 25% off during our one-time sale
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">
              Most of our products are limited releases that won't come back.
              Get your favorite items while they're in stock.
            </p>

            
          </div>
        </section>
      </div>
    </div>
  );
}

export default AdSection;
