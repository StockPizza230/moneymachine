import { component$, useVisibleTask$, useOn, useOnDocument, useOnWindow } from "@builder.io/qwik";
import { ItemCard } from "~/components/comp";

export default component$(() => {

  let listOfItems = {
    "Items":[
      {
        "name":"Test",
        "price": 2,
        "description":"an item",
        "img":"",
        "amount": 0
      },
      {
        "name":"Test",
        "price": 2,
        "description":"an item",
        "img":"",
        "amount": 0
      },
      {
        "name":"Test",
        "price": 2,
        "description":"an item",
        "img":"",
        "amount": 0
      },
    ]
  };

  useVisibleTask$(()=>{
    if (localStorage.getItem("TEST") == null){
      localStorage.setItem("TEST", JSON.stringify(listOfItems));
      console.log(localStorage.getItem("TEST"));
    } else {
    localStorage.removeItem("TEST");
    console.log(localStorage.getItem("TEST"));
    }
  })

  

  return (
    <div class="flex min-h-screen min-w-full items-center justify-center overflow-y-auto">
      <ul class='w-full m-4 flex items-center pb-14 flex-col'>
        {listOfItems.Items.map((item, index) => (
          <ItemCard name={item.name} img={item.img} key={index} description={item.description} price={item.price} id={index}/>
        ))}
      </ul>
    </div>
  );
});
