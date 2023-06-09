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

  const isOpenPic = useSignal(true);

  return (
    <div class="flex-1 w-full">
      <div class="w-[500px] cursor-pointer">
        <button onClick$={() => (isOpenPic.value = true)}>
          {" "}
          <img src={sliderPicture.value} class="rounded-lg object-cover" />
        </button>
        {/* modal */}
        {isOpenPic.value && (
          <div class=" w-full h-[990px] flex flex-col justify-center items-center backdrop-brightness-50 top-0 left-0  z-9999 absolute">
            <div class="relative">
              <div class="">
                {/* close */}
                <button
                  onClick$={() => (isOpenPic.value = false)}
                  class="relative  left-[95%] cursor-pointer "
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

              <div class="relative">
                <img
                  src={sliderPicture.value}
                  class="rounded-lg object-cover w-[500px]"
                />
              </div>
              {/* left */}
              <button
                class="absolute top-[50%] left-[-4%] bg-white rounded-full w-8 h-8 flex items-center justify-center "
                onClick$={() => sliderPicture.id > 0 && sliderPicture.id - 1}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-left"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              {/* right */}
              <button
                class="absolute  top-[50%] right-[-4%]  bg-white rounded-full  w-8 h-8 flex items-center justify-center"
                onClick$={() =>
                  sliderPicture.id < imgs.length && sliderPicture.id + 1
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-chevron-right"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      <div class="flex flex-row justify-between  mt-5 w-[500px] cursor-pointer ">
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
