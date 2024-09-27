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
    <div class="h-screen flex flex-col pb-24 m-4 gap-5 overflow-clip">
      <div class="h-72 w-full p-2 overflow-y-auto overflow-x-clip  rounded-2xl border-t border-white/50 bg-slate-600">
        <p>All Item in your list</p>
        {itemData.length > 0 ? (
          itemData.map((item, index) => (
            <>
              <div class="flex h-20 w-full items-center justify-between border-y px-4">
                <div class="flex flex-col justify-center items-start">
                  <p key={index} class="text-lg font-bold">
                    {item.name}
                  </p>
                  <p class="bg-green-500 rounded-md px-2 py-1 w-20 text-center border-2 border-green-600">{item.price} THB</p>
                </div>
                <img
                  width={64}
                  height={64}
                  class="h-16 w-16 rounded-full object-cover"
                  src={item.img}
                />
              </div>
            </>
          ))
        ) : (
          <p class="text-white justify-center items-center flex h-full w-full">No items available :C</p>
        )}
      </div>

      <div class="h-4/6 p-4 flex w-full overflow-y-auto overflow-x-clip rounded-2xl border-t border-white/50 bg-slate-600">
      <p> History </p>
      </div>
    </div>
  );
});
