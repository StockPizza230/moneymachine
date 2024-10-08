import { component$, useVisibleTask$, useStore } from "@builder.io/qwik";
import { ItemCard } from "~/components/comp";

export default component$(() => {
  // Initialize store for list of items
  const listOfItems = useStore<any[]>([]); // Use an array type

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {

    const localStored = localStorage.getItem("ITEMS");

    if (localStored) {
      const items = JSON.parse(localStored);
      listOfItems.splice(0, listOfItems.length, ...items); // Update store with parsed items
    }

    console.log("Current items:", listOfItems);

    const historyBase: number[] = []

    const historyStored = localStorage.getItem("HISTORY");
    if (historyStored == null) {
      localStorage.setItem("HISTORY", JSON.stringify(historyBase))
    }
  });

  return (
    <div class="flex min-h-screen min-w-full items-start justify-center overflow-y-auto">
      <ul class="m-4 flex w-full flex-col items-center pb-14">
        {listOfItems.map((item, index) => (
          <ItemCard
            name={item.name}
            img={item.img}
            key={index}
            description={item.description}
            price={item.price}
            id={index}
          />
        ))}
      </ul>
    </div>
  );
});
