import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { NavButton } from "~/components/comp";

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
    <div class="flex h-screen w-full flex-col overflow-x-clip overflow-y-auto bg-slate-900">
      <div>
        <Slot />
      </div>
      <nav class="fixed bottom-0 flex h-16 w-full rounded-t-2xl 
        border-t border-white/20 bg-slate-600">
        <NavButton link="/" icon="home" name="Home" />
        <NavButton link="/add" icon="add_circle" name="Add" />
      </nav>
    </div>
  );
});
