import { component$ } from "@builder.io/qwik";
import ImagePanel from "../images/image-panel";
import Info from "../info/info";

export default component$(() => {
  return (
    <section class="flex mt-10 px-10">
      <ImagePanel />
      <Info />
    </section>
  );
});
