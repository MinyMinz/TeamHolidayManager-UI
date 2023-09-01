<script>
  import { userLoggedIn } from "../stores/stores";
  import { goto } from "$app/navigation";

  function handleLogout() {
    // Set user state to logged out
    userLoggedIn.set(null);
    // Redirect the user to the root page after logout
    goto("/login");
  }
</script>

{#if $userLoggedIn}
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
