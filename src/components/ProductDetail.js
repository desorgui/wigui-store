import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const ProductDetail = () => {

  const { id } = useParams();

  const product = useSelector((state) => state.products.find((product) => product.id == id));

  const [selectedThumbnail, setSelectedThumbnail] = useState(product.thumbnail);

  const handleThumbnailClick = (thumbnail) => {
    setSelectedThumbnail(thumbnail);
  };

    return (
      <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 py-12">
    <div className="flex flex-col items-center md:flex-row -mx-4">
      <div className=" px-4 justify-center">
        <div>
          <div className="rounded-lg mb-4 flex">
            <div className="flex flex-col mr-4 w-16">
              {product?.images?.map((image, index) => (
                <img src={image} alt={"Thumbnail "+ index} onClick={() => handleThumbnailClick(image)}
                  className={`transition-all cursor-pointer w-12 h-12 mb-2 rounded-full border border-[#e74c3c]
                  ${ image === selectedThumbnail ? "active border-2 border-[#e74c3c] shadow-lg rounded-sm" : "" }`}
                />
              ))}
            </div>
            <img src={selectedThumbnail} alt={product.title} className="h-64 md:h-80 rounded-lg max-w-md object-cover bg-gray-100 mb-4" />
          </div>
        </div>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{product.title}</h2>
        <p className="text-gray-500 text-sm">By <a href="#" className="text-[#e74c3c] hover:underline">{product.brand}</a></p>

        <div className="flex items-center space-x-4 my-4">
          <div>
            <div className="rounded-lg bg-gray-100 flex py-2 px-3">
              <span className="text-[#ff897c] mr-1 mt-1">$</span>
              <span className="font-bold text-[#e74c3c] text-3xl">{product.price}</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-[#ff9100] text-xl font-semibold">Save {product.discountPercentage}%</p>
            <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
          </div>
        </div>

        <p className="text-gray-500">{product.description}</p>

        <div className="flex py-4 space-x-4">
          <div className="relative">
            <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
            <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <svg className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>

          <button type="button" className="h-14 px-6 py-2 font-semibold rounded-xl bg-[#e94c3ad0] hover:bg-[#fa341e] text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
  </>
    );
}

export default ProductDetail;