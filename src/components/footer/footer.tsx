import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="fixed bottom-0 inset-x-0 max-w-max mx-auto pb-3">
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
