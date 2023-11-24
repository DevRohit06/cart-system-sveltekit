<script>
  import Delete from "../assets/svgs/delete.svg"
  import {
    openCart,
    cart,
    increaseQuantity,
    decreaseQuantity,
    totalCartPrice,
    removeFromCart,
  } from "$lib/stores";
  import { fly, slide } from "svelte/transition";
</script>

<div>
  {#if $openCart}
    <div
      in:fly={{ x: 200 }}
      out:fly={{ x: 200 }}
      class="fixed inset-0 overflow-hidden"
    >
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
        >
          <div class="pointer-events-auto w-screen max-w-md">
            <div class="flex h-full flex-col bg-white shadow-xl">
              <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div class="flex items-start justify-between">
                  <h1 class="text-lg font-medium text-gray-900">
                    Shopping cart
                  </h1>
                  <div class="ml-3 flex h-7 items-center">
                    <button
                      on:click={() => openCart.update((value) => !value)}
                      type="button"
                      class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                    >
                      <svg
                        fill="#000000"
                        viewBox="0 0 32 32"
                        height="2em"
                        xmlns="http://www.w3.org/2000/svg"
                        ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g><g id="SVGRepo_iconCarrier">
                          <path
                            d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"
                          ></path>
                        </g></svg
                      >
                      <span class="absolute -inset-0.5" />
                      <span class="sr-only">Close panel</span>
                    </button>
                  </div>
                </div>

                <div class="mt-8">
                  <div class="flow-root">
                    <ul role="list" class="-my-6 divide-y divide-gray-200 overflow-y-visible">
                      {#if cart}
                        {#each $cart as item}
                          <li class="flex py-6">
                            <div
                              class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                            >
                              <img
                                src={item.image}
                                alt={item.title}
                                class="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div
                                  class="flex flex-col justify-between text-base font-medium text-gray-900"
                                >
                                  <h3 class="text-md">
                                    <a href={"/"}>
                                      {item.title}
                                    </a>
                                  </h3>
                                  <p class="font-bold">
                                    ₹ {item.totalPrice || item.price}
                                  </p>
                                </div>
                              </div>
                              <div
                                class="flex flex-1 items-end justify-between text-sm"
                              >
                                <p
                                  class="text-gray-500 flex gap-4 items-center"
                                >
                                  Qty :
                                </p>
                                <div class="flex gap-1 items-center">
                                  <button
                                    on:click={() => decreaseQuantity(item.id)}
                                    class="px-2 py-1 bg-indigo-600 text-white font-extrabold rounded-md"
                                  >
                                    -
                                  </button>
                                  <div
                                    class="bg-gray-200 w-8 py-1 text-center rounded-md"
                                  >
                                    {item.quantity ? item.quantity : 1}
                                  </div>

                                  <button
                                    on:click={() => increaseQuantity(item.id)}
                                    class="px-2 py-1 bg-indigo-600 text-white font-extrabold rounded-md"
                                  >
                                    +
                                  </button>
                                </div>

                                <div class="flex">
                                  <button
                                    on:click={() => removeFromCart(item.id)}
                                    type="button"
                                    class="font-medium  stroke-white p-1  bg-indigo-600 rounded-md"
                                  >
                                    <svg
                                      height="1.5em"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      ><g
                                        id="SVGRepo_bgCarrier"
                                        stroke-width="0"
                                      ></g><g
                                        id="SVGRepo_tracerCarrier"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></g><g id="SVGRepo_iconCarrier">
                                        <path
                                          d="M10 11V17"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        ></path>
                                        <path
                                          d="M14 11V17"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        ></path>
                                        <path
                                          d="M4 7H20"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        ></path>
                                        <path
                                          d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        ></path>
                                        <path
                                          d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        ></path>
                                      </g></svg
                                    >
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        {/each}
                      {/if}
                    </ul>
                  </div>
                </div>
              </div>

              <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div
                  class="flex gap-4 justify-between text-base font-medium text-gray-900"
                >
                  <div class="flex flex-col w-full">
                    <input
                      class="bg-gray-100 px-2 h-10 w-full mb-2 rounded-md border-2 border-gray-300 placeholder:text-center"
                      type="text"
                      placeholder="Coupon Code"
                    />
                    <div
                      class="flex justify-between items-center px-4 transition-opacity w-full text-sm bg-green-600 rounded-md text-white text-center"
                    >
                      Coupon Applied Succcessfully
                      <button
                        type="button"
                        class="relative -m-2 p-2 text-white hover:text-gray-500"
                      >
                        <span class="absolute -inset-0.5" />
                        <span class="sr-only">Close panel</span>
                      </button>
                    </div>

                    <div
                      class="flex justify-between items-center px-4 transition-opacity w-full text-sm bg-red-400 rounded-md text-white text-center"
                    >
                      Invalid coupon code
                      <button
                        type="button"
                        class="relative -m-2 p-2 text-white hover:text-gray-500"
                      >
                        <span class="absolute -inset-0.5" />
                        <span class="sr-only">Close panel</span>
                      </button>
                    </div>
                  </div>
                  <button
                    class="h-10 px-5 text-white rounded-md py-2.5 bg-indigo-600"
                  >
                    Apply
                  </button>
                </div>

                <div
                  class="flex justify-between text-base font-medium text-gray-900"
                >
                  <p>Subtotal</p>
                  <p>₹ {$totalCartPrice}</p>
                </div>
                <p class="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div class="mt-6">
                  <a
                    href="/"
                    class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
