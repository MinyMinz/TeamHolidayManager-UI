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
    class="loginButton"
  >
    Logout
  </button>
{:else}
  <button
    on:click={() => goto("/login")}
    class="loginButton"
  >
    Login
  </button>
{/if}
