<script>
  import Nav from "$lib/navbar/nav.svelte";
  import { userIsLoggedIn } from "$lib/stores/stores";
  import "../app.css";
  import { onMount } from "svelte";

  let dark = true;

  // on page mount check if userLoggedIn session storage is set and set the userIsLoggedIn store accordingly
  onMount(() => {
    if (typeof sessionStorage !== "undefined") {
      if (sessionStorage.getItem("userLoggedIn") !== null) {
        userIsLoggedIn.set(true);
      } else {
        userIsLoggedIn.set(false);
      }
    }
  });
</script>

<div class:dark>
    <Nav bind:dark />
    <slot />
</div>
