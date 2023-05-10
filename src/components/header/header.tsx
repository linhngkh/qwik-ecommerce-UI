import { component$, useSignal } from "@builder.io/qwik";

import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const isOpenCart = useSignal(false);
  const linkItems = ["Collections", "Men", "Women", "About", "Contact"];
  return (
    <>
      <nav class="flex items-center justify-start w-full h-15 p-7 space-x-10">
        {/* left side */}
        <img src="images/logo.svg" alt="logo" width={150} />
        <ul class=" relative flex space-x-20 text-darkgrayishblue cursor-pointer ">
          {linkItems.map((item, id) => (
            <button key={id}>
              <Link class="hover:text-verydarkblue">{item}</Link>
            </button>
          ))}
        </ul>{" "}
        {/* right side */}
        <div class="relative flex justify-around items-center space-x-1 cursor-pointer ">
          <button
            class="ml-60 w-[100px]"
            onClick$={() => (isOpenCart.value = !isOpenCart.value)}
          >
            <img src="images/icon-cart.svg" alt="cart" />
            {isOpenCart.value ? (
              <div class="absolute top-12  w-[270px] h-[180px] rounded-sm drop-shadow-3xl bg-white">
                <h1 class=" flex p-2 ">Cart</h1>
                <div class="m-auto bg-grayishblue w-full h-[0.2px] "></div>
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
