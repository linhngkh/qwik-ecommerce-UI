import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
export default component$(() => {
  return (
    <>
      <nav class="flex items-center justify-start w-full h-15 p-7 space-x-10">
        <img src="images/logo.svg" alt="logo" width={150} />
        <ul class="flex space-x-20 text-darkgrayishblue cursor-pointer">
          <Link class="hover:text-verydarkblue">Collections</Link>
          <Link class="hover:text-verydarkblue">Men</Link>
          <Link class="hover:text-verydarkblue">Women</Link>
          <Link class="hover:text-verydarkblue">About</Link>
          <Link class="hover:text-verydarkblue">Contact</Link>
        </ul>{" "}
        <div class="flex justify-end items-center space-x-1 ml-2 cursor-pointer ">
          <div class="ml-60 w-[100px]">
            <img src="images/icon-cart.svg" alt="cart" class="" />
          </div>
          <div class="border-4 rounded-full hover:border-orange w-[50px]">
            <img src="images/image-avatar.png" alt="avatar" />
          </div>
        </div>
      </nav>
      <div class="m-auto bg-lightgrayishblue w-full h-1 "></div>
    </>
  );
});
