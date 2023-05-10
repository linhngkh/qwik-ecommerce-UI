import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="text-black fixed bottom-0 m-auto w-full">
      <div>
        <a href="https://github.com/linhngkh" target="_blank">
          <span>Made with ♡ by Linh Nguyen</span>
          <span class="space-x-2">|</span>
          <span>{serverTime.value.date}</span>
        </a>
      </div>
    </footer>
  );
});
