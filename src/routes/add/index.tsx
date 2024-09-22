import { component$ } from "@builder.io/qwik";
import { ItemCard } from "~/components/comp";
export default component$(() => {
  return (
    <div class="flex min-h-screen w-full overflow-y-auto">
      <ItemCard img="/icon512_rounded.png" name="Title" description="Placeholder"/>
    </div>
  );
});
