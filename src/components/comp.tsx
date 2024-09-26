import { component$ } from "@builder.io/qwik";

interface NavProp {
  link?: string;
  icon?: string;
  name?: string;
}

interface ItemProp {
  img?: string;
  name?: string;
  description?: string;
  id?: number;
  price?: number;
}

const NavButton = component$<NavProp>((props) => {
  return (
    <a
      href={props.link} 
      class="group flex aspect-square h-full w-full justify-center"
    >
      <div>
        <div
          class="flex h-full flex-col items-center
        justify-center transition-transform group-active:translate-y-5"
        >
          <span class="material-symbols-rounded text-white">{props.icon}</span>
          <p>{props.name}</p>
        </div>
      </div>
    </a>
  );
});

const ItemCard = component$<ItemProp>((props) => {

  return (
    <div class="m-2 h-72 w-full overflow-clip rounded-3xl bg-slate-700">
      <div class=" h-24 w-full overflow-clip">
        <img
          width={300}
          height={200}
          class="h-full w-full object-cover"
          src={props.img}
        />
      </div>
      <div class="h-32">
        <p class="m-2 h-8 text-xl">{props.name}</p>
        <div class="h-20 w-full overflow-auto bg-slate-800 p-2">
          <p>{props.description}</p>
        </div>
        <div class="flex h-16 w-full flex-row items-center justify-end gap-2 bg-slate-900 px-2">
          <button class="h-10 w-28 rounded-full bg-slate-800 text-white ">
            Remove
          </button>
          <button class="h-10 w-28 rounded-full bg-slate-700 text-white " onClick$={() => {
            //send an event with ID
            console.log(props.id);
          }}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
});

export { NavButton, ItemCard };
