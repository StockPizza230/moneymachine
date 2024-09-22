import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex min-h-screen w-full overflow-y-auto">
      <div class="m-2 h-72 w-full overflow-clip rounded-3xl bg-slate-700">
        <div class=" h-24 w-full overflow-clip">
          <img
            width={300}
            height={200}
            class="h-full w-full object-cover"
            src="https://anotheroldguy.wordpress.com/wp-content/uploads/2019/03/placehold.jpg"
          />
        </div>
        <div class="h-32 ">
          <p class="m-2 h-8 text-xl">Title</p>
          <div class="h-20 w-full overflow-auto bg-slate-800 p-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              corporis eum adipisci est delectus suscipit placeat ipsam illo?
              Nostrum quas placeat praesentium voluptatum aliquam distinctio
              iure expedita explicabo est doloremque?
            </p>
          </div>
          <div class="flex h-16 w-full flex-row items-center justify-end gap-2 bg-slate-900 px-2">
            <button class="h-10 w-28 rounded-full bg-slate-800 text-white ">
              Remove
            </button>
            <button class="h-10 w-28 rounded-full bg-slate-700 text-white ">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
