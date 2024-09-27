import {
  component$,
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
  const itemData = useStore<Item[]>([]);
  const historyData = useStore<number[]>([]);
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const localStored = localStorage.getItem("ITEMS");
    if (localStored) {
      const parsedData: Item[] = JSON.parse(localStored);
      itemData.splice(0, itemData.length, ...parsedData);
    }
    
    const localhis = localStorage.getItem("HISTORY");
    if (localhis) {
      const parsedHistory: number[] = JSON.parse(localhis);
      historyData.splice(0, historyData.length, ...parsedHistory);
      historyData.reverse();
    }
  });
  return (
    <div class="h-screen flex flex-col pb-24 overflow-clip m-4 gap-5">
      <div class="h-72 w-full p-2 overflow-y-auto overflow-x-clip rounded-2xl border-t border-white/50 bg-slate-600">
        <p class="font-bold text-lg">All Items in Your List</p>
        {itemData.length > 0 ? (
          itemData.map((item, index) => (
            <div key={index} class="flex h-20 w-full items-center justify-between border-y px-4">
              <div class="flex flex-col justify-center items-start">
                <p class="text-lg font-bold">{item.name}</p>
                <p class="bg-green-500 rounded-md px-2 py-1 w-20 text-center border-2 border-green-600">
                  {item.price} THB
                </p>
              </div>
              <img
                width={64}
                height={64}
                class="h-16 w-16 rounded-full object-cover"
                src={item.img}
                alt={item.name}
              />
            </div>
          ))
        ) : (
          <p class="text-white justify-center items-center flex h-full w-full">No items available :C</p>
        )}
      </div>

      <div class="h-4/6 p-4 flex w-full flex-col overflow-y-auto overflow-x-clip rounded-2xl border-t border-white/50 bg-slate-600">
        <p class="font-bold text-lg">History</p>
        {historyData.length > 0 ? (
          historyData.map((index) => (
            itemData[index] ? (
              <div key={index} class="flex h-20 w-full items-center justify-between border-y px-4">
                <div class="flex flex-col justify-center items-start">
                  <p class="text-lg font-bold">{itemData[index].name}</p>
                  <p class="bg-green-500 rounded-md px-2 py-1 w-20 text-center border-2 border-green-600">
                    {itemData[index].price} THB
                  </p>
                </div>
                <img
                  width={64}
                  height={64}
                  class="h-16 w-16 rounded-full object-cover"
                  src={itemData[index].img}
                  alt={itemData[index].name}
                />
              </div>
            ) : null
          ))
        ) : (
          <p class="text-white justify-center items-center flex h-full w-full">No History</p>
        )}
      </div>
    </div>
  );
});
