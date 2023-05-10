import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="sticky flex items-center justify-center h-20 text-black  bottom-0 m-auto w-auto mt-0">
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
