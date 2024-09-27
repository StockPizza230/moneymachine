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
      <form class="flex flex-col gap-4" onSubmit$={handleSubmit}>
        <input placeholder="Name" type="text" bind:value={name}/>
        <input placeholder="price" type="number" bind:value={price}/>
        <input placeholder="description" type="text" bind:value={desc}/>
        <input placeholder="image" type="text" bind:value={img}/>
        <button type="submit" class="w-full h-12 border text-white">Add</button>
      </form>
    </div>
  );
});
