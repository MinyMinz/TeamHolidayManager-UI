<script>
  import Nav from "$lib/navbar/nav.svelte";
  import { requestStatus, isLoggedIn } from "$lib/stores/stores";
  import Icon from "@iconify/svelte";
  import "../app.css";

  let loggedIn = false;
  $isLoggedIn = loggedIn;
  let dark = true;
  let requestMessage = "";

  if (typeof sessionStorage !== "undefined") {
    if (sessionStorage.getItem("userLoggedIn") !== null) {
      loggedIn = true;
    }
  }

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
        class="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-200 dark:bg-green-900 dark:text-green-400"
      >
        <Icon class="messageIcons" icon="line-md:alert-circle" />
        {#if loggedIn === true}
          <div class="ml-3 text-lg font-bold">Logged In Successfully!</div>
        {:else if loggedIn === false}
          <div class="ml-3 text-lg font-bold">logged Out Successfully!</div>
        {:else}
          <div class="ml-3 text-lg font-bold">
            {"Request " + requestMessage + "!"}
          </div>
        {/if}
        <button
          type="button"
          class="messageSuccessClose"
          on:click={() => requestStatus.set(null)}
        >
          <Icon class="messageIcons" icon="mdi:close-circle-outline" />
        </button>
      </div>
    {:else if $requestStatus !== null}
      <div
        class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-200 dark:bg-red-900 dark:text-red-400"
      >
        <Icon class="messageIcons" icon="line-md:alert-circle" />
        <div class="ml-3 text-lg font-bold">
          {"Request " + requestStatus + "!"}
        </div>
        <button
          type="button"
          class="messageErrorClose"
          on:click={() => requestStatus.set(null)}
        >
          <Icon class="messageIcons" icon="mdi:close-circle-outline" />
        </button>
      </div>
    {/if}
    <slot />
  </main>
</div>
