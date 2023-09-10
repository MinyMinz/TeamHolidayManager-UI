<script>
  import Nav from "$lib/components/navbar/nav.svelte";
  import "../app.css";
  import { isLoggedIn } from "$lib/components/stores/stores";

  let loggedIn = false;

  if (typeof sessionStorage !== "undefined") {
    if (sessionStorage.getItem("userLoggedIn") !== null) {
      loggedIn = true;
    }
  }

  $isLoggedIn = loggedIn;
  let dark = true;
</script>

<div class:dark>
  <!-- <main class="bg-gray-200 dark:bg-gray-800 text-black dark:text-white text-center"> -->
  <main class="defaultPage">
    <Nav bind:dark />
    <slot />
  </main>
</div>
