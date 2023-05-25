import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import Section from "~/components/section/section";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="px-20 min-h-screen">
      <Header />
      <main>
        <Section />
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
