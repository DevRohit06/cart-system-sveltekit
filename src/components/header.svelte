<script>
    import { openCart, cart } from "$lib/stores";
    
</script>

<div class="">
  <header
    class="header py-4 fixed z-20 top-0 w-full bg-white shadow-md flex items-center justify-between px-8 py-02"
  >
    <h1 class="w-3/12 text-2xl font-extrabold">
      <a href="/">Store</a>
    </h1>

    <button class="relative" on:click={() => openCart.update((value) => !value)}>
        <div class="absolute -top-2 -right-2">
           <div class="bg-indigo-600 text-white w-5 h-5 rounded-full text-[12px] flex justify-center items-center">
            {$cart?.length || 0} 
           </div>
        </div>
      <svg
        viewBox="0 0 24 24"
        height="2em"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g><g id="SVGRepo_iconCarrier">
          <path
            d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g></svg
      >
    </button>
  </header>
</div>
