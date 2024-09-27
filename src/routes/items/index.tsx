import { $, component$, useSignal } from "@builder.io/qwik";
export default component$(() => {


  const name = useSignal("")
  const price = useSignal("")
  const desc = useSignal("")
  const img = useSignal("")
  

  const handleSubmit = $((e:Event) => {
    e.preventDefault()
    const itemData = {
      name: name.value,
      price: parseInt(price.value),
      description: desc.value,
      img: img.value,
      amount: 0,
    };
    const existingItems = JSON.parse(localStorage.getItem("ITEMS") || "[]");
    existingItems.push(itemData);
    localStorage.setItem("ITEMS", JSON.stringify(existingItems));

    console.log(JSON.stringify(itemData));

    // Reset input fields
    name.value = "";
    price.value = "";
    desc.value = "";
    img.value = "";


  });

  return (
    <div class="flex min-h-screen min-w-full items-center justify-center overflow-y-auto">
      <form class="flex flex-col gap-2" onSubmit$={handleSubmit}>
        <input placeholder="Name" class="outline-none p-2 rounded-xl text-white bg-slate-950" type="text" bind:value={name}/>
        <input placeholder="price" type="number" class="outline-none p-2 rounded-xl text-white bg-slate-950" bind:value={price}/>
        <input placeholder="description" type="text" class="outline-none p-2 rounded-xl text-white bg-slate-950" bind:value={desc}/>
        <input placeholder="image" type="text" class="outline-none p-2 rounded-xl text-white bg-slate-950" bind:value={img}/>
        <button type="submit" class="w-full h-12 border-2 rounded-full bg-slate-800
         active:bg-slate-950 text-white active:translate-y-2 duration-75 transition-all">Add</button>
      </form>
    </div>
  );
});
