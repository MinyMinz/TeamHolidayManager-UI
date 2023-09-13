<script lang="ts">
  import { isLoggedIn } from "$lib/stores/stores";
  import Icon from "@iconify/svelte";
  import Loginlogoutbutton from "./loginlogoutbutton.svelte";

  export let dark = true;

  const loggedInUser: any = {};
  $: if ($isLoggedIn) {
    if (typeof sessionStorage !== "undefined") {
      const userLoggedIn = sessionStorage.getItem("userLoggedIn");
      if (userLoggedIn !== null) {
        for (const [key, value] of Object.entries(JSON.parse(userLoggedIn))) {
          loggedInUser[key] = value;
        }
      }
    }
  }
</script>

<nav
  class="bg-gray-400 dark:bg-slate-900 h-12 md:flex md:justify-between md:items-center sticky top-0 z-50"
>
  <div class="flex items-center justify-between">
    <a
      class="ml-1 text-xl font-bold text-gray-800 hover:text-blue-500 dark:text-white md:text-2xl dark:hover:text-blue-300"
      href="/">Phoebus Software</a
    >
  </div>

  <div
    class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-8 md:mt-0"
  >
    {#if $isLoggedIn}
      <a class="navbarItems" href="/holidayRequest"> Holiday Requests</a>
      <a class="navbarItems" href="/user"> User Management</a>
      {#if loggedInUser.role_name === "SuperAdmin"}
        <a class="navbarItems" href="/team"> Team Management</a>
      {/if}
    {/if}
  </div>
  <div class="flex text-gray-800 dark:text-white">
    <button
      class="mx-2 float-left"
      on:click|preventDefault={() => {
        dark = !dark;
      }}
    >
      {#if dark}
        <Icon
          inline
          icon="line-md:sunny-outline-to-moon-loop-transition"
          style="width: 30px; height: 30px;"
        />
      {/if}
      {#if !dark}
        <Icon
          inline
          icon="line-md:moon-to-sunny-outline-loop-transition"
          style="width: 30px; height: 30px"
        />
      {/if}
    </button>
    <Loginlogoutbutton />
  </div>
</nav>
