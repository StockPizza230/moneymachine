import { component$, useSignal, useStore, useVisibleTask$ } from "@builder.io/qwik";
export default component$(() => {


  const name = useSignal("")
  const price = useSignal("")
  const desc = useSignal("")
  const img = useSignal("")
  let dataArray = {
      name: name,
      price: price,
      description: desc,
      img: img,
      amount: 0,
  }


  return (
    <div class="flex min-h-screen min-w-full items-center justify-center overflow-y-auto">
      <form class="flex flex-col gap-4">
        <input placeholder="Name" type="text" bind:value={name}/>
        <input placeholder="price" type="number" bind:value={price}/>
        <input placeholder="description" type="text" bind:value={desc}/>
        <input placeholder="image" type="text" bind:value={img}/>
        <button type="submit" class="w-full h-12 border text-white">Add</button>
      </form>
    </div>
  );
});
