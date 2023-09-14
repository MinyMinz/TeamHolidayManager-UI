<script>
  import Nav from "$lib/navbar/nav.svelte";
  import { authMessage, isLoggedIn } from "$lib/stores/stores";
  import Icon from "@iconify/svelte";
  import "../app.css";

  let loggedIn = false;
  $isLoggedIn = loggedIn;
  let dark = true;

  if (typeof sessionStorage !== "undefined") {
    if (sessionStorage.getItem("userLoggedIn") !== null) {
      loggedIn = true;
    }
  }
</script>

<div class:dark>
  <main class="defaultPage">
    <Nav bind:dark />
    {#if $authMessage === "success"}
      <div
        class="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-200 dark:bg-green-900 dark:text-green-400"
      >
        <Icon class="messageIcons" icon="line-md:alert-circle" />
        <div class="ml-3 text-lg font-bold">Login successful!</div>
        <button
          type="button"
          class="messageClose"
          on:click={() => authMessage.set(null)}
        >
          <Icon class="messageIcons" icon="mdi:close-circle-outline" />
        </button>
      </div>
    {/if}
    <slot />
  </main>
</div>
