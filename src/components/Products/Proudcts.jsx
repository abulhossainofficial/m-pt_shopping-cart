const Proudcts = ({ product, handleAddToCart }) => {
  return (
    <div className="border-2 p-6 bg-slate-100">
      <div>
        <div className="flex justify-center">
          <img className="w-36 h-52" src={product.image} alt="" />
        </div>
        <h2 className="text-2xl font-bold mt-2">{product.title}</h2>
        <p className="font-extrabold mt-5 text-center text-2xl">
          Price: ${product.price}
        </p>
        <p className="font-semibold mt-8">{product.description}</p>
        <p className="font-semibold mt-3 text-right">
          category: {product.category}
        </p>
        <div className="text-right mt-4">
          <button onClick={(e) => handleAddToCart(product)} className="btn">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Proudcts;
