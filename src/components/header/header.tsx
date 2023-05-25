import { component$, useSignal } from "@builder.io/qwik";

import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const isOpenCart = useSignal(false);
  const linkItems = ["Collections", "Men", "Women", "About", "Contact"];
  const flexBetween = `flex items-center justify-between `;
  return (
    <>
      <nav class={`${flexBetween} w-full h-15 py-7 mx-auto`}>
        {/* left side */}
        <img src="images/logo.svg" alt="logo" width={150} class="mr-10" />
        <ul class=" relative flex space-x-10 text-darkgrayishblue cursor-pointer ">
          {linkItems.map((item, id) => (
            <button key={id}>
              <Link class="hover:text-verydarkblue">{item}</Link>
            </button>
          ))}
        </ul>{" "}
        {/* right side */}
        <div class={`${flexBetween} relative  space-x-1 cursor-pointer`}>
          <button
            class="w-[100px] ml-60"
            onClick$={() => (isOpenCart.value = !isOpenCart.value)}
          >
            <img src="images/icon-cart.svg" alt="cart" />
            {/* cart */}
            {isOpenCart.value ? (
              <div class="absolute top-12 right-2  w-[290px] h-[200px] rounded-sm drop-shadow-3xl bg-white">
                <h1 class=" flex p-2 ">Cart</h1>
                <div class=" bg-grayishblue w-full h-[0.2px]">
                  <div class="flex items-center justify-center h-[140px]">
                    {" "}
                    <p class="">Your cart is empty.</p>
                  </div>
                </div>
              </div>
            ) : null}
          </button>

          {/* avatar */}
          <div class="border-4 rounded-full hover:border-orange w-[50px]">
            <img src="images/image-avatar.png" alt="avatar" />
          </div>
        </div>
      </nav>
      <div class="m-auto bg-lightgrayishblue w-full h-1 "></div>
    </>
  );
});
