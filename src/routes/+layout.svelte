<script>
  import Nav from "$lib/navbar/nav.svelte";
  import { requestStatus, isLoggedIn } from "$lib/stores/stores";
  import Icon from "@iconify/svelte";
  import "../app.css";
  import { onMount } from "svelte";

  let dark = true;
  let requestMessage = "";

  // on page mount check if userLoggedIn session storage is set and set the isLoggedIn store accordingly
  onMount(() => {
    if (typeof sessionStorage !== "undefined") {
      if (sessionStorage.getItem("userLoggedIn") !== null) {
        isLoggedIn.set(true);
      } else {
        isLoggedIn.set(false);
      }
    }
  });

  // store subscription to check if requestStatus is set and set the requestMessage for the page accordingly
  requestStatus.subscribe((value) => {
    if (value === null) {
      return;
    }
    requestMessage = value;
    setTimeout(() => {
      requestStatus.set(null);
    }, 30000);
  });
</script>

<div class:dark>
  <main class="defaultPage">
    <Nav bind:dark />
    {#if $requestStatus === "success"}
      <div
        class="flex items-center p-3 mb-3 text-white rounded-lg bg-green-500 dark:bg-green-900">
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
      <div
        class="flex items-center p-3 mb-3 text-white rounded-lg bg-red-500 dark:bg-red-900">
        <Icon class="messageIcons" icon="line-md:alert-circle" />
        <div class="ml-3 text-lg font-bold">
          {"Request " + requestStatus + "!"}
        </div>
        <button
          type="button"
          class="messageErrorClose"
          on:click={() => requestStatus.set(null)}>
          <Icon class="messageIcons" icon="mdi:close-circle-outline" />
        </button>
      </div>
    {/if}
    <slot />
  </main>
</div>
