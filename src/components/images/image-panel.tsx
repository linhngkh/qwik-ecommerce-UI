import { component$, $, useStore } from "@builder.io/qwik";

// @ts-ignore

export default component$(() => {
  const imgs = [
    { id: 0, value: "images/image-product-1.jpg" },
    { id: 1, value: "images/image-product-2.jpg" },
    { id: 2, value: "images/image-product-3.jpg" },
    { id: 3, value: "images/image-product-4.jpg" },
  ];

  const sliderPicture = useStore(imgs[0]);

  const handleClick = $((index) => {
    const slider = imgs[index];
    sliderPicture(slider);
  });

  return (
    <div class="flex-1 w-full">
      <div class="w-[500px]">
        <img src={sliderPicture.value} class="rounded-lg object-cover" />
      </div>

      <div class="flex flex-row justify-evenly  mt-5 w-[500px] cursor-pointer ">
        {" "}
        {imgs.map((pic, i) => (
          <div key={pic.id} class="" >
            <img
              src={pic.value}
              alt={pic.value}
              width={100}
              onClick$={() => handleClick(i)}
              class="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
});
