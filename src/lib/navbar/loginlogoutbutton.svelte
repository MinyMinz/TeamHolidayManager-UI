<script lang="ts">
  import { goto } from "$app/navigation";
  import { isLoggedIn } from "$lib/stores/stores";
  import LogoutModal from "./logoutModal.svelte";

  let showModal = false;
</script>

{#if $isLoggedIn}
  <button
    on:click={() => {
      showModal = true;
    }}
    class="loginButton"
  >
    Sign Out
  </button>
{:else}
  <button on:click={() => goto("/login")} class="loginButton"> Sign In </button>
{/if}

{#if showModal}
  <LogoutModal bind:showModal />
{/if}
