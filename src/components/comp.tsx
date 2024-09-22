import { component$ } from "@builder.io/qwik";

interface Props {
  link?: string,
  icon?: string,
  name?: string,
}

const NavButton = component$<Props>((props) => {
  return (
    <a href={props.link} class="flex group aspect-square h-full w-full justify-center">
      <div>
        <div class="flex h-full flex-col group-active:translate-y-5
        transition-transform items-center justify-center">
          <span class="material-symbols-rounded text-white">{props.icon}</span>
          <p>{props.name}</p>
        </div>
      </div>
    </a>
  );
});

export { NavButton };
