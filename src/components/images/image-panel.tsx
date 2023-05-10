import { component$, useSignal, useStore } from "@builder.io/qwik";

// @ts-ignore

export default component$(() => {
  const imgs = [
    { id: 0, value: "images/image-product-1.jpg" },
    { id: 1, value: "images/image-product-2.jpg" },
    { id: 2, value: "images/image-product-3.jpg" },
    { id: 3, value: "images/image-product-4.jpg" },
  ];

  const sliderPicture = useStore(imgs[0]);

  const isOpenPic = useSignal(false);

  return (
    <div class="flex-1 w-full">
      <div class="w-[500px] cursor-pointer">
        <button onClick$={() => (isOpenPic.value = true)}>
          {" "}
          <img src={sliderPicture.value} class="rounded-lg object-cover" />
        </button>
        {/* modal */}
        {isOpenPic.value && (
          <div class="w-full h-[990px] flex flex-col justify-center items-center backdrop-brightness-50 top-0 left-0  z-9999 absolute">
            <div class="">
              <div class="">
                <button
                  onClick$={() => (isOpenPic.value = false)}
                  class="absolute top-40 right-[35%] cursor-pointer "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="hsl(26, 100%, 55%)"
                    stroke="hsl(26, 100%, 55%)"
                    d
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-x"
                  >
                    <line x1="18" x2="6" y1="6" y2="18"></line>
                    <line x1="6" x2="18" y1="6" y2="18"></line>
                  </svg>
                </button>
              </div>

              <img
                src={sliderPicture.value}
                class="rounded-lg object-cover w-[500px]"
              />
            </div>
          </div>
        )}
      </div>

      <div class="flex flex-row justify-evenly  mt-5 w-[500px] cursor-pointer ">
        {" "}
        {imgs.map((pic) => (
          <div key={pic.id} class="">
            <img
              src={pic.value}
              alt={pic.value}
              width={100}
              onClick$={() => sliderPicture.value}
              class="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
});
