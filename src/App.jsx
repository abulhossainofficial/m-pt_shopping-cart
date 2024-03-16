import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Proudcts from "./components/Products/Proudcts";

function App() {
  const [products, setproducts] = useState([]);
  const [cart, setcart] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
      });
  }, []);

  const handleAddToCart = (p) => {
    const isExist = cart.find((pd) => pd.id == p.id);
    if (!isExist) {
      setcart([...cart, p]);
    } else {
      alert("already adding in cart");
    }
  };

  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.id != id);
    setcart(newCart);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto mt-6 flex justify-around gap-8 bg-slate-50">
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((pd) => (
            <Proudcts product={pd} handleAddToCart={handleAddToCart}></Proudcts>
          ))}
        </div>
        <div className="w-1/4 box-sh shadow-inner text-center">
          <h2 className="text-3xl font-bold">This is card</h2>
          <div className="flex justify-around mt-6 font-bold">
            <p>Name</p>
            <p>Price</p>
          </div>
          <div>
            {cart.map((item, index) => (
              <div className="flex justify-around mt-3">
                <p>{index + 1}</p>
                <p>{item.title.slice(0, 18)}</p>
                <p>{item.price}</p>
                <button onClick={() => handleDelete(item.id)} className="btn">
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
