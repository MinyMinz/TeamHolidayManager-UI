<script lang="ts">
  import { isLoggedIn, requestStatus } from "$lib/stores/stores";
  import Icon from "@iconify/svelte";
  import Loginlogoutbutton from "./loginlogoutbutton.svelte";

  export let dark = true;
  let requestMessage = "";

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

    // store subscription to check if requestStatus is set and set the requestMessage for the page accordingly
    requestStatus.subscribe((value: string | null) => {
    if (value === null) {
      return;
    }
    requestMessage = value;
    setTimeout(() => {
      requestStatus.set(null);
    }, 30000);
  });
</script>

<nav
  class="flex-no-wrap fixed bg-gray-400 dark:bg-slate-900 w-full md:flex md:justify-between md:items-center z-50">
  <div class="flex items-center justify-between">
    <a
      class="ml-1 text-xl font-bold text-gray-800 hover:text-blue-500 dark:text-white md:text-2xl dark:hover:text-blue-300"
      href="/">Phoebus Software</a>
  </div>

  <div
    class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-8 md:mt-0">
    <!-- If isLoggedIn store is true then navbar items should be displayed -->
    {#if $isLoggedIn}
      <a class="navbarItems" href="/holidayRequest"> Holiday Requests</a>
      <a class="navbarItems" href="/user"> User Management</a>
      <!-- if loggedinUser role is SuperAdmin user should be able to access team managment page -->
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
      }}>
      {#if dark}
        <Icon
          inline
          icon="line-md:sunny-outline-to-moon-loop-transition"
          style="width: 30px; height: 30px;" />
      {/if}
      {#if !dark}
        <Icon
          inline
          icon="line-md:moon-to-sunny-outline-loop-transition"
          style="width: 30px; height: 30px" />
      {/if}
    </button>
    <!-- This is just calling the svelte file for the loginLogoutButton to be displayed -->
    <Loginlogoutbutton />
  </div>
</nav>

<div class="popup-container">
  {#if $requestStatus === "success"}
    <div class="flex items-center p-3 mb-3 text-white rounded-lg bg-green-500 dark:bg-green-900">
      <Icon class="messageIcons" icon="line-md:alert-circle" />
      <div class="ml-3 text-lg font-bold">
        {"Request " + requestMessage + "!"}
      </div>
      <button
        type="button"
        class="messageSuccessClose"
        on:click={() => requestStatus.set(null)}>
        <Icon class="messageIcons" icon="mdi:close-circle-outline" />
      </button>
    </div>
  {:else if $requestStatus !== null}
    <div class="flex items-center p-3 mb-3 text-white rounded-lg bg-red-500 dark:bg-red-900">
      <Icon class="messageIcons" icon="line-md:alert-circle" />
      <div class="ml-3 text-lg font-bold">
        {"Request " + requestMessage + "!"}
      </div>
      <button
        type="button"
        class="messageErrorClose"
        on:click={() => requestStatus.set(null)}>
        <Icon class="messageIcons" icon="mdi:close-circle-outline" />
      </button>
    </div>
  {/if}
</div>
