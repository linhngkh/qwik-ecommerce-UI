import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <button class="bg-orange py-2 px-10 flex gap-4 text-white rounded-md">
      {" "}
      <img src="images/icon-cart.svg" alt="cart" class="text-white" />
      Add to cart
    </button>
  );
});
