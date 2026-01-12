import React, { useContext } from "react";
import FrontendLayout from "../../layout/FrontendLayout";
import { CartContext } from "../../CartContext";

function Cart() {

let{state, dispatch} = useContext(CartContext)
  return (
    <FrontendLayout>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h2>
          <div className="hidden lg:grid grid-cols-2 py-6">
            <div className="font-normal text-xl leading-8 text-gray-500">
              Product
            </div>
            <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
              
              <span className="w-full max-w-65 text-center">Quantity</span>
              <span className="w-full max-w-50 text-center">Total</span>
            </p>
          </div>
          {/* adding data map here */}

              {state.cart.map((a) => (
            <div
              key={a.id}
              className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6"
            >
              {/* Product info */}
              <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                <div className="img-box">
                  <img
                    src={a.thumbnail}
                    alt={a.title}
                    className="xl:w-35 rounded-xl object-cover"
                  />
                </div>
                <div className="pro-data w-full max-w-sm ">
                  <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                    {a.title}
                  </h5>
                  <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                    {a.category}
                  </p>
                  <h6 className="font-medium text-lg leading-8 text-indigo-600 max-[550px]:text-center">
                    ${a.price.toFixed(2)}
                  </h6>
                </div>
              </div>

              {/* Quantity & total */}
              <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                <div className="flex items-center w-full mx-auto justify-center">
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREASE_QUANTITY", payload: a })
                    }
                    className="group rounded-l-full px-6 py-4.5 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-29.5 min-w-20 placeholder:text-gray-900 py-3.75 text-center bg-transparent"
                    value={1}
                  />
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREASE_QUANTITY", payload: a })
                    }
                    className="group rounded-r-full px-6 py-4.5 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
                <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-44 text-center">
                  ${(a.price * a.quantity).toFixed(2)}
                </h6>
                  {/* Remove button */}
                <button
                  onClick={() =>
                    dispatch({ type: "remove", payload: a })
                  }
                  className="mt-2 text-red-600 font-semibold hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FrontendLayout>
  );
}

export default Cart;
