import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
        <div>
            DAMN
        </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Add",
  meta: [
    {
      name: "description",
      content: "add",
    },
  ],
};
