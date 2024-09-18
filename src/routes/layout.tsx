import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div class="flex h-screen w-full flex-col overflow-x-clip overflow-y-scroll">
      <div class="sticky top-0 flex h-12 w-full items-center justify-center bg-slate-600">
        <p>Header</p>
      </div>
      <div>
        <Slot />
      </div>
      <nav class="fixed bottom-0 flex h-16 w-full rounded-t-2xl border-t-2 bg-slate-600">
        <div class="flex aspect-square h-full w-full justify-center">
          <div class="flex h-full flex-col items-center justify-center">
            <span class="material-symbols-rounded">home</span>
            <p>Home</p>
          </div>
        </div>
        <div class="flex aspect-square h-full w-full justify-center">
          <div class="flex h-full flex-col items-center justify-center">
            <span class="material-symbols-rounded">add_circle</span>
            <p>Add</p>
          </div>
        </div>
      </nav>
    </div>
  );
});
