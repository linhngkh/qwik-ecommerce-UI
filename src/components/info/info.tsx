import { component$, useStore } from "@builder.io/qwik";
import Cart from "../cart/cart";

export default component$(() => {
  const state = useStore({ count: 0 });

  return (
    <div class="flex-1">
      <h1 class="uppercase font-semibold text-orange">sneaker company</h1>
      <h1 class="font-bold text-4xl tracking-wide leading-normal">
        Fall Limited{" "}
      </h1>
      <h1 class="font-bold text-4xl tracking-wide leading-10">Sneakers</h1>
      <div class="break-all text-grayishblue leading-relaxed tracking-wide mt-4">
        {" "}
        <p class="">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <div class="mt-4 flex items-center text-center space-x-6">
        <h3 class="font-bold text-2xl">$125.00</h3>{" "}
        <h3 class="text-md font-semibold text-orange bg-paleorange w-15 text-center rounded-lg px-2 py-0.5">
          50%{" "}
        </h3>
      </div>
      <h5 class="text-md text-grayishblue line-through mt-2">$250.00</h5>

      <div class="rounded-md flex space-x-3 mt-6 ">
        <div class="py-2 px-3 bg-lightgrayishblue rounded-md">
          <button class="" onClick$={() => state.count--}>
            <img src="images/icon-minus.svg" alt="" />
          </button>
          <input class="text-center justify-center w-10" value={state.count} />
          <button class="" onClick$={() => state.count++}>
            <img src="images/icon-plus.svg" alt="" />
          </button>
        </div>

        <Cart />
      </div>
    </div>
  );
});
