import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="inset-x-0 max-w-max mx-auto p-10">
      <div class="font-bold">
        <a href="https://github.com/linhngkh" target="_blank">
          <span>Made with ♡ by Linh Nguyen</span>
          <span> | </span>
          <span>{serverTime.value.date}</span>
        </a>
      </div>
    </footer>
  );
});
