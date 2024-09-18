import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex min-h-screen w-full overflow-y-auto">
      <div class="m-2 h-72 w-full overflow-clip rounded-3xl border-2 bg-slate-700 shadow-md">
        <div class=" h-24 w-full overflow-clip">
          <img
            width={300}
            height={200}
            class="h-full w-full object-cover"
            src="https://anotheroldguy.wordpress.com/wp-content/uploads/2019/03/placehold.jpg"
          />
        </div>
        <div class="h-32 ">
          <p class="text-xl m-2 h-8">Title</p>
          <div class="overflow-scroll w-full h-20 p-2 bg-slate-800">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              corporis eum adipisci est delectus suscipit placeat ipsam illo?
              Nostrum quas placeat praesentium voluptatum aliquam distinctio
              iure expedita explicabo est doloremque?
            </p>
          </div>
          <div class="w-full h-full bg-slate-900">

          </div>
        </div>
      </div>
    </div>
  );
});
