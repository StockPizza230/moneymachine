import {
  component$,
  useSignal,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";

interface Item {
  name: string;
  price: number;
  description: string;
  img: string;
  amount: number;
}

export default component$(() => {
  const full = useSignal(false);
  const itemData = useStore<Item[]>([]);

  useVisibleTask$(() => {
    const localStored = localStorage.getItem("ITEMS");
    if (localStored == null) {
      full.value = false;
    } else {
      const parsedData: Item[] = JSON.parse(localStored);
      // Directly set itemData to the parsed array
      itemData.splice(0, itemData.length, ...parsedData);
    }
    console.log(JSON.stringify(itemData));
  });

  return (
    <div class="flex min-h-screen overflow-y-auto overflow-x-clip">
      <div class="m-4 h-72 w-full overflow-x-clip overflow-y-auto  rounded-2xl border-t border-white/50 bg-slate-600">
        <p>All Item in your list</p>
        {itemData.length > 0 ? (
          itemData.map((item, index) => (
            <>
            <div class="h-20 w-full items-center justify-between border-y px-4 flex">
              <p key={index} class="">
                {item.name}
              </p>
              <img width={64} height={64} class="rounded-full object-cover h-16 w-16" src={item.img} />
            </div>
            </>

          ))
        ) : (
          <p class="text-white">No items available</p>
        )}
      </div>
    </div>
  );
});
