<script>
  import Announcement from "../components/announcement.svelte";
  import Header from "../components/header.svelte";
  import "../app.css";
  import Cart from "../components/cart.svelte";
</script>

<svelte:head>
  <title>Ecommerce</title>
</svelte:head>

<Announcement />
<Header />
<slot />
<Cart />
