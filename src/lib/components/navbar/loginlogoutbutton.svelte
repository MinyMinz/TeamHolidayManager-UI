<script lang="ts">
  import { goto } from "$app/navigation";
  import { isLoggedIn } from "$lib/components/stores/stores";


  function handleLogout() {
    // Remove the userLoggedIn from sessionStorage
    if (typeof sessionStorage !== "undefined") {
      sessionStorage.removeItem("userLoggedIn");
    }
    $isLoggedIn = false;
    // Redirect the user to the root page after logout
    goto("/login");
  }
</script>

{#if $isLoggedIn}
  <button
    on:click={handleLogout}
    class="px-4 py-2 text-sm font-medium tracking-wide text-black dark:text-white capitalize transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
  >
    Logout
  </button>
{:else}
  <button
    on:click={() => goto("/login")}
    class="px-4 py-2 text-sm font-medium tracking-wide text-black dark:text-white capitalize transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
  >
    Login
  </button>
{/if}
