<script>
  import { cart, addToCart } from "$lib/stores";

  export let data;

  /**
   * @type {any[]}
   */
  let areInCart = [];
  let products = data.products;
  
  $: {
    areInCart = products.map((/** @type {{ id: number; }} */ product) => {
      return $cart.some(item => item.id === product.id);
    });
  }
 
</script>

<div class="relative bg-white">
  <div
    class="mx-auto max-w-2xl px-4 pb-16 pt-8 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
  >
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">
      Customers also purchased
    </h2>
    <div
      class=" mt-6 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 h-full"
    >
      {#if data}
        {#each data.products as product, i (product.id)}
          <div class=" flex flex-col justify-between">
            <div class=" relative">
              <div
                class="w-auto flex justify-center overflow-hidden rounded-md h-56"
              >
                <img src={product.image} alt={product.title} class="h-full" />
              </div>
              <div class="mt-4 justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="/" class="text-lg font-semibold">
                      <span aria-hidden="true" class="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                </div>
                <p class="text-xl font-bold text-gray-900 my-1">
                  ₹ {product.price}
                </p>
              </div>
            </div>
            <button
            disabled={areInCart[i]}
              on:click={() => addToCart(product)}
              class="w-full mt-1 py-2 text-center font-semibold text-white bg-gray-900
              rounded-xl disabled:bg-gray-400 disabled:cursor-not-allowed disabled:text-black"
            >
              <h1>{areInCart[i] ? "Added to cart" : "Add to cart"}</h1>
            </button>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</div>
