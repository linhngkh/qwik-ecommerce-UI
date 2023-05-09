import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Footer from "~/components/starter/footer/footer";
import Header from "~/components/starter/header/header";
import Section from "~/components/starter/section/section";
export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Section />
        <Slot />
      </main>
      <Footer />
    </>
  );
});
